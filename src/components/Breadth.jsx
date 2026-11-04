import { clientTypes } from "../content.js";

function SectorCard({ sector }) {
  return (
    <li className="sector-card">
      <span className="sector-tag">{sector.market}</span>
      <h3 className="mt-2.5 font-display text-lg leading-snug font-semibold tracking-tight md:text-xl">
        {sector.name}
      </h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">
        {sector.organizations.map((org, i) => {
          const last = i === sector.organizations.length - 1;
          return (
            <span key={org}>
              {/* The dot stays glued to its name; the space after it is where lines can wrap. */}
              <span className="whitespace-nowrap">
                {org}
                {!last && (
                  <>
                    <span className="sr-only">,</span>
                    <span aria-hidden="true" className="text-accent">
                      {" "}
                      ·
                    </span>
                  </>
                )}
              </span>
              {!last && " "}
            </span>
          );
        })}
      </p>
    </li>
  );
}

export default function Breadth() {
  return (
    <section
      aria-labelledby="clients-heading"
      className="section-y border-t border-line/70"
    >
      <div
        className="container-page grid gap-5 md:grid-cols-12 md:items-end"
        data-reveal
      >
        <h2
          id="clients-heading"
          className="font-display text-display-lg font-semibold tracking-tight text-balance md:col-span-7"
        >
          {clientTypes.headline}
        </h2>
        <p className="text-lg leading-relaxed text-fg/90 md:col-span-4 md:col-start-9">
          {clientTypes.intro}
        </p>
      </div>

      <div className="marquee mt-8 md:mt-12" data-reveal>
        <div className="marquee-track">
          <ul
            className="marquee-set"
            aria-label="Sectors and the organizations within them"
          >
            {clientTypes.sectors.map((s) => (
              <SectorCard key={s.name} sector={s} />
            ))}
          </ul>
          <ul className="marquee-set marquee-copy" aria-hidden="true" inert>
            {clientTypes.sectors.map((s) => (
              <SectorCard key={s.name} sector={s} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
