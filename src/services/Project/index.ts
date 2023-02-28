import type { CreateProjectRequest, ProjectsResponse, UpdateProjectRequest } from './type';

import apiClient from 'services/apiClient';

export const getProjectsApi = async () => {
  return apiClient.get<ProjectsResponse[]>('/projects');
};

export const createProjectApi = async (body: CreateProjectRequest) => {
  return apiClient.post('/projects', body);
};

export const updateProjectApi = async (id: string, body: UpdateProjectRequest) => {
  return apiClient.put(`/projects/${id}`, body);
};

export const deleteProjectApi = async (id: string) => {
  return apiClient.delete(`/projects/${id}`);
};
