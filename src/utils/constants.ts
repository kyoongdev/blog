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
    name: 'About',
    path: '/about',
  },
  {
    icon: '📃',
    name: 'Post',
    path: '/post',
    forAdmin: true,
  },
];

export const getMenus = (isAdmin: boolean) => {
  return MENU.filter((menu) => {
    if (menu.forAdmin) {
      return isAdmin;
    }
    return true;
  });
};

export const TAGS = ['프런트엔드', '백엔드', '인프라', '라이프스타일', '인간관계'] as const;
