import Head from 'next/head';
import Link from 'next/link';
import RegisterOrganization from '../components/RegisterOrganization';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TokenVest</title>
        <meta name="description" content="Decentralized Vesting DApp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/logo.png" alt="TokenVest" className={styles.logo} />
        <h1 className={styles.heading}>
          Welcome to TokenVest
        </h1>
        <h2 className={styles.subheading}>
          Decentralized Vesting DApp
        </h2>

        <p className={styles.paragraph}>
          Manage your token vesting schedules efficiently and transparently.
        </p>
        <Link href="/admin" className={styles.button}>
          Go to Admin Dashboard
        </Link>

        <div className={styles.registerContainer}>
          <RegisterOrganization />
        </div>
      </main>
    </div>
  );
}
