import { CldImage } from "./Media.jsx";

const Introduction = () => {
  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="section-y border-y border-line/70"
    >
      <div
        className="container-page grid items-center gap-12 md:grid-cols-12 md:gap-x-6"
        data-reveal
      >
        {/* Photo */}
        <div className="relative mx-auto w-full max-w-sm md:col-span-5 md:max-w-none">
          <div className="frame aspect-[4/5]">
            <CldImage
              id="portfolio/Candid_Gear_on_Sunlit_Grass.png"
              alt="Camera gear on sunlit grass"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-4 -bottom-4 -z-10 h-full w-full rounded-[1.25rem] border border-line"
          />
        </div>

        {/* Copy */}
        <div className="md:col-span-6 md:col-start-7">
          <p className="eyebrow">Welcome</p>

          <h2
            id="intro-heading"
            className="mt-4 font-display text-display-lg font-semibold tracking-tight text-balance"
          >
            A Window Into my Work
          </h2>

          <p className="mt-6 max-w-(--measure) text-lg leading-relaxed text-fg/90">
            Hi, I'm Kyle! I'm a Bay Area marketer, creator, and developer with a
            passion for turning ideas into meaningful work. Some days you'll
            find me behind a camera; others, I'm developing websites, building
            campaigns, or digging into performance data. Here's a little look at
            what I do, what I've made, and how I approach my work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
