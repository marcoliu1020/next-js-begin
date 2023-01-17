import Head from "next/head";
import Link from "next/link";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Marco List | Home</title>
        <meta name="keywords" content="marco" />
      </Head>

      <div>
        <h1 className={styles.title}>Homepage</h1>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae voluptas magnam,
          officia quidem veritatis nemo beatae voluptate nam deserunt?
        </p>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae voluptas magnam,
          officia quidem veritatis nemo beatae voluptate nam deserunt?
        </p>

        <Link href={"/marco"} className={styles.btn}>
          See Marco Listing
        </Link>
      </div>
    </>
  );
}
