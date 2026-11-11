import CountUp from "./CountUp.jsx";
import Icon from "./Icons.jsx";
import { CldImage, Loop } from "./Media.jsx";
import PhotoStrip from "./PhotoStrip.jsx";

/**
 * One discipline: what I do, the proof, and one featured piece.
 * "split" alternates media left/right by position; "strip" puts a photo strip below.
 */
export default function Discipline({ discipline: d, index, onOpen }) {
  const flip = index % 2 === 1;
  const isStrip = d.layout === "strip";

  const text = (
    <div
      className={
        isStrip
          ? "min-w-0 md:col-span-7"
          : `min-w-0 md:row-start-1 md:col-span-5 ${flip ? "md:col-start-8" : "md:col-start-1"}`
      }
    >
      <p className="eyebrow">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface/60 text-accent">
          <Icon name={d.icon} size={15} />
        </span>
        {d.label}
      </p>
      <h2 className="mt-5 font-display text-display-md font-semibold tracking-tight text-balance">
        {d.headline}
      </h2>
      <p className="mt-5 max-w-(--measure) text-lg leading-relaxed text-fg/90">
        {d.body}
      </p>

      <ul
        className="mt-7 flex flex-wrap gap-2"
        aria-label={`${d.label} capabilities`}
      >
        {d.capabilities.map((c) => (
          <li key={c} className="chip">
            {c}
          </li>
        ))}
      </ul>

      {d.stats.length > 0 && (
        <dl className="mt-9 grid gap-x-12 gap-y-7 border-t border-line pt-7 sm:grid-cols-2">
          {d.stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse justify-end">
              <dt className="mt-2 max-w-[26ch] text-sm leading-snug text-muted">
                {s.label}
              </dt>
              <dd>
                <CountUp
                  value={s.value}
                  className="stat-num block text-5xl leading-none text-fg lg:text-6xl"
                />
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );

  return (
    <section
      id={d.id}
      aria-label={d.label}
      className="section-y scroll-mt-(--header-h) border-t border-line/70"
    >
      {isStrip ? (
        <>
          <div
            className="container-page grid gap-10 md:grid-cols-12"
            data-reveal
          >
            {text}
          </div>
          <div className="mt-10 md:mt-12" data-reveal>
            <PhotoStrip photos={d.photos} onOpen={onOpen} />
          </div>
        </>
      ) : (
        <div
          className="container-page grid items-center gap-10 md:grid-cols-12 md:gap-x-6"
          data-reveal
        >
          {text}
          <div
            className={`md:col-span-6 md:row-start-1 ${flip ? "md:col-start-1" : "md:col-start-7"}`}
          >
            <FeatureMedia
              feature={d.feature}
              label={d.label}
              ratio="aspect-[4/3] md:aspect-[5/6]"
              sizes="(min-width: 768px) 50vw, 100vw"
              onOpen={onOpen}
            />
          </div>
        </div>
      )}
    </section>
  );
}

/** Featured media with the G3-style title tab cut into its bottom edge. Opens the lightbox. */
function FeatureMedia({ feature: f, label, ratio, sizes, onOpen }) {
  const isLoop = "loop" in f;
  const canOpen = !isLoop && (f.vimeoId || f.image);
  const hasTab = f.client || f.title;

  const media = isLoop ? (
    <Loop id={f.loop} caption="Animation sample" />
  ) : (
    <CldImage
      id={f.image}
      alt={f.vimeoId ? "" : f.alt}
      sizes={sizes}
      caption={label}
      fit={f.transparent ? "contain" : "cover"}
      className="transition-transform duration-(--duration-slow) ease-(--ease-out-expo) group-hover:scale-[1.03]"
    />
  );

  const inner = (
    <>
      {media}

      {f.vimeoId && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <span className="flex h-18 w-18 items-center justify-center rounded-full bg-white/90 text-black shadow-[0_10px_40px_rgb(0_0_0/0.4)] transition-transform duration-(--duration-base) ease-(--ease-out-expo) group-hover:scale-110">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5.5v13l11-6.5z" />
            </svg>
          </span>
        </span>
      )}

      {canOpen && !f.vimeoId && (
        <span className="pointer-events-none absolute top-4 right-4 rounded-full bg-ink/60 px-3 py-1.5 text-xs font-medium text-white opacity-0 backdrop-blur transition-opacity duration-(--duration-base) group-hover:opacity-100 group-focus-visible:opacity-100">
          View larger
        </span>
      )}

      {hasTab && (
        <span className="absolute bottom-0 left-0 max-w-[85%] rounded-tr-[1.5rem] bg-bg px-5 pt-4 pb-5 text-left transition-[padding] duration-(--duration-slow) ease-(--ease-out-expo) group-hover:pr-8 md:px-6 md:pt-5 md:pb-6 md:group-hover:pr-10">
          {f.client && (
            <span className="block text-sm text-muted">{f.client}</span>
          )}
          {f.title && (
            <span className="mt-1.5 block font-display text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl">
              {f.title}
            </span>
          )}
        </span>
      )}
    </>
  );

  const frame = `frame group block w-full ${ratio} ${f.transparent ? "bg-transparent shadow-none" : ""}`;

  return (
    <figure>
      {canOpen ? (
        <button
          type="button"
          className={frame}
          onClick={() =>
            onOpen({
              image: f.image,
              alt: f.alt,
              vimeoId: f.vimeoId,
              caption: [f.client, f.title].filter(Boolean).join(": ") || label,
            })
          }
        >
          <span className="sr-only">
            {f.vimeoId ? "Play" : "View"} {f.title ?? label}
          </span>
          {inner}
        </button>
      ) : (
        <div className={frame}>{inner}</div>
      )}

      {(f.role || f.link) && (
        <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-sm">
          {f.role && (
            <span className="text-muted">
              <span className="font-semibold text-fg">My role</span>
              <span aria-hidden="true" className="mx-2 text-line">
                /
              </span>
              {f.role}
            </span>
          )}

          {f.link && (
            <a
              href={f.link.href}
              target="_blank"
              rel="noopener"
              className="link-underline"
            >
              {f.link.label} <span aria-hidden="true">↗</span>
            </a>
          )}
        </figcaption>
      )}
    </figure>
  );
}
