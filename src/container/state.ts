import { atom } from 'jotai';

import { GetPostResponse } from 'services/Posts/type';
import { UserReq } from 'services/User/type';

export const meState = atom<UserReq | null>(null);

export const updatePostState = atom<GetPostResponse | null>(null);
