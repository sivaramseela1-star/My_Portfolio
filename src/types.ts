export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  focus: string;
  highlights?: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  tag: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'railway' | 'rf' | 'ai-simulation';
  typeLabel: 'Concept / Architecture Study' | 'Production Architecture' | 'Simulation Study';
  problem: string;
  approach: string;
  technologies: string[];
  outcome: string;
  metrics?: { label: string; value: string }[];
}

export interface CareerMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  phase: string;
}

export interface AiUseCase {
  id: string;
  title: string;
  description: string;
  category: string;
  impact: string;
}

export interface SkillCategory {
  title: string;
  subtitle?: string;
  skills: {
    name: string;
    isEmerging?: boolean;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CertificationItem {
  title: string;
  category: string;
}
