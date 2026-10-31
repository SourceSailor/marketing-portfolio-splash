import { hero, person } from "../content.js";
import HeroSlideshow from "./HeroSlideshow.jsx";

/**
 * Ported from the main site's app/components/homepage/HomeHero.jsx.
 * Same structure, sizes (8xl / 4xl on desktop), and copy. Additions: the
 * Email me button, and smaller type steps on phones so the headline fits.
 */
export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="hero relative flex min-h-[max(80svh,34rem)] items-end overflow-hidden"
    >
      <HeroSlideshow slides={hero.slides} />

      <div className="hero-overlay h-full w-full">
        <div className="container-page relative z-10 pt-[calc(var(--header-h)+3rem)] pb-24 text-white md:pb-28">
          <h1
            id="hero-heading"
            className="max-w-6xl font-display text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
          >
            {hero.title}
          </h1>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl md:mt-3 md:text-4xl">{hero.subtitle}</h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-white/80 md:text-xl">
            {hero.descriptionLines[0]} <br className="hidden md:block" />
            {hero.descriptionLines[1]}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#what-i-do"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition-opacity duration-(--duration-fast) hover:opacity-85"
            >
              See the work
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex h-12 items-center rounded-full border border-white/35 bg-white/10 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors duration-(--duration-fast) hover:bg-white/20"
            >
              Email me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
