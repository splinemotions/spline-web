import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "product-launch",
    title: "Product & Feature Launches",
    tagline: "Build unmissable momentum for Day 1",
    description:
      "High-energy launch videos engineered for Product Hunt, Keynotes, and social virality. We turn feature announcements into major tech moments that command attention.",
    points: [
      "Product Hunt & Keynote hero films",
      "Feature release teaser cutdowns",
      "Multi-format exports (16:9, 9:16, 1:1)",
      "High-velocity turnaround for ship dates"
    ],
    iconName: "Rocket"
  },
  {
    id: "saas-explainer",
    title: "SaaS & Tech Explainers",
    tagline: "Make complex architectures crystal clear",
    description:
      "Turning intricate APIs, developer platforms, AI models, and enterprise software into simple, compelling visual narratives your buyers grasp in 60 seconds.",
    points: [
      "Technical architecture deconstruction",
      "Problem-to-solution narrative arc",
      "Interactive data visualization",
      "Audience-specific messaging for engineers & buyers"
    ],
    iconName: "Layers"
  },
  {
    id: "ui-ux-animation",
    title: "UI/UX & Product Animation",
    tagline: "Fluid interface choreography from Figma to motion",
    description:
      "Elevating interface states, micro-interactions, spatial transitions, and interactive design systems with pixel-perfect precision and realistic motion curves.",
    points: [
      "Figma and design system animation",
      "Micro-interaction & state transitions",
      "In-app empty state & feature walkthroughs",
      "Lottie, WebM & MP4 code-ready assets"
    ],
    iconName: "MonitorPlay"
  },
  {
    id: "product-demo",
    title: "Product Demos & Tours",
    tagline: "Show the real product in its most flattering light",
    description:
      "High-production demo videos that skip the boring screen recordings. We rebuild UI elements in motion to make the actual software experience feel cinematic.",
    points: [
      "Stylized UI recreation & zoom focus",
      "Guided workflow walkthroughs",
      "Frictionless onboarding motion",
      "Customer conversion optimization"
    ],
    iconName: "Sparkles"
  },
  {
    id: "brand-motion",
    title: "Brand Motion & Kinetic Systems",
    tagline: "Give your brand a distinctive motion identity",
    description:
      "Developing kinetic brand language, animated logos, dynamic lower-thirds, and visual identity systems tailored for modern tech companies.",
    points: [
      "Kinetic logo marks & signature stings",
      "Brand motion styleguides & easing rules",
      "Video design system toolkits",
      "Cohesive cross-channel consistency"
    ],
    iconName: "Film"
  },
  {
    id: "social-motion",
    title: "Short-Form Social Content",
    tagline: "Thumb-stopping motion assets for X & LinkedIn",
    description:
      "Bite-sized, high-retention video assets crafted specifically for founder feeds, company social channels, and paid acquisition campaigns.",
    points: [
      "Vertical 9:16 reels and shorts",
      "High-impact 1:1 carousel motion",
      "Sound-off captioning & typography",
      "Iterative creative for A/B testing"
    ],
    iconName: "Share2"
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery & Product Deconstruction",
    subtitle: "Understanding before animating",
    description:
      "We dive deep into your codebase, product walkthroughs, customer persona, and key value propositions to find the single most compelling visual hook.",
    deliverables: ["Product Brief & Positioning", "Core Narrative Hook", "Visual Direction Moodboard"]
  },
  {
    number: "02",
    title: "Scripting & Styleframes",
    subtitle: "Locking the story and aesthetic",
    description:
      "Before touching animation, we draft the exact narrative voiceover script and design high-fidelity styleframes matching your tech aesthetic.",
    deliverables: ["Full Voiceover Script", "Styleframe Deck (Key Art)", "Storyboard Flow"]
  },
  {
    number: "03",
    title: "Bespoke Motion & Sound Design",
    subtitle: "Bringing the vision to life",
    description:
      "We animate every transition with custom bezier curves, 3D elements, typography kinetic physics, and bespoke sound effects that make the video pop.",
    deliverables: ["Animation Draft Previews", "Custom Sound Design & Mix", "Iterative Polish Cycles"]
  },
  {
    number: "04",
    title: "Delivery & Multi-Format Launch",
    subtitle: "Ready for your launch day",
    description:
      "We render pristine 4K masters, web-optimized MP4/WebM files, and cutdowns for Product Hunt, Twitter/X, LinkedIn, and mobile feeds.",
    deliverables: ["4K High-Bitrate Master", "Social Aspect Cuts (16:9, 9:16, 1:1)", "Web Optimized Assets"]
  }
];
