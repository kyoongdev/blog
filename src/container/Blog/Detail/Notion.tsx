'use client';

import { NotionRenderer } from 'react-notion-x';

import 'react-notion-x/src/styles.css';

interface Props {
  recordMap: any;
}

const Notion: React.FC<Props> = ({ recordMap }) => {
  return <NotionRenderer recordMap={recordMap} />;
};

export default Notion;
