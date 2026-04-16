import Image from "next/image";

interface ProcedureImageGalleryProps {
  eyebrow?: string;
  title: string;
  description?: string;
  images: string[];
  captionPrefix?: string;
}

export function ProcedureImageGallery({
  eyebrow,
  title,
  description,
  images,
  captionPrefix = "Imagem",
}: ProcedureImageGalleryProps) {
  return (
    <section className="bg-[#f3e3d2] px-6 py-20 md:px-12 md:py-24 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs uppercase tracking-[0.28em] text-[#b96f2b]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-4 font-display text-section text-[#17110e]">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5b4c42] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {images.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="overflow-hidden rounded-md border border-black/15 bg-[#f7ead8]"
            >
              <div className="relative aspect-[4/5] bg-[#ead0b5]">
                <Image
                  src={src}
                  alt={`${captionPrefix} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 33vw"
                />
              </div>
              <div className="border-t border-black/10 px-5 py-4">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#8b6c57]">
                  {captionPrefix} {index + 1}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
