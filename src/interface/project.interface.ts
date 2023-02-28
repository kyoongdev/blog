import type { FormArray } from './keywords.interface';

import type { CreateProjectRequest } from 'services/Project/type';

export interface ProjectForm extends Omit<CreateProjectRequest, 'skills' | 'roles'> {
  skills: FormArray[];
  roles: FormArray[];
}
