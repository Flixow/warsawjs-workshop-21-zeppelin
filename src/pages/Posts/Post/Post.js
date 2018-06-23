import React from 'react'
import { connect } from 'react-redux'

import { PostCard } from '../../../components'

import './Post.css'

let Post = ({post = {}}) => {
  return (
    <div className="Post">
      <PostCard full {...post} />
    </div>
  )
}

Post = connect(({posts}, props) => ({
  post: posts.list.find(post => post.id === props.match.params.postId),
}))(Post)

export default Post
