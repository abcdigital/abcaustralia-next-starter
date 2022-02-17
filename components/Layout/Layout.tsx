import {
  BrandLogo,
  MastheadBox,
  MastheadLogoLink,
  LayoutContainer,
} from '@abcaustralia/nucleus/es6';
import Head from 'next/head';
import styles from './Layout.module.css';

export const siteTitle = '@abcaustralia x Next.js';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href={`/favicon.svg`} />
        <meta
          name="description"
          content="A starter app for @abcaustralia components and Next.js"
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <MastheadBox contentAnchor="#content" className={styles.mastheadBox}>
        <MastheadLogoLink
          linkHref="https://www.abc.net.au"
          className={styles.logoLink}
        >
          <BrandLogo logoType="abc" screenReaderText="ABC" />
        </MastheadLogoLink>
      </MastheadBox>
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
}
