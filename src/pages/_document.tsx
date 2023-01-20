import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      // html 태그에 언어 설정
      <Html lang='ko'>
        <Head>
          <meta
            name='google-site-verification'
            content='HXjkPnV8sUBU3YbU5Pxch-UOwoC0UyPdTCfM1GtF3ME'
          ></meta>
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
