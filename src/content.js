/**
 * Every word and media reference on the page lives here.
 *
 * Media:
 *   image:     Cloudinary public ID (same format as the main site's cldUrl calls)
 *   youtubeId: the ID from youtube.com/watch?v=THIS_PART
 *   loop:      Cloudinary *video* public ID for a muted autoplay loop
 * Anything left null renders a labeled placeholder, so the page never breaks.
 *
 * Lines marked CONFIRM are self-reported or need your sign-off before you send the link.
 */

export const person = {
  name: "Kyle Pickard",
  role: "Full-stack marketer",
  location: "San Francisco Bay Area",
  email: "kylepickard95@gmail.com",
  linkedin: null, // CONFIRM: paste your LinkedIn URL. Hidden while null.
  resume: null, // Path or URL to a PDF. Hidden while null.
  availability: "Open to full-time roles in the SF Bay Area: on-site, hybrid, or remote.",
  portrait: "portfolio/Bio_Image.jpg",
};

/** Same copy and slides as the main site's HomeHero / HeroSlideshow. */
export const hero = {
  title: "Idea to launch.",
  subtitle: "Without changing hands.",
  // The <br> from the main site's hero is kept: it breaks after "and" on desktop only.
  descriptionLines: ["I bring strategy, creative, development, and", "analytics together to turn ideas into results."],
  // Slideshow frames, in order. Cloudinary public IDs (same as HeroSlideshow imgConfig).
  slides: ["portfolio/hero/IMG_0023_copy", "portfolio/Interview_thumb.jpg"],
};

/**
 * "One person. The whole pipeline." cards. Same four cards, images, and icons
 * as the main site's app/data/disciplines.js. target is the section each card jumps to.
 */
export const pipeline = {
  title: ["One person.", "The whole pipeline."],
  description: "Six disciplines I own day to day. Pick one, or scroll through all of them.",
  cards: [
    { id: "video", label: "Videography", image: "portfolio/3xAfdjyQ.jpg", icon: "video", target: "video" },
    { id: "photo", label: "Photography", image: "portfolio/IMG_0023_copy.jpg", icon: "photography", target: "photography" },
    { id: "campaigns", label: "Campaigns", image: "portfolio/Fire_Campaign.jpg", icon: "campaigns", target: "paid-media" },
    {
      id: "web",
      label: "Web",
      image: "portfolio/360_F_265613983_5OnCh9KwG11tSmrNmuddFM3H7CS9qJJl.jpg",
      icon: "web",
      target: "web",
    },
  ],
};

/**
 * One section per discipline, in display order.
 * layout: "split" (text beside media, sides alternate automatically) or "bleed" (full-width media).
 */
