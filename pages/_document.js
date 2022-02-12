import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="/favicon.png" />
          <link
            href="https://fonts.googleapis.com/css?family=Muli:400,600,700"
            rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** 
            Chrome Bug (FOUC): https://stackoverflow.com/questions/14389566
            Track here: https://crbug.com/332189 
          */}
          <script> </script>
        </body>
      </Html>
    );
  }
}
