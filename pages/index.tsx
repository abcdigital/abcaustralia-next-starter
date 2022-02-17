import Head from 'next/head';
import Layout, { siteTitle } from '../components/Layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <main>
        <p>
          This is a barebones Next.js app set up to use{' '}
          <code>@abcaustralia</code> components!
        </p>
      </main>
    </Layout>
  );
}
