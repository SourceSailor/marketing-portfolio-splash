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
    // "I bring strategy, creative, development, and",
    // "analytics together to turn ideas into results.",
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
    headline: "One message, Everywhere People Look.",
    body: "An effective marketing pipeline connects strategy to execution. From audience segmentation and campaign planning to creative production, email marketing, paid media, and retargeting, every channel works toward a shared objective. Through performance analytics and KPI tracking, I build cohesive campaigns that drive awareness, engagement, and measurable results.",
    capabilities: [
      "Campaign strategy",
      "Organic social",
      "KPI Tracking",
      "Paid Media",
      "Print Advertising",
      "Video Production",
      "Email Marketing",
      "Web Development",
    ],
    stats: [
      { value: "15+", label: "Campaigns launched" },
      { value: "6", label: "Channels per campaign, on average" },
      { value: "200K+", label: "Emails sent" },
    ],
    layout: "split",
    feature: {
      client: "Novato Fire",
      title: "Wildfire prevention campaign",
      role: "Marketing Strategy & Planning, Content Creation, Email Marketing, Website Design & Development",
      image: "portfolio/Fire_Campaign.jpg",
      alt: "Novato Fire wildfire prevention campaign",
      vimeoId: "584062906",
      link: null,
    },
  },
  {
    id: "web",
    label: "Web Development",
    icon: "web",
    headline: "From Concept to Code.",
    body: "From marketing websites and interactive experiences to custom applications, dashboards, and software, I turn ideas into functional digital solutions. With experience in front-end development, UI/UX, and modern web technologies, I build solutions from the ground up to tell stories, visualize data, streamline workflows, and solve problems.",
    capabilities: [
      "UI/UX design",
      "CMS Platforms",
      "React",
      "SEO",
      "Analytics",
      "Workflow Automation",
      "E-commerce Platforms",
      "API Integrations",
    ],
    stats: [
      {
        value: "20+",
        label: "Websites built",
      },
      {
        value: "10+",
        label: "Applications & tools developed",
      },
      {
        value: "50+",
        label: "Integrations implemented",
      },
    ],
    layout: "split",
    feature: {
      client: "Edgewood",
      title: "Brand and website rebuild",
      role: "Website Design & Development, Brand Photography & Videography, SEO Migration & Optimization",
      image: "portfolio/edgewood-mockup-transparent-2000.png",
      transparent: true,
      alt: "The new Edgewood website on laptop and phone",
      vimeoId: "",
      link: {
        href: "https://edgewood.org/",
        label: "View Website",
      },
    },
  },
  {
    id: "photography",
    label: "Photography",
    icon: "photo",
    headline: "A Story in Every Frame",
    body: "Every photograph tells a story. I approach each shot with a marketer’s eye, capturing moments and details that communicate a message, express a brand’s identity, and connect with an audience. The result is purposeful imagery that goes beyond the frame and becomes part of a larger visual story.",
    capabilities: [
      "Brand & Lifestyle",
      "Corporate",
      "Portraits",
      "Real Estate",
      "Editorial",
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

export const clientTypes = {
  headline: "The Organizations Behind the Projects",
  intro:
    "A great storyteller knows how to see the world through someone else's eyes. Over the years, I've worked with a diverse range of businesses, organizations, and individuals, developing narratives that reflect who they are, resonate with their audiences, and make an impact.",
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
  headline: "More Than a Lens",
  body: [
    "For the past nine years, I've been driven by a passion for telling stories that connect with people, inspire ideas, and leave a lasting impression. My journey began behind a camera, capturing the still moments of life. Eventually, those moments started moving, and my passion for photography grew into a desire to tell bigger stories, reach new audiences, and build the platforms that bring those stories to life.",

    "Today, I bring photography, video, marketing, and development together to approach projects from multiple perspectives. I love working across disciplines, connecting creativity with technology, and finding new ways to turn ideas into meaningful experiences.",
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
      items: "Sony, Canon, Blackmagic, Fujifilm, Nikon",
    },
    {
      group: "On every project",
      items:
        "Content creation, organic social, web development, copywriting, email marketing, graphic design, analytics and reporting, project management",
    },
  ],
};

export const contact = {
  headline: "Let's talk.",
  body: "If your team needs someone who can take an idea from the brief to the results report, I'd like to hear about it.",
};
