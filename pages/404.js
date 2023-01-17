import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function NotFound() {
  const router = useRouter();

  const [seconds] = useState(3)

  useEffect(() => {
    console.log("go to home page after 3 seconds");

    setTimeout(() => {
      router.push("/");
    }, 1000 * seconds);
  }, []);

  return (
    <div className='not-found'>
      <h1>Ooooops...</h1>

      <h2>That page cannot be found.</h2>

      <p>
        Go back to the <Link href={"/"}>Homepage</Link> after {seconds} seconds
      </p>
    </div>
  );
}
