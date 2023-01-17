export type TProject = {
  title: string;
  startedAt: string;
  endedAt: string;
  roles: Array<string>;
  description: string;
  skills: Array<string>;
  link?: string;
  thumbnail?: string;
};

export const projects: Array<TProject> = [
  {
    title: '(주)빗썸라이브',
    startedAt: '2022.08',
    endedAt: '2022.10',
    roles: ['Frontend'],
    skills: ['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS'],
    link: 'https://www.bithumblive.com/',
    description:
      '<p>웹페이지의 개발 및 리뉴얼을 진행하였으며</p><p>샵바이 프리미엄을 통한 커머스 시스템 Frontend를 개발하였습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/bithumb.png',
  },
  {
    title: 'H2CARE',
    startedAt: '2022.03',
    endedAt: '2022.09',
    roles: ['PM', 'Backend'],
    skills: ['Express', 'Sequelize', 'MySQL'],
    link: 'https://play.google.com/store/apps/details?id=com.aviv.hicare&hl=ko&gl=US',
    description:
      '<p>서비스 전반적인 백엔드 개발 및 DB설계를 총괄하였습니다.</p><p>서비스 규모가 크고, 대규모 데이터를 이관하는 과정이 있어,</p><p>서비스 설계 시, 도메인 단위 설계 및 Transaction을 통한 쿼리 관리를 진행했습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/h2care.jpeg',
  },
];
