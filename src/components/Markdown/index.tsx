import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import remarkGfm from 'remark-gfm';

interface Props {
  content: string;
}

const Markdown: React.FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown className='markdown' remarkPlugins={[remarkGfm, remarkBreaks]}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
