import Head from 'next/head';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is the home page" />
      </Head>
      <h1>Home Page</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro
        reiciendis ea quibusdam nemo nobis hic iure quos odio corporis,
        laudantium animi laborum voluptatem quia, veniam fuga aperiam officia
        sequi!
      </p>
      <Link href="/users">
        <a>See Marvel Listing</a>
      </Link>
    </div>
  );
}
