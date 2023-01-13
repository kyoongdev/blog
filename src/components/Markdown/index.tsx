import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

import styles from './markdown.module.scss';

interface Props {
  content: string;
}

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown className={styles.markdown} remarkPlugins={[remarkGfm, remarkBreaks]}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
