import { Fragment } from "react";
import Head from "next/head";

import { getPostData, getPostsFiles } from "../../lib/posts-util";
import PostContent from "../../components/posts/post-detail/post-content";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title} | BlogFun</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const postData = getPostData(params.slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
