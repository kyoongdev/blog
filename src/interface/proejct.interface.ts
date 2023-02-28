import { CreateProjectRequest } from 'services/Project/type';

interface FormArray {
  name: string;
  width: number;
}

export interface ProjectForm extends Omit<CreateProjectRequest, 'skills' | 'roles'> {
  skills: FormArray[];
  roles: FormArray[];
}
