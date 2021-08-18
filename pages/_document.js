import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            <>
                <title>Neuromania</title>
            </>
        </Head>
        <body>
            <div id={"portal"}></div>
            <Main />
            <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument