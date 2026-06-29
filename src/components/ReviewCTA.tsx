interface ReviewCTAProps {
  variant?: "primary" | "secondary" | "header";
  className?: string;
}

const REVIEW_URL = "https://g.page/r/Cd3kudi-HkWWEBM/review";

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
