import {
  getAllBlogPosts as getFallbackBlogPosts,
  type BlogPost,
} from "@/content/blog";

interface ActaPost {
  slug: string;
  title: string;
  content: string;
  excerpt: string | null;
  published_at: string;
}

interface ActaContentApiResponse {
  posts: ActaPost[];
}

const ACTA_BLOG_URL = process.env.ACTA_BLOG_API_URL;
const ACTA_FETCH_TIMEOUT_MS = 3000;
let blogPostsPromise: Promise<BlogPost[]> | null = null;

function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, " ");
}

function getPublishedDate(isoDate: string): string {
  const dateOnly = isoDate.split("T")[0];
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateOnly)) {
    return dateOnly;
  }

  return new Date().toISOString().split("T")[0];
}

function calculateReadingTime(htmlContent: string): number {
  const wordCount = stripHtmlTags(htmlContent)
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.ceil(wordCount / 200));
}

function buildExcerpt(post: ActaPost): string {
  if (post.excerpt?.trim()) {
    return post.excerpt.trim();
  }

  const plainText = stripHtmlTags(post.content).replace(/\s+/g, " ").trim();
  if (plainText.length <= 180) {
    return plainText;
  }

  return `${plainText.slice(0, 177)}...`;
}

function transformPost(post: ActaPost): BlogPost {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    date: getPublishedDate(post.published_at),
    author: "Hoof & Paw Team",
    excerpt: buildExcerpt(post),
    content: post.content,
    readingTime: calculateReadingTime(post.content),
  };
}

async function fetchActaBlogPosts(): Promise<BlogPost[]> {
  if (!ACTA_BLOG_URL) {
    throw new Error("ACTA_BLOG_API_URL not configured");
  }

  const response = await fetch(ACTA_BLOG_URL, {
    next: { revalidate: false },
    signal: AbortSignal.timeout(ACTA_FETCH_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`Acta API error: ${response.status}`);
  }

  const data = (await response.json()) as Partial<ActaContentApiResponse>;
  if (!Array.isArray(data.posts)) {
    throw new Error("Acta API response is missing a posts array");
  }

  return data.posts
    .map(transformPost)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

async function loadBlogPosts(): Promise<BlogPost[]> {
  try {
    return await fetchActaBlogPosts();
  } catch (error) {
    console.error("Falling back to static blog posts:", error);
    return getFallbackBlogPosts();
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!blogPostsPromise) {
    blogPostsPromise = loadBlogPosts();
  }

  return blogPostsPromise;
}

export async function getBlogPost(
  slug: string
): Promise<BlogPost | undefined> {
  const posts = await getAllBlogPosts();
  return posts.find((post) => post.slug === slug);
}
