import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // html 태그에 언어 설정
      <Html lang='ko'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
          <div id='drawer' />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
