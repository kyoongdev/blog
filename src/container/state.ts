import { atom } from 'jotai';

import { UserReq } from 'services/User/type';

export const meState = atom<UserReq | null>(null);
