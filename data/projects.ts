import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "raycast",
    title: "Raycast Launcher & AI",
    client: "Raycast",
    category: "Developer Tools",
    tag: "Product Launch",
    description: "Lightning-fast keyboard workflow mechanics brought to life with sleek dark-mode kinetic choreography.",
    longDescription:
      "A high-impact product video communicating Raycast's speed, keyboard navigation shortcuts, and developer workflow ecosystem. Engineered to turn complex hotkey interactions into visually effortless, satisfying motion.",
    videoUrl: "https://res.cloudinary.com/dn95xxkye/video/upload/v1780144140/RAYCAST_sdv1sb.mp4",
    featured: true,
    deliverables: [
      "Product Launch Video (16:9)",
      "Social Micro-cuts (9:16 & 1:1)",
      "UI Interaction Choreography",
      "Dynamic Sound Design"
    ],
    metrics: [
      { label: "Launch Pacing", value: "60 FPS" },
      { label: "Product Focus", value: "Speed & Flow" },
      { label: "Audience", value: "Developers & Power Users" }
    ]
  },
  {
    id: "fintech",
    title: "Money & Wealth Intelligence",
    client: "Fintech Platform",
    category: "Fintech / SaaS",
    tag: "SaaS Explainer",
    description: "Modern financial liquidity visualized through 3D spatial cards, real-time analytics graphs, and monetary flows.",
    longDescription:
      "Transforming complex wealth analytics and automated multi-currency yields into a crisp, intuitive product story. Crafted with dimensional isometric layers, live chart sweeps, and sleek typography.",
    videoUrl: "https://res.cloudinary.com/dn95xxkye/video/upload/v1780141155/MONEY_smru6t.mp4",
    featured: true,
    deliverables: [
      "Feature Announcement Film",
      "Interactive 3D UI Graphics",
      "Conversion Landing Page Motion",
      "Motion Design Guidelines"
    ],
    metrics: [
      { label: "Clarity Score", value: "100%" },
      { label: "Style", value: "Clean 3D + UI" },
      { label: "Market", value: "Next-Gen Fintech" }
    ]
  },
  {
    id: "wise",
    title: "Wise Global Money Movement",
    client: "Wise",
    category: "Global Infrastructure",
    tag: "Brand & Feature",
    description: "Borderless currency transfer and transparent international banking articulated through fluid typography and motion.",
    longDescription:
      "Communicating the simplicity of sending, spending, and holding money anywhere in the world without hidden fees. Built with clear kinetic typography, dynamic interface states, and brand-first visual momentum.",
    videoUrl: "https://res.cloudinary.com/dn95xxkye/video/upload/v1780140817/WISE_qmx9qv.mp4",
    featured: true,
    deliverables: [
      "Global Campaign Video",
      "Localization Motion Cutdowns",
      "Kinetic Typography System",
      "Product Tour Experience"
    ],
    metrics: [
      { label: "Global Reach", value: "Multi-Market" },
      { label: "Format", value: "Cross-Platform" },
      { label: "Goal", value: "Trust & Transparency" }
    ]
  },
  {
    id: "classy",
    title: "Classy Endeavours",
    client: "Classy Endeavours",
    category: "Editorial & Brand",
    tag: "Brand Motion",
    description: "Sophisticated editorial motion design elevating brand heritage with cinematic lighting and rhythmic composition.",
    longDescription:
      "A refined brand motion exploration balancing understated luxury aesthetics with contemporary motion choreography. Focused on high-fidelity texture, light play, and deliberate pacing.",
    videoUrl: "https://res.cloudinary.com/dn95xxkye/video/upload/v1780140834/CLASSY_jefgq6.mp4",
    featured: false,
    deliverables: [
      "Brand Hero Film",
      "Keynote Opening Title Sequence",
      "Editorial Motion Styleframe Kit",
      "Custom Audio Curation"
    ],
    metrics: [
      { label: "Pacing", value: "Cinematic" },
      { label: "Aesthetic", value: "Luxury Editorial" },
      { label: "Impact", value: "High Production Value" }
    ]
  }
];
