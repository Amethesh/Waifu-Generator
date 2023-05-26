import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <main className={styles.main}>This is the Home Page</main>
    </>
  );
}
