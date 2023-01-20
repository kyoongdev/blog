import { atom } from 'recoil';

export const tags = atom<string[]>({
  key: '#selected_tags',
  default: [],
});
