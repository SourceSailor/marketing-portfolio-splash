export const person = {
  name: "Kyle Pickard",
  role: "Full-stack marketer",
  location: "San Francisco Bay Area",
  email: "kylepickard95@gmail.com",
  linkedin: null, // CONFIRM: paste your LinkedIn URL. Hidden while null.
  resume: null, // Path or URL to a PDF. Hidden while null.
  availability:
    "Open to full-time roles in the SF Bay Area: on-site, hybrid, or remote.",
  portrait: "portfolio/Bio_Image.jpg",
};

export const hero = {
  title: "Idea to launch.",
  subtitle: "Without changing hands.",
  descriptionLines: [
    "I bring strategy, creative, development, and",
    "analytics together to turn ideas into results.",
  ],

  slides: [
    {
      id: "portfolio/hero/Pork_Short_Rib_at_Fireplace_flipped.jpg",
      position: "bottom",
    },
    {
      id: "portfolio/hero/Guitarist_in_Green_Stage_Lights.png",
      position: "middle",
    },
    {
      id: "portfolio/hero/Ferrari_488_text_space.jpg",
      position: "middle",
    },
    {
      id: "portfolio/hero/PEJU_Merlot_in_Bronze_Eagle_Holder.png",
      position: "middle",
    },
    {
      id: "portfolio/hero/Wildland_Firefighter_Through_Smoky_Grass.png",
      position: "middle",
    },
    {
      id: "portfolio/hero/Classroom_Library_Interview_Portrait.png",
      position: "top",
    },
  ],
};

export const pipeline = {
  title: ["One person.", "The whole pipeline."],
  description:
    "From concept to the final execution, here's a look at what I do.",
  cards: [
    {
      id: "video",
      label: "Videography",
      image: "portfolio/Interview_BTS.jpg",
      icon: "video",
      target: "video",
    },
    {
      id: "photo",
      label: "Photography",
      image: "portfolio/french-toast-plate.jpg",
      icon: "photography",
      target: "photography",
    },
    {
      id: "campaigns",
      label: "Campaigns",
      image: "portfolio/Fire_Campaign.jpg",
      icon: "campaigns",
      target: "paid-media",
    },
    {
      id: "web",
      label: "Web Dev",
      image: "portfolio/Web_dev_hero.jpg",
      icon: "web",
      target: "web",
    },
  ],
};

