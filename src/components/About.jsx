import { about, person } from "../content.js";
import { CldImage } from "./Media.jsx";

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="section-y border-t border-line/70">
      <div className="container-page grid gap-12 md:grid-cols-12 md:gap-x-6" data-reveal>
        <div className="md:col-span-5">
          <div className="frame aspect-[4/5]">
            <CldImage
              id={person.portrait}
              alt={`Portrait of ${person.name}`}
              sizes="(min-width: 768px) 40vw, 100vw"
              caption="Portrait"
            />
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7 md:self-center">
          <p className="eyebrow">About</p>
          <h2 id="about-heading" className="mt-4 font-display text-display-md font-semibold tracking-tight text-balance">
            {about.headline}
          </h2>
          {about.body.map((p) => (
            <p key={p} className="mt-6 max-w-(--measure) text-lg leading-relaxed text-fg/90">
              {p}
            </p>
          ))}

          <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2">
            {about.tools.map((t) => (
              <div key={t.group} className="sm:[&:last-child:nth-child(odd)]:col-span-2">
                <dt className="text-sm text-muted">{t.group}</dt>
                <dd className="mt-1 leading-relaxed">{t.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
