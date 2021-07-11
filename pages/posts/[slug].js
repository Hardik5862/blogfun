import { Fragment } from "react";
import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";

function PostDetailPage() {
  return (
    <Fragment>
      <Head>
        <title>Post Details | BlogFun</title>
        <meta name="description" content="Post Details!" />
      </Head>
      <PostContent />
    </Fragment>
  );
}

export default PostDetailPage;
