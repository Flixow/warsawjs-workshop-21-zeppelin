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

Post = connect(state => {
  return {
    post: {
      "id": "5b2c23f9df172f00146b1b201",
      "image": "http://warsawjs-21-api.herokuapp.com/static/instgr.png",
      "title": "My first UI project!",
      "owner": "bibixx",
      "date": 1529619449520,
      "commentsCount": 2
    },
  }
})(Post)

export default Post
