import { useState } from "react";
import { contact, person } from "../content.js";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-y border-t border-line/70"
    >
      <div className="container-page" data-reveal>
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-line bg-surface/40 px-6 py-14 sm:px-10 md:px-16 md:py-20">
          {/* Same light as the hero, so the page closes the way it opened. */}
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <div className="hero-aurora opacity-50" />
            <div className="hero-grain" />
          </div>

          <div className="grid gap-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <h2
                id="contact-heading"
                className="font-display text-display-xl font-extrabold tracking-tight"
              >
                {contact.headline}
              </h2>
              <p className="mt-6 max-w-(--measure) text-lg leading-relaxed text-fg/90 md:text-xl">
                {contact.body}
              </p>
              {/* <p className="mt-4 flex items-center gap-2.5 text-muted">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/70"
                />
                {person.availability}
              </p> */}
            </div>

            <div className="flex flex-col items-start gap-5 md:col-span-4 md:col-start-9 md:items-end">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${person.email}`}
                  className="btn btn-primary h-14 px-8 text-base"
                >
                  Email me
                </a>
              </div>

              {(person.linkedin || person.resume) && (
                <ul className="flex flex-wrap gap-3">
                  {person.linkedin && (
                    <li>
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="me noopener"
                        className="btn btn-ghost"
                      >
                        LinkedIn <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  )}
                  {person.resume && (
                    <li>
                      <a
                        href={person.resume}
                        download
                        className="btn btn-ghost"
                      >
                        Resume (PDF)
                      </a>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
