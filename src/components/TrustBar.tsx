const trustItems = [
  { label: "Insured & Bonded" },
  { label: "3 Years Experience" },
  { label: "Photo Updates Every Visit" },
];

export default function TrustBar() {
  return (
    <div className="bg-surface py-4 px-4 border-y border-beige/50">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-forest font-medium"
          >
            <span className="text-sage font-bold">✓</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
