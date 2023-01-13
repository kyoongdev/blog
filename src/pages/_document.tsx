import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // html 태그에 언어 설정
      <Html lang='ko'>
        <Head>
          <link rel='stylesheet' href='github-markdown.css' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
