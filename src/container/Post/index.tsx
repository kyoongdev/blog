import dynamic from 'next/dynamic';
import React from 'react';
import '@uiw/react-md-editor/markdown-editor.css';

const Editor = dynamic(() => import('@uiw/react-md-editor'), {
  ssr: false,
});

const PostPage: React.FC = () => {
  const [value, setValue] = React.useState('**Hello world!!!**');

  return (
    <section>
      <label>
        <h1>Title</h1>
        <input />
      </label>
      <Editor value={value} onChange={(e) => setValue(e!)} />
    </section>
  );
};

export default PostPage;
