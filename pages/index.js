import React, { Fragment } from "react";
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/post-utils'

const HomePage = (props) => {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
};

export function getStaticProps(){

  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts
    },
    revalidate:60
  }

}

export default HomePage;
