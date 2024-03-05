export interface Project {
  title: string;
  startDate: string;
  endDate: string;
  roles: string[];
  skills: string[];
  link?: string;
  content: string;
  thumbnail?: string;
}

export type ClickProjectType = 'delete' | 'edit';
