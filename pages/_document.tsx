import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head title="VOID - Valorant - Posts" />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
