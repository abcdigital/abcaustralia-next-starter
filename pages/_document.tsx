import * as React from 'react';
import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Html, Head, Main, NextScript } from 'next/document';

/**
 * Note: A custom `_document.tsx` (with empty `<script>` tag) has been added
 * purely to solve a flash of unstyled content from displaying. This can
 * probably be removed if that issue gets resolved.
 * - More info: https://github.com/vercel/next.js/issues/15642
 * - Docs reference: https://nextjs.org/docs/advanced-features/custom-document
 */
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
