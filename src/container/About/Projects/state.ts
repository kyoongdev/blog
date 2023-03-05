import { atom } from 'recoil';

import { ProjectsResponse } from 'services/Project/type';

export const selectedProjectState = atom<ProjectsResponse | null>({
  key: '#project/selectedProjectState',
  default: null,
});
