import classes from './featured-posts.module.css'
import PostGrid from '../posts/post-grid'
const FeaturedPosts = (props) => {
  
  const { posts } = props;
  console.log("in featured post")
  console.log(posts)
  return (
    <section className={classes.latest}>
<h2>
  Featured Posts
</h2>
<PostGrid posts={posts} />

    </section>
  )
}

export default FeaturedPosts