type ProjectType = 'AGENCY' | 'PERSONAL' | 'COMPANY';

export type Project = {
  title: string;
  type: ProjectType;
  startedAt: string;
  endedAt: string;
  roles: Array<string>;
  content: string;
  skills: Array<string>;
  link?: string;
  thumbnail?: string;
};

export const projects: Array<Project> = [
  {
    title: '(주)WATA',
    type: 'AGENCY',
    startedAt: '2023.02',
    endedAt: '2023.4',
    roles: ['Frontend'],
    skills: ['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS', 'WebGL'],
    link: 'https://www.watanow.com/web/landing.do?lang=en',
    content:
      '<p>기존의 Javascript 및 Redux로 구성된 Mono Repo FE 프로젝트와</p><p>Unity 통신 방식이 원할하지 않아 메모리를 많이 사용하는 상태였습니다.</p><p>이에 우선 언어를 Typescript로 교체하고, Redux보다 가볍고 React-Query와의 궁합이 좋은 Recoil을 도입했습니다.</p><p>기존의 Event Emitter 방식에 메모리 유수가 많아 필요할 때만 등록하고 제거할 수 있도록 custom hook으로 교체하였습니다.</p>',
    thumbnail: 'https://kyoongdev-blog.sgp1.vultrobjects.com/images/wata.png',
  },
  {
    title: '(주)빗썸라이브',
    type: 'AGENCY',
    startedAt: '2022.08',
    endedAt: '2022.10',
    roles: ['Frontend'],
    skills: ['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS'],
    link: 'https://www.bithumblive.com/',
    content:
      '<p>웹페이지의 개발 및 리뉴얼을 진행하였으며</p><p>샵바이 프리미엄을 통한 커머스 시스템 Frontend를 개발하였습니다.</p><p>최대한 모바일에서 작동이 어색하지 않도록 bottom sheet를 활용해서 앱과 비슷한 UI를 구현하였습니다.</p><p>다크모드를 지원하는 디자인을 개발하기 위해 SCSS의 mixin 및 constants를 적극 활용하였습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/bithumb.png',
  },
  {
    title: 'H2CARE',
    type: 'AGENCY',
    startedAt: '2022.03',
    endedAt: '2022.09',
    roles: ['PM', 'Backend'],
    skills: ['Express', 'Typescript', 'Sequelize', 'MySQL'],
    link: 'https://play.google.com/store/apps/details?id=com.aviv.hicare&hl=ko&gl=US',
    content:
      '<p>서비스 전반적인 백엔드 개발 및 DB설계를 총괄하였습니다.</p><p>서비스 규모가 크고, 대규모 데이터를 이관하는 과정이 있어 서비스 설계 시, 도메인 단위 설계 및 Transaction을 통한 쿼리 관리를 진행했습니다.</p><p>결제 서비스가 있는 만큼 SQL이 Dead Lock 상태 등에 빠지지 않도록 하기 위해 Lock을 사용하여 격리 상태를 구분하였습니다.</p><p>일부 Message 기능의 경우에는 Service로 구성하지 않고 Event Emitter를 사용하여 IOP로 구성하였습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/h2care.jpeg',
  },
  {
    title: '(주)메디스',
    type: 'AGENCY',
    startedAt: '2022.03',
    endedAt: '2022.08',
    roles: ['Backend'],
    skills: ['Express', 'Prisma', 'Socket.io', 'MariaDB'],
    content:
      '<p>의사와 약사, 그리고 환자를 매칭하는 서비스입니다.</p><p>MVP 서비스 개발을 담당하여, ERD 설계부터 백엔드 개발까지 담당하였습니다.</p><p>사용자 경험을 개선하기 위해 일부 기능을 Socket 통신으로 개발하였습니다.</p>',
  },
  {
    title: '(주)컬러버스',
    type: 'AGENCY',
    startedAt: '2022.03',
    endedAt: '2022.06',
    roles: ['Frontend'],
    skills: ['React', 'React-Query', 'Recoil', 'Redux-toolkit', 'SCSS'],
    content:
      '<p>서비스 되었던 게임을 리뉴얼하는 프로젝트입니다.</p><p>리뉴얼하는 프로젝트인 만큼 최대한 라이프 사이클을 조절하여 사용자 경험을 최대화 시켰습니다.</p><p>아이템을 선정 및 검색하는 기능이 많아 Recoil을 사용하여 상태를 관리하였으며,</p><p>CSS의 최적화를 위해 Reflow & Repaint를 최소화하는 CSS를 적용했습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/colorverse.png',
    link: 'https://www.puppyred.com/',
  },
  {
    title: '마켓 프레고',
    type: 'AGENCY',
    startedAt: '2022.02',
    endedAt: '2022.04',
    roles: ['Backend'],
    skills: ['Express', 'Prisma', 'MariaDB'],
    content:
      '<p>마켓컬리와 유사한 식품 전자상거래 서비스입니다.</p><p>전자상거래 서비스 특징 상 보안 및 DB 원자성이 필수이기 때문에 토큰 및 bcrypt를 통한 데이터 통신 및 보안에 힘쓰고 transaction을 통해 쿼리 결과를 보존하였습니다.</p>',
    thumbnail: 'https://sgp1.vultrobjects.com/kyoongdev-blog/images/frego.jpeg',
    link: 'https://marketfrego.modoo.at/',
  },
];
