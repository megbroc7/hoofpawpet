interface ReviewCTAProps {
  variant?: "primary" | "secondary" | "header";
  className?: string;
}

// Opens the verified Google Business Profile (Maps) where customers can leave a review.
// Uses the stable place CID rather than a g.page short code (which proved unreliable
// while Google was merging a duplicate listing).
const REVIEW_URL = "https://www.google.com/maps?cid=10828094684110906589";

export default function ReviewCTA({
  variant = "primary",
  className = "",
}: ReviewCTAProps) {
  const styles = {
    primary:
      "bg-sage text-white hover:bg-sage-dark font-bold py-3 px-6 rounded-lg",
    secondary:
      "bg-honey text-white hover:bg-honey-light font-bold py-3 px-6 rounded-lg",
    header:
      "bg-sage text-white hover:bg-sage-dark font-semibold py-2 px-4 rounded-lg text-sm",
  };

  return (
    <a
      href={REVIEW_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 transition-colors ${styles[variant]} ${className}`}
    >
      <span aria-hidden="true">⭐</span>
      <span>Leave us a Google review</span>
    </a>
  );
}

export { REVIEW_URL };
