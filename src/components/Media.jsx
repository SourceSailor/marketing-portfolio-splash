import { useState } from "react";
import { cldSrcSet, cldUrl, cldVideoUrl } from "../lib/cloudinary.js";

/** Small deterministic hash so each empty slot gets its own light pattern. */
function seed(str = "") {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
}

/**
 * Shown when media isn't set yet or fails to load. On-brand gradient art,
 * not a wireframe box, so the page still reads as finished.
 * caption: optional small label (used only for slots that still need content).
 */
export function Placeholder({ seedKey = "", caption, className = "" }) {
  const s = seed(seedKey);
  const style = {
    "--ga-x": `${15 + (s % 40)}%`,
    "--ga-y": `${15 + ((s >> 3) % 40)}%`,
    "--ga-x2": `${55 + ((s >> 6) % 35)}%`,
    "--ga-y2": `${50 + ((s >> 9) % 40)}%`,
  };

  return (
    <div
      aria-hidden="true"
      className={`gradient-art relative h-full w-full ${className}`}
      style={style}
    >
      {caption && (
        <span className="absolute top-3 right-3 rounded-full bg-ink/40 px-2.5 py-1 text-[11px] font-medium tracking-wide text-fg/70 backdrop-blur">
          {caption}
        </span>
      )}
    </div>
  );
}

/** Responsive Cloudinary image that fills its (sized) parent. */
export function CldImage({
  id,
  alt = "",
  sizes = "100vw",
  priority = false,
  caption,
  className = "",
  style,
}) {
  const [failed, setFailed] = useState(false);
  if (!id || failed)
    return (
      <Placeholder
        seedKey={id ?? caption}
        caption={id ? null : caption}
        className={className}
      />
    );

  return (
    <img
      src={cldUrl(id, 1600)}
      srcSet={cldSrcSet(id)}
      sizes={sizes}
      style={style}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

/** Muted autoplay loop for motion work. Reduced-motion visitors get controls instead of autoplay. */
export function Loop({ id, caption }) {
  if (!id) return <Placeholder seedKey="motion-loop" caption={caption} />;

  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <video
      className="h-full w-full object-cover"
      src={cldVideoUrl(id)}
      muted
      loop
      playsInline
      autoPlay={!reduce}
      controls={reduce}
      preload="metadata"
    />
  );
}
