import { StaticImageData } from 'next/image';

export interface HardPointItem {
  cause: string;
  solution: string;
}

export interface ProjectLink {
  link: string;
  hover: string;
}

export interface Project {
  title: string;
  startDate: string;
  endDate?: string;
  roles: string[];
  skills: string[];
  links?: ProjectLink[];
  content: string;
  image?: StaticImageData;
  hardPoints?: HardPointItem[];
  isTeam?: boolean;
  isSolo?: boolean;
}

export type ClickProjectType = 'delete' | 'edit';
