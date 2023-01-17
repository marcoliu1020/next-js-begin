import axios from "axios";

export const getStaticPaths = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  const paths = res.data.map(marco => ({ params: { id: marco.id.toString() } }));

  // 只能有下面 2 個 key，不然會 error
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async context => {
  // context 是上面傳下來的
  //
  // {
  //   params: { id: '5' },
  //   locales: undefined,
  //   locale: undefined,
  //   defaultLocale: undefined
  // }
  console.log("context >>>", context);

  const id = context.params.id;
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

  return {
    props: {
      marco: res.data,
    },
  };
};

export default function Details({ marco }) {
  return (
    <div>
      <h1>{marco.name}</h1>
      <p>{marco.email}</p>
      <p>{marco.website}</p>
      <p>{marco.address.city}</p>
    </div>
  );
}
