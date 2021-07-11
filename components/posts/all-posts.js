import PostsGrid from "./posts-grid";

import classes from "./all-posts.module.css";

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

const AllPosts = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default AllPosts;
