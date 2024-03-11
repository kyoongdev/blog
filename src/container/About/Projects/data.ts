import { CodingTestImage, PaletteImage, RoofLupinImage } from 'assets/images';
import type { Project } from 'interface/project.interface';

export const fusebleProjects: Project[] = [
  {
    title: '(주) **라이브',
    startDate: '2022.08',
    endDate: '2022.10',
    roles: ['FrontEnd'],
    skills: ['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS'],
    content:
      '웹페이지의 개발 및 리뉴얼을 진행하였으며 샵바이 프리미엄을 통한 커머스 시스템 FrontEnd를 개발하였습니다.',
    hardPoints: [
      {
        cause: '서비스 출시를 앞두고 다크 모드 기능을 새롭게 도입해야했습니다.',
        solution:
          'scss의 함수 Mixin과 useTheme이라는 커스텀 훅을 개발했습니다. useTheme은 모든 노드를 순회하며 data-theme이라는 attribute를 삽입합니다.\n\n하지만 해당 방식은 효율성이 떨어지기 때문에 root 노드에만 data-theme을 적용하고 css variable을 통해 색을 변경하는 방법으로 변경하였습니다.',
      },
    ],
  },
  {
    title: '**CARE',
    startDate: '2022.03',
    endDate: '2022.09',
    roles: ['PM', 'BackEnd'],
    skills: ['Express', 'Typescript', 'Sequelize', 'MySQL'],
    content: '서비스 전반적인 DB 리뉴얼 및 API 개발을 담당하였습니다.',
    hardPoints: [
      {
        cause: '초성을 통해 검색을 할 수 있는 기능이 있었습니다.',
        solution:
          '검색된 결과에서 한글을 파싱하여 초성이 일치하는 값을 결과로 응답하는 방식을 선택했으나, MySQL RLIKE 기능을 통해 구현한다면 조회 속도를 빠르게 수정이 가능하기 때문에 추후 비슷한 기능의 경우 활용 예정입니다.',
      },
    ],
  },
  {
    title: '(주) *디스',
    startDate: '2022.03',
    endDate: '2022.08',
    roles: ['BackEnd'],
    skills: ['Express', 'Prisma', 'Socket.io', 'MariaDB'],
    content:
      '의사와 약사, 그리고 환자를 매칭하는 서비스입니다.\n\nMVP 서비스 개발을 담당하여, ERD 설계부터 백엔드 개발까지 담당하였습니다.',
    hardPoints: [
      {
        cause:
          '진료 승인과 거절 등을 socket을 통해 구현했으나, 소켓에 접속하지 않은 유저의 경우 승인과 거절 결과를 알 수 없었습니다.',
        solution:
          '유저가 소켓에 접속해있지 않을 때에는 푸시 알림을 통해 승인과 거절 결과를 알 수 있는 페이지로 이동을 시키는 방식을 사용했습니다.',
      },
    ],
  },
];

export const humonlabProjects: Project[] = [
  {
    title: '개발자 유형찾기',
    startDate: '2020.09',
    endDate: '2020.11',
    roles: ['FrontEnd', 'BackEnd'],
    skills: ['React', 'Styled-Components', 'MongoDB', 'mongoose', 'Koa', 'TypeScript'],
    content:
      'MBTI 질문을 기반으로 사용자의 개발자 유형을 찾아주는 프로젝트입니다.\n\n개발의 모든 과정에 참여하진 않았으나, 백엔드 개발 과정에는 대부분 참여하여 성공적으로 프로젝트를 마쳤습니다.\n\nGit을 관리하는 방법, 이슈 정리, 요구사항 요청 등 개발팀으로서 협력하는 기본적인 방법을 배웠습니다.',
    image: CodingTestImage,
    hardPoints: [
      {
        cause:
          '개발자의 유형을 찾는 문제를 풀고 해당 문제에 대한 정답에 따라 유형을 도출해야 과정에서\n 문제 유형별로 정답에 가중치를 계산해야하는 문제가 있었습니다.',
        solution:
          '각 문제 별로 조건문을 통해 선택한 정답에 대한 가중치를 더하거나 빼는 방식으로 결과를 도출하였으나,\n 해당 방법은 코드의 가독성이 떨어지므로, 정답과 유형별 결과를 저장할 수 있는 해시를 사용하여 미리 데이터를 저장해두고 각 값에 맞는 결과를 보여주는 것이 더 좋은 해결책이 될 수 있습니다.',
      },
    ],
  },
];

