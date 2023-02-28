import { NODE_ENV } from 'config';
export const isLocal = NODE_ENV !== 'prod';
