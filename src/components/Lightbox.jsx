import { useEffect, useRef, useState } from "react";
import { cldUrl } from "../lib/cloudinary.js";

/**
 * Native <dialog>: focus trap, Esc, and focus return come from the browser.
 * item is null when closed, or one of:
 *   { image, alt, youtubeId, caption }          a single piece
 *   { gallery: [{ image, alt }], index, caption } a set, with arrows, arrow keys, and swipe
 */
export default function Lightbox({ item, onClose }) {
  const ref = useRef(null);
  const touchX = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (item && !dialog.open) dialog.showModal();
    if (!item && dialog.open) dialog.close();
    if (item?.gallery) setIndex(item.index ?? 0);
  }, [item]);

  const gallery = item?.gallery;
  const total = gallery?.length ?? 0;
  const current = gallery ? gallery[index] : item;
  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  function handleKeyDown(e) {
    if (!gallery) return;
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  }

  function handleTouchEnd(e) {
    if (!gallery || touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx > 0 ? prev : next)();
    touchX.current = null;
  }

  const closeOnBackdrop = (e) => e.target === e.currentTarget && onClose();
  const button =
    "inline-flex h-10 items-center rounded-full border border-line px-4 text-sm text-fg transition-colors duration-(--duration-fast) hover:bg-surface";

  return (
    <dialog
      ref={ref}
      className="lightbox"
      aria-label={item?.caption ?? "Media viewer"}
      onClose={onClose}
      onClick={closeOnBackdrop}
      onKeyDown={handleKeyDown}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      {item && current && (
        <div className="flex h-full flex-col" onClick={closeOnBackdrop}>
          <div className="container-page flex h-(--header-h) shrink-0 items-center justify-between">
            <p className="text-sm text-muted" aria-live="polite">
              {gallery ? `${index + 1} / ${total}` : item.caption}
            </p>
            <button type="button" onClick={onClose} className={button}>
              Close
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-(--gutter)" onClick={closeOnBackdrop}>
            {current.youtubeId ? (
              <div className="aspect-video w-full max-w-6xl bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube-nocookie.com/embed/${current.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={item.caption}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <img
                key={current.image}
                src={cldUrl(current.image, 2400)}
                alt={current.alt}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}
          </div>

          <div className="container-page flex h-(--header-h) shrink-0 items-center justify-between">
            {gallery && total > 1 ? (
              <>
                <button type="button" onClick={prev} className={button}>
                  Previous
                </button>
                <button type="button" onClick={next} className={button}>
                  Next
                </button>
              </>
            ) : null}
          </div>
        </div>
      )}
    </dialog>
  );
}