export const teamProjects: Project[] = [
  {
    title: '루프루팡',
    startDate: '2023.03',
    endDate: '2023.11',
    roles: ['BackEnd'],
    image: RoofLupinImage,
    skills: ['Nest.js', 'Typescript', 'Prisma', 'MySQL', 'AWS EC2', 'S3'],
    links: [
      {
        link: 'https://github.com/kyoongdev/roof-lupin-server',
        hover: 'Github',
      },
    ],
    content:
      '옥상 공간 대여 중개 서비스로 숙박업소 대여 서비스와 유사한 기능을 가지고 있습니다. 팀 프로젝트로서 BackEnd 개발과 기획에 참여하였습니다.\n\n백엔드의 100%를 개발하였으며, 결제 모듈 연동, 푸시 알림, API 개발 등을 담당하였습니다. 처음으로 팀 프로젝트로서 앱스토어에 출시를 해보는 경험을 해보았습니다.\n\n이전까지 다뤄오던 프로젝트보다 많은 도메인을 혼자 개발하였기 때문에 자신의 코드에 매몰되지 않도록 객관적으로 코드를 바라보기 위해 노력을 기울였습니다.',
    hardPoints: [
      {
        cause:
          '검색 기능을 도입할 때, 기존에 사용하던 Prisma ORM을 통해서는 여러 테이블에 걸쳐 검색 필터를 적용할 수 없는 이슈가 있었습니다.',
        solution:
          '검색에 필요한 SQL Class를 NestJs 컨테이너에 등록하여 MySQL Query를 통해 검색이 가능하도록 구현하였으며, 이로 인해 ORM을 사용하는 방식보다 조회 시간을 단축시킬 수 있었습니다.',
      },
      {
        cause:
          '해당 프로젝트 이전의 프로젝트의 경우 에러 필터링 과정의 경우 에러가 규격화 되어있지 않아, 개발자 별로 다른 에러 형식을 사용할 수 밖에 없었습니다.',
        solution:
          '에러 관련 interface를 구현하여 에러 Class가 해당 interface를 implements한 기본 에러 Class를 상속받아 사용할 수 있도록 수정하여 일관된 에러를 반환할 수 있었습니다.',
      },
      {
        cause:
          '상품을 구매할 때, FrontEnd가 PG사 기능을 사용하기 위해 데이터를 가공하게 될 경우 일부 데이터의 경우 DB를 조회 해야하는 이슈가 있어 네트워크 I/O가 추가적으로 발생했습니다.',
        solution:
          'BackEnd에서 PG사에 payload로 보내야하는 데이터를 가공하여 전달해주는 API를 개발하여 네트워크 I/O를 줄였습니다.',
      },
    ],
  },
  {
    title: '팔레트',
    startDate: '2023.08',
    roles: ['PM', 'BackEnd'],
    image: PaletteImage,
    skills: ['Spring Boot', 'JPA', 'Java', 'MySQL', 'NestJs', 'Typescript', 'Prisma'],
    links: [
      { link: 'https://github.com/kyoongdev/palette-server-nestjs', hover: 'Github(NestJS)' },
      { link: 'https://github.com/kyoongdev/palette-server', hover: 'Github(Spring Boot)' },
    ],
    content:
      '음악인이 음원부터 믹스마스터링까지의 과정을 서로 구매할 수 있는 서비스입니다.\n\n동아리장으로 있는 개발 동아리원들과 함께 개발을 진행했으며 저는 일정 관리 및 일부 BackEnd 개발에 참여하였습니다.\n\n추후 개선이 필요한 기능이 있어 개인적으로 NestJs를 통해 개선점을 반영하여 다시 프로젝트를 개발하기도 하였습니다.',
    hardPoints: [
      {
        cause:
          '첫 기획 내용에서는 각 상품 카테고리 마다의 테이블가 독립적으로 존재하였기 때문에 기획이 변경되며 전체 검색 기능을 위해서는 여러 테이블에 걸쳐 조회를 실시해야하는 이슈가 있었습니다.',
        solution:
          'Spring Boot 프로젝트에서는 테이블 Relation을 수정하는 것이 가장 좋은 해결방안이나, 일정 상 수정이 불가하였습니다. 따라서 개인적으로 진행한 프로젝트에서는 테이블 간의 Relation을 반영하여 조회가 가능하도록 조치하였습니다.',
      },
      {
        cause: '기존의 JPA의 기능으로는 조회가 어려운 기능이 존재하였습니다.',
        solution:
          'JpaQueryFactory를 사용하여 Custom Repository를 만들고 기존의 Repository를 상속받게 하여 좀 더 복잡한 로직을 수행할 수 있게 개발하였습니다.',
      },
      {
        cause:
          'Request Header의 JWT를 통해 검증된 user 정보를 사용하기 위해 Security Context에서 해당 값을 불러오는 코드가 중복적으로 사용되고 있었습니다.',
        solution:
          'GetUserInfo라는 어노테이션을 만든 뒤, HandlerMethodArgumentResolver를 사용하여 해당 어노테이션이 붙어있을 경우 Security Context에서 유저 정보를 불러올 수 있도록 구현하였습니다. 이로 인해 재사용이 가능한 코드로 만들고 더욱 직관적으로 이해하기 쉬운 코드를 작성할 수 있었습니다.',
      },
      {
        cause:
          'Prisma ORM의 경우에는 Spring Boot와 다르게 Transactional 어노테이션(데코레이터)가 존재하지 않아 트랜잭션을 사용하게 되면 코드의 가독성이 떨어지는 문제가 존재했습니다.',
        solution:
          'Async Local Storage기반의 라이브러리인 nestjs-cls라는 라이브러리와 Toss에서 개발한 AOP의 아이디어를 차용하여 Request가 발생하면 Request 객체마다 Context를 생성하고 Prisma 객체를 저장합니다.\n만약 Request로 인해 실행되는 Method가 Transactional 데코레이터를 사용 중이라면 Context에 저장된 Prisma 객체를 Prisma Transaction 객체로 교환하는 방식으로 구현하였습니다.',
      },
    ],
  },
];