export const disciplines = [
  {
    id: "paid-media",
    label: "Paid media",
    icon: "campaigns",
    headline: "Ad spend that shows its work.",
    body: "I plan and run paid campaigns across Meta, connected TV, programmatic display, email, and print partners. I set the targeting, build the creative and landing pages, pace the budget, and close with a report that says plainly what each channel delivered.",
    capabilities: ["Meta Ads", "CTV & programmatic", "Media partnerships", "Landing pages", "Email", "Reporting"],
    stats: [
      { value: "660K+", label: "Paid impressions in a five-week flight" },
      { value: "5×", label: "Event site traffic, April to June" },
      { value: "97.7%", label: "Of connected-TV viewers watched the full spot" },
      { value: "$0.33", label: "Per landing-page view on Meta" },
    ],
    layout: "split",
    feature: {
      client: "Novato Chamber of Commerce",
      title: "Art, Wine & Music Festival",
      role: "Strategy, Meta Ads, creative, landing pages, reporting", // CONFIRM
      image: "portfolio/3xAfdjyQ.jpg",
      alt: "Crowd at the Novato Art, Wine & Music Festival",
      youtubeId: null,
      link: null, // e.g. { href: "https://...", label: "See the festival site" }
    },
  },
  {
    id: "video",
    label: "Video",
    icon: "video",
    headline: "Films made for the moment that counts.",
    body: "I direct, shoot, and edit, from fundraising films to 15-second social cuts. Every year I film at Camp Okizu and cut the piece that plays right before the gala's paddle raise, when the room decides how much to give.",
    capabilities: ["Directing", "Cinematography", "Editing & color", "Drone", "Event recaps", "Short-form social"],
    stats: [
      // CONFIRM: self-reported, and that you're cleared to publish it.
      { value: "$8M+", label: "Raised across seven years of galas my films helped open" },
    ],
    layout: "split",
    feature: {
      client: "Hennessy Funds × Camp Okizu",
      title: "Gala fundraising film",
      role: "Shoot, edit, gala photography, recap",
      image: "DSC07297.jpg",
      alt: "Still from the Camp Okizu gala film",
      youtubeId: null, // CONFIRM: add the film's YouTube ID and the card becomes a play button.
      link: null,
    },
  },
  {
    id: "social",
    label: "Social media",
    icon: "social",
    headline: "Channels that never go quiet.",
    body: "I run social day to day: the content calendar, the shoots and edits, the captions, the scheduling, and the monthly report. For the Novato Chamber of Commerce, that means year-round coverage of member events, award campaigns like Business of the Year, and the build-up to its biggest festival. At Edgewood, I coach youth leaders to make their own short-form video.",
    capabilities: ["Content calendars", "Short-form video", "Captions & copy", "Community management", "Hootsuite", "Analytics & reporting"],
    // CONFIRM: add 1–2 numbers if you have them (follower growth, engagement rate, reach).
    stats: [],
    layout: "split",
    feature: {
      client: "Novato Chamber of Commerce",
      title: "Year-round social channels",
      role: "Strategy, content, captions, scheduling, reporting", // CONFIRM
      image: null, // CONFIRM: Cloudinary ID for a social grid, post, or phone mockup.
      alt: "Novato Chamber of Commerce social media posts",
      youtubeId: null,
      link: null,
    },
  },
  {
    id: "integrated",
    label: "Integrated campaigns",
    icon: "integrated",
    headline: "One message, everywhere people look.",
    body: "Wildfire prevention only works if residents act before fire season. For Novato Fire, I carried one ask across educational videos, social, mailers, street banners, bus shelters, email, and the website I built, so people met it wherever they were.",
    capabilities: ["Campaign strategy", "Educational video", "Organic social", "Print & out-of-home", "Email", "Web"],
    stats: [{ value: "6", label: "Channels carrying one campaign" }],
    layout: "split",
    feature: {
      client: "Novato Fire",
      title: "Wildfire prevention campaign",
      role: "Strategy, video, social, email, website build", // CONFIRM
      image: "portfolio/Fire_Campaign.jpg",
      alt: "Novato Fire wildfire prevention campaign",
      youtubeId: null,
      link: null,
    },
  },
  {
    id: "web",
    label: "Web",
    icon: "web",
    headline: "Websites that carry the brand and the traffic.",
    body: "I design and build sites in WordPress, Webflow, and React, and handle SEO migrations so a relaunch keeps the rankings the old site earned. For Edgewood, our team rebuilt the brand first, with a new logo, tagline, and guide, then built a site to carry it.",
    capabilities: ["UI/UX design", "WordPress", "Webflow", "React", "SEO migration", "Analytics"],
    stats: [
      // CONFIRM: self-reported, and that you're cleared to publish it.
      { value: "$900K", label: "In donations the new brand and site have helped bring in" },
    ],
    layout: "split",
    feature: {
      client: "Edgewood",
      title: "Brand and website rebuild",
      role: "Site build, photo and video, SEO migration",
      image: "edgewood-mockup-full-site.png",
      alt: "The new Edgewood website on laptop and phone",
      youtubeId: null,
      link: null, // e.g. { href: "https://...", label: "Visit the live site" }
    },
  },
  {
    id: "photography",
    label: "Photography",
    icon: "photo",
    headline: "The images the rest of the campaign runs on.",
    body: "Events, food, portraits, campuses, and aerials, shot on Sony A7R IV and A7S III and finished in Lightroom. I shoot with every end use in mind, so one session covers the ad, the post, the site, and the print piece.",
    capabilities: ["Events", "Food", "Portraits", "Architecture & campus", "Aerial", "Retouching"],
    stats: [],
    layout: "strip",
    // Polaroid strip, same component as the main site's FeaturedPhotos.
    // Order here is display order (same subjects as the main site's homeStripIds).
    // image: Cloudinary public ID. caption: the handwritten line under the photo
    // (falls back to subject). Each photo with an image opens in the lightbox.
    photos: [
      { image: "portfolio/IMG_0023_copy.jpg", alt: "[Describe the photo]", subject: "Event", caption: null }, // CONFIRM subject + alt
      { image: null, alt: "", subject: "Food", caption: null },
      { image: null, alt: "", subject: "Event", caption: null },
      { image: null, alt: "", subject: "Food", caption: null },
      { image: null, alt: "", subject: "Aerial", caption: null },
      { image: null, alt: "", subject: "Food", caption: null },
      { image: null, alt: "", subject: "Portrait", caption: null },
      { image: null, alt: "", subject: "Food", caption: null },
    ],
  },
];

