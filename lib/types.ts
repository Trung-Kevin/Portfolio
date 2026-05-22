export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  sourceLink: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Experience {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}
