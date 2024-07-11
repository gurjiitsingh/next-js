import Head from 'next/head';
import { Fragment } from 'react';

import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/post-utils';
// import React from 'react'
// import PostContent from '../../components/posts/post-detail/post-content'
// import { getPostData  } from '../../lib/post-utils'


// const PostDetailPage = (props) => {
//   return (
//     <PostContent content={props.posts} />
//   )
// }



function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name='description' content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />
    </Fragment>
  );
}


export function getStaticProps(context) {
  console.log("context")
  console.log(context)
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}


export function getStaticPaths() {
  const postFilenames = getPostsFiles();

  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;

// export function getStaticPaths(){

//   const postFilenames = getPostData();
//   const slugs = postFilenames.map((fileName)=> fileName.replace(/\.md$/,''));
// return{
//   paths: slugs.map(slug=>({params:{slug:slug}})),
//   fallback: false
// }
// }

// export default PostDetailPage