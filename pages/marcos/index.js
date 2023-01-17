import styles from "@/styles/Marcos.module.css";

import Link from "next/link";
import axios from "axios";

export const getStaticProps = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");

  console.log("fetch users");

  return {
    props: { marcos: res.data },
  };
};

export default function Marcos({ marcos }) {
  console.log("render");

  return (
    <div>
      <h1>All Marcos</h1>
      {marcos.map(marco => (
        <Link href={`/marcos/${marco.id}`} key={marco.id} className={styles.single}>
          <h3>{marco.name}</h3>
        </Link>
      ))}
    </div>
  );
}
