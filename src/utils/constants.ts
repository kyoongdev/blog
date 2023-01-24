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
