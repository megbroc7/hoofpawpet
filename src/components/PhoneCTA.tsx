import Link from "next/link";

interface PhoneCTAProps {
  variant?: "primary" | "secondary" | "header";
  className?: string;
}

const PHONE_NUMBER = "9548071716";
const PHONE_DISPLAY = "(954) 807-1716";

export default function PhoneCTA({
  variant = "primary",
  className = "",
}: PhoneCTAProps) {
  const styles = {
    primary:
      "bg-sage text-white hover:bg-sage-dark font-bold py-3 px-6 rounded-lg",
    secondary:
      "bg-honey text-white hover:bg-honey-light font-bold py-3 px-6 rounded-lg",
    header:
      "bg-sage text-white hover:bg-sage-dark font-semibold py-2 px-4 rounded-lg text-sm",
  };

  return (
    <Link
      href={`tel:${PHONE_NUMBER}`}
      className={`inline-flex items-center gap-2 transition-colors ${styles[variant]} ${className}`}
    >
      <span aria-hidden="true">📞</span>
      <span>Call/Text Sheryl</span>
      <span className="hidden sm:inline">— {PHONE_DISPLAY}</span>
    </Link>
  );
}

export { PHONE_NUMBER, PHONE_DISPLAY };
