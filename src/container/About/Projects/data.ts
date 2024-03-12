import {
  BikeImage,
  CodingTestImage,
  KyoongdevNestJSImage,
  PaletteImage,
  RoofLupinImage,
} from 'assets/images';
import type { Project } from 'interface/project.interface';

export const fusebleProjects: Project[] = [
  {
    title: '(주) **라이브',
    startDate: '2022.08',
    endDate: '2022.10',
    roles: ['FrontEnd'],
    skills: ['Next.js', 'Typescript', 'React-Query', 'Recoil', 'SCSS'],
    content:
      '기본적인 숏폼 기반 쇼핑몰 서비스이며, 웹페이지의 개발 및 리뉴얼을 진행하였으며 샵바이 프리미엄을 통한 커머스 시스템 FrontEnd를 개발하였습니다.\n\n당시 새롭게 이직하신 개발팀장님께서 버셀 환경에 대해 익숙치 않으셨기 때문에 미팅 시간을 통해 버셀 이전의 방식과 현 버셀의 방법의 차이점과 장점을 비교 설명을 드렸으며, 그 결과 이전 방식에서 버셀을 활용한 배포 방식으로 변경할 수 있었습니다.',
    hardPoints: [
      {
        cause:
          '서비스 출시를 앞두고 기존의 화이트 모드에 추가적으로 다크 모드 기능을 새롭게 도입해야했습니다.',
        solution:
          'scss의 함수 Mixin과 useTheme이라는 커스텀 훅을 개발했습니다. useTheme은 모든 노드를 순회하며 data-theme이라는 attribute를 삽입합니다.\n\n하지만 해당 방식은 효율성이 떨어지기 때문에 root 노드에만 data-theme을 적용하고 css variable을 통해 색을 변경하는 방법으로 변경하였습니다. 처음 방식의 경우 브라우저 환경에 따라 5초 이상 걸리기도 했던 다크모드로의 테마 변경이 수정 결과 체감이 되지 않을 정도의 수준으로 줄어들었습니다.',
      },
    ],
  },
  {
    title: '**CARE',
    startDate: '2022.03',
    endDate: '2022.09',
    roles: ['PM', 'BackEnd'],
    skills: ['Express', 'Typescript', 'Sequelize', 'MySQL'],
    content:
      '수소차의 수소 충전소 위치 안내 및 수소차 관리를 할 수 있는 서비스입니다. 서비스 전반적인 DB 리뉴얼 및 API 개발을 담당하였습니다.\n\n 기존의 데이터베이스의 경우 일부 테이블은 정규화가 제대로 이루어져있지 않았으며, 다른 일부 테이블의 경우 역정규화가 필요한 테이블이 있었기 때문에 해당 문제를 중점적으로 해결하고자 했습니다.\n\n프로젝트에 외국인 개발자 분들이 포함되어 있어 소통 간 무리가 없게하기 위해 요구 사항 및 전달 사항의 문구를 더욱 이해히기 편한 쉬운 말로 대체하여 소통의 어려움을 줄였습니다.',
    hardPoints: [
      {
        cause:
          '기존의 데이터베이스의 경우 통계 값을 계산할 때 거의 모든 테이블을 조회한 후 코드 레벨에서 계산을 하는 방식을 선택하고 있어, API 실행이 5초 이상 걸리는 현상이 있었습니다.',
        solution:
          '데이터베이스를 리뉴얼하면서 통계 값을 저장할 수 있는 테이블을 따로 만들어 다른 테이블을 조회하지 않아도 통계값을 산출할 수 있도록 개선하여 다른 API들과 비슷한 실행 속도를 보장하였습니다.',
      },
      {
        cause: '초성을 통해 검색을 할 수 있는 기능이 있었습니다.',
        solution:
          '검색된 결과에서 한글을 파싱하여 초성이 일치하는 값을 결과로 응답하는 방식을 선택했으나, MySQL RLIKE 기능을 통해 구현한다면 조회 속도를 빠르게 수정이 가능하기 때문에 추후 비슷한 기능의 경우 활용 예정입니다.',
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

export const soloProjects: Project[] = [
  {
    title: '따릉이 랜덤 디펜스',
    startDate: '2023.09',
    roles: ['FrontEnd'],
    image: BikeImage,
    skills: ['React', 'Typescript', 'SCSS'],
    content:
      '평소 따릉이를 자주 이용하고 주위 친구들과도 애용하고 있었습니다.\n\n어느 날 친구와 따릉이를 타고 자주 돌아다니다가, 문득 랜덤으로 목표지가 정해지고 그 곳을 따릉이를 타고 간다면 좋은 운동이 될 것이라고 생각했습니다.\n\n장소를 일일이 선택하는 것은 "랜덤"이라는 취지에서 벗어나기 때문에 랜덤으로 목적지를 정해줄 수 있는 서비스를 만들었습니다.\n\n\n\n따릉이 대여소의 위치가 저장되어있는 엑셀 시트를 활용하여 랜덤으로 값을 추출하고 레버를 돌리면 해당 목적지가 출력되는 방식으로 구현을 했습니다.',
    links: [
      {
        hover: '배포 링크',
        link: 'https://bike-trip-xi.vercel.app/',
      },
    ],
  },
  {
    title: 'kyoongdev-nestjs(오픈 소스 라이브러리)',
    startDate: '2022.09',
    roles: ['BackEnd'],
    skills: ['NestJS'],
    image: KyoongdevNestJSImage,
    content:
      'Nestjs를 이용한 프로젝트를 진행하다보니, 프로젝트마다 반복적으로 들어가는 코드가 있어 간략하게 관리하고 싶은 생각과 nestjs-swagger 모듈에 추가적인 기능을 부여하고 싶은 생각이 들었습니다.\n\n\n\n기존의 라이브러리는 개인적으로 사용하기에 기능이 분산되어있었기에 기능을 통합하고 최대한 코드를 간략하게 작성할 수 있도록 구성을 해두었습니다.\n\n특히 swagger의 경우 기본적으로 nullable : true를 설정하여도 example 칸에서는 nullable한지 알 수 없는 문제가 있었습니다.해당 부분을 수정하여 nullable : true를 설정하면 example 칸에서 "string | null"과 같이 표기될 수 있도록 하였습니다.\n\n\n\n추가로, 자주 사용하는 기능인 소셜 로그인, JWT, 에러 핸들링 등의 기능을 common 폴더에 미리 구현을 해둬 프로젝트를 진행하면서 해당 기능을 구현하는데 드는 시간적 비용을 비약적으로 단축시켰습니다.',
    links: [
      {
        hover: 'npm 링크',
        link: 'https://www.npmjs.com/package/kyoongdev-nestjs',
      },
    ],
  },
];

export const teamProjects: Project[] = [
  {
    title: '루프루팡',
    startDate: '2023.03',
    endDate: '2023.11',
    roles: ['BackEnd', 'DevOps'],
    image: RoofLupinImage,
    skills: ['Nest.js', 'Typescript', 'Prisma', 'MySQL', 'AWS EC2', 'AWS VPC', 'Code Deploy', 'S3'],
    links: [
      {
        link: 'https://github.com/kyoongdev/roof-lupin-server',
        hover: 'Github',
      },
    ],
    content:
      '옥상 공간 대여 중개 서비스로 숙박업소 대여 서비스와 유사한 기능을 가지고 있습니다. 팀 프로젝트로서 BackEnd 개발과 기획에 참여하였습니다.\n\n백엔드의 100%를 개발하였으며, 결제 모듈 연동, 푸시 알림, API 개발 등을 담당하였습니다. 결제 모듈은 토스페이먼츠사를 사용하였습니다. 기획부터 배포까지 참여를 했으며, 처음으로 앱스토어에 출시를 해보는 경험을 해보았습니다.\n\n이전까지 다뤄오던 프로젝트보다 많은 도메인을 혼자 개발하였기 때문에 자신의 코드에 매몰되지 않도록 객관적으로 코드를 바라보기 위해 노력을 기울였습니다.',
    hardPoints: [
      {
        cause:
          '검색 기능을 도입할 때, 기존에 사용하던 Prisma ORM을 통해서는 여러 테이블에 걸쳐 검색 필터를 적용할 수 없는 이슈가 있었습니다.',
        solution:
          '검색에 필요한 SQL Class를 구현하여 MySQL Query를 통해 검색이 가능하도록 구현하였으며, 이로 인해 ORM을 사용하는 방식보다 조회 시간을 절반 가량 단축시킬 수 있었습니다.',
      },
      {
        cause:
          '해당 프로젝트 이전의 프로젝트의 경우 에러 필터링 과정의 경우 에러가 규격화 되어있지 않아, 개발자 별로 다른 에러 형식을 사용할 수 밖에 없었습니다.',
        solution:
          '에러 관련 interface를 구현하여 에러 Class가 해당 interface를 implements한 기본 에러 Class를 상속받아 사용할 수 있도록 수정하여 일관된 에러를 반환할 수 있었습니다.',
      },
      {
        cause:
          '상품을 구매할 때, FrontEnd가 토스페이먼츠 기능을 사용하기 위해 데이터를 가공하게 될 경우 일부 데이터의 경우 DB를 조회 해야하는 이슈가 있어 네트워크 I/O가 추가적으로 발생했습니다.',
        solution:
          'BackEnd에서 토스페이먼츠사에 payload로 보내야하는 데이터를 가공하여 전달해주는 API를 개발하여 네트워크 I/O를 총 4번에서 2번으로 줄였습니다.',
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
          'Spring Boot 프로젝트에서는 테이블 Relation을 수정하는 것이 가장 좋은 해결방안이나, 일정 상 수정이 불가하였습니다. 따라서 개인적으로 진행한 프로젝트에서는 테이블 간의 Relation을 반영하여 조회가 가능하도록 조치하였습니다.\n\n테이블의 수정으로 모든 테이블을 조회하는 것에 비해 DB에 보내는 쿼리의 수가 5분의 1로 줄어들 수 있었습니다.',
      },
      {
        cause: '검색의 경우 기본적인 JPA의 메소드으로는 조회가 어려운 기능이었습니다.',
        solution:
          'JpaQueryFactory를 사용하여 Custom Repository를 만들고 기존의 Repository를 상속받게 하여 좀 더 복잡한 로직을 수행할 수 있게 개발하였습니다.',
      },
      {
        cause:
          'Request Header의 JWT를 통해 검증된 user 정보를 사용하기 위해 Security Context에서 해당 값을 불러오는 코드가 거의 모든 메소드에서 중복적으로 사용되고 있었습니다.',
        solution:
          'GetUserInfo라는 어노테이션을 만든 뒤, HandlerMethodArgumentResolver를 사용하여 해당 어노테이션이 붙어있을 경우 Security Context에서 유저 정보를 불러올 수 있도록 구현하였습니다. 이로 인해 재사용이 가능한 코드로 만들고 더욱 직관적으로 이해하기 쉬운 코드를 작성할 수 있었습니다.',
      },
      {
        cause:
          'Prisma ORM의 경우에는 Spring Boot와 다르게 Transactional 어노테이션(데코레이터)가 존재하지 않아 트랜잭션을 사용하게 되면 코드의 가독성이 떨어지는 문제가 존재했습니다.',
        solution:
          'Async Local Storage기반의 라이브러리인 nestjs-cls라는 라이브러리와 Toss에서 개발한 AOP의 아이디어를 차용하여 Request가 발생하면 Request 객체마다 Context를 생성하고 Prisma 객체를 저장합니다.\n만약 Request로 인해 실행되는 Method가 Transactional 데코레이터를 사용 중이라면 Context에 저장된 Prisma 객체를 Prisma Transaction 객체로 교환하는 방식으로 구현하였습니다.\n\n그 결과 트랜잭션이 필요한 로직에서 단순히 콜백에 활용되는 코드의 양을 줄여 가독성이 높아질 수 있게 되었습니다.',
      },
    ],
  },
];
