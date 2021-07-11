import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BlogFun</title>
        <meta
          name="description"
          content="read about awesome things happening around the world!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Blogfun</h1>
    </div>
  );
}
