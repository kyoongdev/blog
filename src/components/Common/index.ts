import dynamic from 'next/dynamic';

export { default as Button } from './Button';
export { default as Tags } from './Tags';

export const Drawer = dynamic(() => import('./Drawer'));
