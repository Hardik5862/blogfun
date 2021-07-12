import Head from "next/head";

import { getAllPosts } from "../../lib/posts-util";
import AllPosts from "../../components/posts/all-posts";

function AllPostsPage(props) {
  return (
    <div>
      <Head>
        <title>All posts | BlogFun</title>
        <meta name="description" content="list of all blog posts" />
      </Head>
      <AllPosts posts={props.posts} />
    </div>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
