import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="DigitalOcean - The developer cloud (Clone created by Seiji Matsumoto)"
          />
          <meta
            name="image"
            property="og:image"
            content="https://images.prismic.io/www-static/0026a57b93abe5b04413765253903472dab58e11_general-droplets_blog-v4_twitter---facebook.png?auto=compress,format"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Work+Sans&display=swap"
            rel="stylesheet"
          ></link>
          <link rel="icon" href="/images/do-logo-transparent.png" />
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
