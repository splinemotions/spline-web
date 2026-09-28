export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  tag: string;
  description: string;
  longDescription: string;
  videoUrl: string;
  featured?: boolean;
  deliverables: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  points: string[];
  iconName: string;
}

export interface Founder {
  name: string;
  role: string;
  title: string;
  bio: string;
  specialty: string[];
  socials?: {
    twitter?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}
