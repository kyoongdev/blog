import dynamic from 'next/dynamic';

export const Drawer = dynamic(() => import('./Drawer'));
export { default as Tags } from './Tags';
export { default as HeadMeta } from './HeadMeta';
export { default as Button } from './Button';
