import PostsGrid from './post-grid'
import classes from './all-posts.module.css';
const AllPosts = (props) => {
    console.log("in all post")
    console.log(props.posts)
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} /> 

    </section>
  )
}

export default AllPosts