export const disciplines = [
  {
    id: "paid-media",
    label: "Paid media",
    icon: "campaigns",
    headline: "Turning Ad Spend Into Results.",
    body: "Effective paid media goes beyond impressions and clicks. By combining media strategy, creative production, and data-driven decision-making, I take full ownership of campaigns from planning through execution and reporting, driving measurable results and business growth.",
    capabilities: [
      "Media Strategy",
      "Creative Strategy",
      "Landing pages",
      "Content Creation",
      "Email Marketing",
      "Performance Analytics",
    ],
    stats: [
      { value: "660K+", label: "Paid impressions in a five-week flight" },
      { value: "5×", label: "Event site traffic, April to June" },
      {
        value: "97.7%",
        label: "Of connected-TV viewers watched the full spot",
      },
      { value: "$0.33", label: "Per landing-page view on Meta" },
    ],
    layout: "split",
    feature: {
      client: "Novato Chamber of Commerce",
      title: "Art, Wine & Music Festival",
      role: "Media planning & buying, Meta Ads, audience targeting, landing pages, email, ad creative, performance reporting, event photography/videography",
      image: "portfolio/3xAfdjyQ.jpg",
      alt: "Crowd at the Novato Art, Wine & Music Festival",
      vimeoId: null,
      link: null,
    },
  },
  {
    id: "video",
    label: "Video",
    icon: "video",
    headline: "Turning Frames Into Stories.",
    body: "Some stories are meant to be shared in seconds. Others deserve a little more time. Through a mix of creative direction, production, and post-production, I create content that informs, inspires, and connects with audiences. My work includes brand videos, promotional campaigns, commercial content, social media videos, customer testimonials, event recaps, and storytelling films.",
    capabilities: [
      "Directing",
      "Video production",
      "Editing & color",
      "Drone",
      "Event recaps",
      "Short-form social",
    ],
    stats: [
      {
        value: "$8M+",
        label: "Raised across seven years of galas my films helped open",
      },
      {
        value: "200+",
        label: "Total videos delivered since 2017",
      },
      {
        value: "30+",
        label: "Organizations filmed for.",
      },
    ],
    layout: "split",
    feature: {
      client: "Hennessy Funds × Camp Okizu",
      title: "Gala fundraising film",
      role: "Video production, cinematography, editing, gala photography/videography, gala recap video",
      image: "DSC07297.jpg",
      alt: "Still from the Camp Okizu gala film",
      vimeoId: "1056945639",
      link: {
        href: "https://vimeo.com/showcase/11580315",
        label: "View Video Showcase",
      },
    },
  },
  {
    id: "social",
    label: "Social media",
    icon: "social",
    headline: "Growing Brands, One Post at a Time.",
    body: "Every platform has its own audience, and every organization has a different story to tell. I bring those stories to life through content strategy, creative production, and day-to-day channel management. The result is a thoughtful, consistent social presence that builds brand recognition, strengthens connections, and gives audiences a reason to stay engaged.",
    capabilities: [
      "Campaign Development",
      "Social Media Advertising",
      "Brand Storytelling",
      "Creative Direction",
      "Content Creation",
      "Cross-Platform Content Strategy",
    ],
    stats: [
      { value: "10+", label: "Clients whose social I've run or supported" },
      {
        value: "+128%",
        label: "Increase in Annual Follower Acquisition Over 3 Years",
      },
      {
        value: "7×",
        label: "Growth in Website Traffic from Social Media",
      },
    ],
    layout: "split",
    feature: {
      client: "Hilltop 1892",
      title: "Social Media Management",
      role: "Content strategy, food photography, short-form video, website imagery, Tripadvisor & Yelp profiles, social support",
      image: "portfolio/hero/IMG_0800_copy.jpg",
      alt: "Hilltop 1892 social media posts",
      vimeoId: null,
      link: null,
    },
  },
  {
    id: "integrated",
    label: "Integrated campaigns",
    icon: "integrated",
    headline: "One message, everywhere people look.",
    body: "Wildfire prevention only works if residents act before fire season. For Novato Fire, I carried one ask across educational videos, social, mailers, street banners, bus shelters, email, and the website I built, so people met it wherever they were.",
    capabilities: [
      "Campaign strategy",
      "Educational video",
      "Organic social",
      "Print & out-of-home",
      "Email",
      "Web",
    ],
    stats: [{ value: "6", label: "Channels carrying one campaign" }],
    layout: "split",
    feature: {
      client: "Novato Fire",
      title: "Wildfire prevention campaign",
      role: "Strategy, video, social, email, website build", // CONFIRM
      image: "portfolio/Fire_Campaign.jpg",
      alt: "Novato Fire wildfire prevention campaign",
      vimeoId: null,
      link: null,
    },
  },
  {
    id: "web",
    label: "Web",
    icon: "web",
    headline: "Websites that carry the brand and the traffic.",
    body: "I design and build sites in WordPress, Webflow, and React, and handle SEO migrations so a relaunch keeps the rankings the old site earned. For Edgewood, our team rebuilt the brand first, with a new logo, tagline, and guide, then built a site to carry it.",
    capabilities: [
      "UI/UX design",
      "WordPress",
      "Webflow",
      "React",
      "SEO migration",
      "Analytics",
    ],
    stats: [
      {
        value: "$900K",
        label: "In donations the new brand and site have helped bring in",
      },
    ],
    layout: "split",
    feature: {
      client: "Edgewood",
      title: "Brand and website rebuild",
      role: "Site build, photo and video, SEO migration",
      image: "portfolio/edgewood-mockup-transparent-2000.png",
      alt: "The new Edgewood website on laptop and phone",
      vimeoId: null,
      link: null,
    },
  },
  {
    id: "photography",
    label: "Photography",
    icon: "photo",
    headline: "The images the rest of the campaign runs on.",
    body: "Events, food, portraits, campuses, and aerials, shot on Sony A7R IV and A7S III and finished in Lightroom. I shoot with every end use in mind, so one session covers the ad, the post, the site, and the print piece.",
    capabilities: [
      "Events",
      "Food",
      "Portraits",
      "Architecture & campus",
      "Aerial",
      "Retouching",
    ],
    stats: [],
    layout: "strip",
    // Polaroid strip, same component as the main site's FeaturedPhotos.
    // Order here is display order (same subjects as the main site's homeStripIds).
    // image: Cloudinary public ID. caption: the handwritten line under the photo
    // (falls back to subject). Each photo with an image opens in the lightbox.
    photos: [
      {
        image: "portfolio/IMG_0023_copy.jpg",
        alt: "[Describe the photo]",
        subject: "Product",
        caption: null,
      }, // CONFIRM subject + alt
      {
        image: "portfolio/hero/Cappucino.jpg",
        alt: "",
        subject: "Food",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/DSC05992.jpg",
        alt: "",
        subject: "Editorial",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/IMG_5928_copy_2.jpg",
        alt: "",
        subject: "Social Media",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/IMG_6566_copy.jpg",
        alt: "",
        subject: "Automotive",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/IMG_6263_copy_2.jpg",
        alt: "",
        subject: "Event",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/4-downstairslivingroom_copy.jpg",
        alt: "",
        subject: "Architecture",
        caption: null,
      },
      {
        image: "portfolio/photo-gallery/3-downstairsspa_copy.jpg",
        alt: "",
        subject: "Interior",
        caption: null,
      },
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
  intro:
    "Mostly lean, mission-driven teams that needed one person to cover a lot of ground.",
  sectors: [
    {
      name: "Nonprofits & fundraising",
      market: "B2C",
      organizations: [
        "Children's charities",
        "Advocacy groups",
        "Community organizations",
      ],
    },
    {
      name: "Public agencies",
      market: "Public sector",
      organizations: ["Fire districts", "Civic programs"],
    },
    {
      name: "Chambers & local business",
      market: "B2B",
      organizations: [
        "Chambers of commerce",
        "Small businesses",
        "Community festivals",
      ],
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
    {
      group: "Video & motion",
      items:
        "Premiere Pro, DaVinci Resolve, Final Cut Pro, After Effects, CapCut",
    },
    {
      group: "Photo & design",
      items: "Lightroom, Photoshop, Illustrator, Figma",
    },
    { group: "Web", items: "WordPress, Webflow, React, Tailwind CSS" },
    {
      group: "Cameras",
      items: "Sony A7R IV, A7S III, plus Fujifilm, Canon, Blackmagic",
    },
    {
      group: "On every project",
      items:
        "Copywriting, organic social, email marketing, analytics and reporting, project management",
    },
  ],
};

export const contact = {
  headline: "Let's talk.",
  body: "If your team needs someone who can take an idea from the brief to the results report, I'd like to hear about it.",
};
