import Image from "next/image";

interface PhotoGridProps {
  photos: { src: string; alt: string }[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl overflow-hidden bg-surface"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
