import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";

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

function AllPostsPage() {
  return (
    <div>
      <Head>
        <title>All posts | BlogFun</title>
        <meta name="description" content="list of all blog posts" />
      </Head>
      <h1>All posts</h1>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default AllPostsPage;
