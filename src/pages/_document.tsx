import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // html 태그에 언어 설정
      <Html lang='ko'>
        <Head>
          <meta
            name='google-site-verification'
            content='52gi9dWRA8d3Cemza2Gpm0kxwJxoSY0S5mOdJInDU2I'
          />
        </Head>
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
