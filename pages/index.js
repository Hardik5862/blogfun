import { Fragment } from "react";
import Head from "next/head";

import { getFeaturedPosts } from "../lib/posts-util";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function Home(props) {
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
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default Home;
