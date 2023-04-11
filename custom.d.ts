declare module '*.svg' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

declare type MDEditor = typeof mdEditor & {
  Markdown: typeof MarkdownPreview;
};
