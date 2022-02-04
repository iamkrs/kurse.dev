import Document, { Head, Html, Main, NextScript } from "next/document";
import Favicon from "../src/components/Head/Favicon";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Favicon />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet" />
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
