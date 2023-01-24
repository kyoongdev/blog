type Menu = {
  icon: string;
  name: string;
  path: string;
};

export const MENU: Array<Menu> = [
  {
    icon: '🏠',
    name: 'Home',
    path: '/',
  },
  {
    icon: '📝',
    name: 'About',
    path: '/about',
  },
  ...(process.env.NODE_ENV === 'development'
    ? [
        {
          icon: '📃',
          name: 'Post',
          path: '/post',
        },
      ]
    : []),
];

export const TAGS = ['프런트엔드', '백엔드', '인프라', '라이프스타일', '인간관계'] as const;
