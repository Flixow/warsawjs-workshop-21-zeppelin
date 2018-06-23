import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { PostCard } from '../../../components'

import './List.css'

let PostsList = ({posts = [], match}) => {
  return (
    <div className="PostsList display-flex">
      {posts.map(post => (
        <Link to={`${match.url}/${post.id}`} key={post.id}>
          <PostCard className='flex-1' {...post} />
        </Link>
      ))}
    </div>
  )
}

PostsList = connect(({posts}) => ({
  posts: posts.list
}))(PostsList)

export default PostsList