/**
 * Who the work has been for: one slow-drifting row of compact cards.
 * Each sector lists the kinds of organizations within it. Informational only.
 * // CONFIRM the organization types under each sector.
 */
export const clientTypes = {
  headline: "Who I've done it for",
  intro: "Mostly lean, mission-driven teams that needed one person to cover a lot of ground.",
  sectors: [
    {
      name: "Nonprofits & fundraising",
      market: "B2C",
      organizations: ["Children's charities", "Advocacy groups", "Community organizations"],
    },
    {
      name: "Public agencies",
      market: "Public sector",
      organizations: ["Fire districts", "Civic programs"],
    },
    {
      name: "Chambers & local business",
      market: "B2B",
      organizations: ["Chambers of commerce", "Small businesses", "Community festivals"],
    },
    {
      name: "Education",
      market: "B2C",
      organizations: ["Private schools", "College-access programs"],
    },
    {
      name: "Financial & professional services",
      market: "B2B",
      organizations: ["Wealth management", "Investment funds", "Law firms"],
    },
    {
      name: "Health & community services",
      market: "B2C",
      organizations: ["Health care", "Senior services", "Family services"],
    },
    {
      name: "Consumer brands",
      market: "B2C",
      organizations: ["Food", "Lighting", "Retail"],
    },
  ],
};

export const about = {
  headline: "I don't hand the work off. I see it through.",
  body: [
    "For seven years I've worked at a small agency where nobody owns just one piece. I plan campaigns, shoot and edit the content, run the paid social, help build the sites, and report on what actually worked.",
    "It taught me to care about the result, not just my part of it. On a team, that means fewer handoffs, faster turnarounds, and one person who knows how every piece connects.",
  ],
  tools: [
    { group: "Video & motion", items: "Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, CapCut" },
    { group: "Photo & design", items: "Lightroom, Photoshop, Illustrator, Figma" },
    { group: "Web", items: "WordPress, Webflow, React, Tailwind CSS" },
    { group: "Cameras", items: "Sony A7R IV, A7S III, plus Fujifilm, Canon, Blackmagic" },
    {
      group: "On every project",
      items: "Copywriting, organic social, email marketing, analytics and reporting, project management",
    },
  ],
};

export const contact = {
  headline: "Let's talk.",
  body: "If your team needs someone who can take an idea from the brief to the results report, I'd like to hear about it.",
};
