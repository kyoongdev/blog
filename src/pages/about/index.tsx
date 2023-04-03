import axios from 'axios';
import type { GetStaticProps, NextPage } from 'next';

import { API_URL } from 'config';
import { AboutPage } from 'container';
import { getProjectsApi } from 'services/Project';
import { ProjectsResponse } from 'services/Project/type';

interface Props {
  projects: ProjectsResponse[];
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get<ProjectsResponse[]>(`${API_URL}/projects`);

  return {
    props: {
      projects: data,
    },
  };
};

const Page: NextPage<Props> = ({ projects }) => {
  return <AboutPage projects={projects} />;
};

export default Page;
