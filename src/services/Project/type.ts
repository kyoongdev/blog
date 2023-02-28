export interface ProjectsResponse {
  id: string;
  title: string;
  thumbnail: string;
  content: string;
  startDate: Date;
  endDate: Date;
  skills: string[];
  roles: string[];
}

export interface CreateProjectRequest extends Omit<ProjectsResponse, 'id'> {}
export interface UpdateProjectRequest extends Partial<CreateProjectRequest> {}
