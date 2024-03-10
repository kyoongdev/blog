import { StaticImageData } from 'next/image';

export interface HardPointItem {
  cause: string;
  solution: string;
}

export interface Project {
  title: string;
  startDate: string;
  endDate?: string;
  roles: string[];
  skills: string[];
  link?: string;
  content: string;
  image?: StaticImageData;
  hardPoints?: HardPointItem[];
}

export type ClickProjectType = 'delete' | 'edit';
