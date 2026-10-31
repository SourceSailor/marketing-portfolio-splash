import { CldImage } from "./Media.jsx";

// Rest-state tilts, cycled across the strip. Kept as full class strings so Tailwind picks them up.
const tilts = [
  "-rotate-3",
  "rotate-2 translate-y-2.5",
  "-rotate-[1.5deg] translate-y-1.5",
  "rotate-3",
  "-rotate-2 translate-y-2",
];

/**
 * Ported from the main site's app/components/homepage/FeaturedPhotos.jsx:
 * same polaroid frames, tilts, hover lift, and handwritten captions.
 * There's no gallery page here, so a photo opens the lightbox instead of
 * linking to /photography.
 */
export default function PhotoStrip({ photos, onOpen }) {
  const viewable = photos.filter((p) => p.image);

  return (
    <ul aria-label="Photography samples" className="flex snap-x snap-mandatory gap-2 overflow-x-auto px-(--gutter) py-8">
      {photos.map((photo, i) => {
        const caption = photo.caption ?? photo.subject;
        const frameClass = `relative block w-[250px] bg-[#f4f1ea] px-3.5 pt-3.5 text-left shadow-[0_1px_2px_rgb(0_0_0/0.3),0_14px_30px_rgb(3_8_31/0.5)] transition-[rotate,translate,box-shadow] duration-(--duration-base) ease-(--ease-out-expo) hover:z-10 hover:-translate-y-3.5 hover:rotate-0 hover:shadow-[0_2px_4px_rgb(0_0_0/0.3),0_36px_64px_rgb(3_8_31/0.75)] focus-visible:z-10 focus-visible:-translate-y-3.5 focus-visible:rotate-0 ${tilts[i % tilts.length]}`;

        const inner = (
          <>
            <div className="relative aspect-square w-full overflow-hidden">
              <CldImage id={photo.image} alt={photo.alt} sizes="250px" />
            </div>
            <p className="flex h-15 items-center justify-center font-hand text-2xl font-semibold text-[#1b2a6b]">
              {caption}
            </p>
          </>
        );

        return (
          <li key={i} className="shrink-0 snap-start">
            {photo.image ? (
              <button
                type="button"
                data-cursor="view"
                className={frameClass}
                aria-label={`View photo: ${caption}`}
                onClick={() =>
                  onOpen({
                    gallery: viewable,
                    index: viewable.indexOf(photo),
                    caption: "Photography",
                  })
                }
              >
                {inner}
              </button>
            ) : (
              <div className={frameClass}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
