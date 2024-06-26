import styles from './career.module.scss';

import { Career } from 'interface/career.interface';

export const CAREERS: Career[] = [
  {
    dataKey: 'humonlab',
    title: '(주) 휴몬랩',
    startAt: '2020.09',
    endAt: '2021.04',
    job: '인턴',
    description:
      '코딩 교육 회사로서 코딩 교육에 필요한 업무(개발자 유형 찾기 페이지 개발, 카페 운영, "모여서 각자 코딩" 관리)를 지원하는 역할을 하였습니다.\n\n팀 내에서 협업하는 방식, 개발자가 팀으로서 일하는 방식에 대해 처음 접하게 된 계기였습니다.\n\n해당 경험을 통해 팀이 상상하고 기획하는 것을 실현하는 **개발자의 매력**을 더 느끼게 되었습니다.',
    children: (
      <ul className={styles.careerDetail}>
        <li>
          <strong>코딩 교육 업무 지원</strong>
          <p>
            코딩 교육에 필요한 자료인 C, Java, Python에 대한 기본 문법 자료를 만들어 카페에
            기재하였으며,
            <br />
            모각코(모여서 각자 코딩)이라는 프로그램의 매니저를 맡아, 일정 기간 동안 이용자들이
            꾸준하게 코딩 공부가 가능하도록 서비스를 제공하였습니다.
          </p>
        </li>
        <li>
          <strong>개발자 유형찾기 페이지 개발 지원</strong>
          <p>
            당시 유행했던 MBTI 열풍에 맞춰, 개발자 유형 찾기 페이지 개발 업무를 지원하게 되었습니다.
            <br />
            많은 개발 업무를 담당하진 않았으나 Git을 통해 협력하는 방식, 개발 관련 이슈 처리 방식 등
            개발 프로세스에 대한 전반적인 이해도를 높일 수 있었습니다.
          </p>
        </li>
      </ul>
    ),
  },
  {
    dataKey: 'fuseble',
    title: '(주) 퓨저블',
    startAt: '2022.03',
    endAt: '2022.10',
    description: `사내에서 진행하는 외주 프로젝트 중 백엔드 개발 업무를 위주로 담당하였습니다.\n\n해당 기간 동안 다양한 규모의 회사를 직,간접적으로 경험하며 각 팀별의 소통 방식 등을 통해 상황마다 **적절한 소통 능력**을 습득할 수 있었습니다.\n\n진행한 프로젝트의 다양성만큼 여러 문제를 직접 경험하고 해결하며 API 설계 방식, 도메인 별 기능 분리, API 문서 명세 등과 같은 **백엔드 개발자로서의 전반적인 사고 방식**을 습득할 수 있었습니다.`,
    job: 'BE Developer',
    children: (
      <ul className={styles.careerDetail}>
        <li>
          <strong>BE 외주 개발</strong>
          <p>
            기존 구축된 DB가 있다면, 기획 혹은 요구 명세서에 맞는 API 개발 업무를 담당하였으며
            <br />
            DB가 없다면 서비스 구조를 파악하여 DB 설계부터 API 개발까지 담당하였습니다.
            <br />
            개발 업무 외에도 클라이언트 혹은 팀 내부 개발자와의 일정을 조율하며, 프로젝트가 진행되는
            동안 클라이언트와 소통하는 업무 또한 담당하였습니다.
          </p>
        </li>
        <li>
          <strong>사내 자체 라이브러리 개발</strong>
          <p>
            업무를 진행하다보면 같은 기능을 계속해서 개발을 해야하는 소요가 발생하거나
            <br />
            팀의 방향성에 어긋나는 라이브러리가 발견되는 경우가 있습니다.
            <br />
            이때, 팀의 업무 효율성 증대를 위해 FrontEnd의 경우 기본 React 컴포넌트, BackEnd는
            Express 기반 Swagger Generator를 제작하여 초기 프로젝트 세팅 및 진행 중 개발의 질을
            향상시켰습니다.
          </p>
        </li>
      </ul>
    ),
  },
];
