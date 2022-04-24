import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next.js template</title>
        <meta name="description" content="Template for Next.js sites" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>
          Welcome to the <a href="https://somedevsdo.com">somedevsdo</a> Next.js template
        </h1>
        <p>
          This repo can be used for spinning up new projects with an agreed and efficient setup.
        </p>
      </main>
    </div>
  );
};

export default Home;
