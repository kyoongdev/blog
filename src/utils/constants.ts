type Menu = {
  icon: string;
  name: string;
  path: string;
  forAdmin?: boolean;
};

export const MENU: Array<Menu> = [
  {
    icon: '🏠',
    name: 'Home',
    path: '/',
  },
  {
    icon: '📝',
    name: 'Blog',
    path: '/blog',
  },
];

export const TAGS = ['프런트엔드', '백엔드', '인프라', '라이프스타일', '인간관계'] as const;
