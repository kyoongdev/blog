import cx from 'classnames';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import remarkGfm from 'remark-gfm';

interface Props {
  className?: string;
  content: string;
}

const Markdown: React.FC<Props> = ({ className, content }) => {
  const CodeBlock: any = {
    code({
      inline,
      className,
      children,
      ...props
    }: {
      inline: boolean;
      className: string;
      children: string;
      props: any;
    }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        <SyntaxHighlighter style={vscDarkPlus} language={match[1]} PreTag='div' {...props}>
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      );
    },
  };
  return (
    <ReactMarkdown
      className={cx('markdown', className)}
      components={CodeBlock}
      remarkPlugins={[remarkGfm]}
    >
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
