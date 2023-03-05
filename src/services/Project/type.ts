export interface ProjectsResponse {
  id: string;
  title: string;
  thumbnail?: string;
  link?: string;
  content: string;
  startDate: string;
  endDate: string;
  skills: string[];
  roles: string[];
}

export interface CreateProjectRequest extends Omit<ProjectsResponse, 'id'> {}
export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {}
