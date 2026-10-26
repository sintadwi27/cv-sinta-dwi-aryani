export type ActiveTab = 'home' | 'tentang' | 'keahlian' | 'proyek' | 'sertifikasi';

export type Language = 'id' | 'en';

export interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'si' | 'uiux' | 'mobile';
  categoryLabel: string;
  description: string;
  fullCaseStudy: string;
  imageUrl: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  skills: { name: string; level: number; note: string }[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}
