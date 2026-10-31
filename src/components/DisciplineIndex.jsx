import { useState } from "react";

import { pipeline } from "../content.js";
import * as icons from "../assets/index.js";
import { CldImage } from "./Media.jsx";

// content.js names -> the main site's SVG exports (src/assets/index.js).
const iconFiles = {
  video: [icons.video, icons.videoHover],
  photography: [icons.Photography, icons.photographyHover],
  campaigns: [icons.campaigns, icons.campaignsHover],
  web: [icons.web, icons.webHover],
};

/**
 * Ported from the main site's app/components/homepage/Disciplines.jsx:
 * same Card, IconDisplay, classes, and CSS. Changes: each card is a link to
 * its section on this page, and below md the strip becomes a 2×2 grid.
 */
const Card = ({ image, disciplines, icon, iconHover, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="explore-work-card"
    >
      <div className="explore-work-text-banner absolute bottom-0 z-2 transition-opacity">
        <p className="font-bold">{disciplines}</p>

        <IconDisplay icon={icon} iconHover={iconHover} isHovered={isHovered} />
      </div>

      <CldImage id={image} sizes="(min-width: 768px) 40vw, 50vw" className="h-full w-full object-cover" />
    </a>
  );
};

const IconDisplay = ({ icon, iconHover, isHovered }) => {
  const iconStyles =
    "absolute inset-0 object-contain transition-all duration-300 w-full h-full brightness-0 invert";

  return (
    <div className="relative h-7 w-7 shrink-0">
      <img src={icon} className={`${iconStyles} ${!isHovered ? "scale-100 opacity-100" : "opacity-0"}`} alt="" />

      <img className={`${iconStyles} ${isHovered ? "scale-120 opacity-100" : "opacity-0"}`} src={iconHover} alt="" />
    </div>
  );
};

export default function DisciplineIndex() {
  return (
    <section id="what-i-do" aria-labelledby="index-heading" className="section-y" data-reveal>
      <div className="container-page mb-10 grid gap-5 md:grid-cols-12 md:items-end">
        <h2 id="index-heading" className="font-display text-display-lg font-semibold tracking-tight md:col-span-7">
          {pipeline.title[0]}
          <span className="block text-accent">{pipeline.title[1]}</span>
        </h2>
        <p className="text-lg leading-relaxed text-fg/90 md:col-span-4 md:col-start-9">{pipeline.description}</p>
      </div>

      <div className="flex flex-col gap-10">
        <div className="palette group">
          {pipeline.cards.map((item) => {
            const [icon, iconHover] = iconFiles[item.icon];
            return (
              <Card
                key={item.id}
                href={`#${item.target}`}
                disciplines={item.label}
                icon={icon}
                iconHover={iconHover}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
