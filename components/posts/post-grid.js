import PostItem from './post-items';
import classes from './post-grid.module.css'

const PostsGrid = (props) => {
    console.log("in grid")
    console.log(props)
    const { posts } = props;
    
  return (
    <ul className={classes.grid}>
{
    posts.map((post)=>{
        return (<PostItem key={post.slug} post={post} />)
    })
}
    </ul>
  )
}

export default PostsGrid