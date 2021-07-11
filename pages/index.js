import { Fragment } from "react";
import Head from "next/head";

import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "Nextjs is a reactjs framework for production that makes developing full stack react app super easy!",
    date: "2022-02-10",
  },
];

function Home() {
  return (
    <Fragment>
      <Head>
        <title>BlogFun</title>
        <meta
          name="description"
          content="read about awesome things happening around the world!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default Home;
