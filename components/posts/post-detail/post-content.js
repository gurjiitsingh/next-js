import React from 'react';
import ReactMarkDown from 'react-markdown';

import classes from './post-content.module.css';
import PostHeader from './post-header';
// const DUMMY_POSTS = 
//     {
//       slug: 'getting-started-with-next-js',
//        title:'Getting Start',
//         image: 'getting-started-nextjs.png', 
//         date: '2024-01-11',
//          content: "#This is a first post",
//     }
  

const PostContent = (props) => {
const { post } = props;

    const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        {post.content}
    {/* <ReactMarkDown> {post.content}</ReactMarkDown>   */}
    </article>
  )
}

export default PostContent