import React from 'react'
import { connect } from 'react-redux'

import { PostCard } from '../../../components'

import './List.css'

let PostsList = ({posts = []}) => {
  return (
    <div className="PostsList display-flex">
      {posts.map(post => (
        <PostCard key={post.id} className='flex-1' {...post} />
      ))}
    </div>
  )
}

PostsList = connect(state => {
  return {
    posts: [
      {
        "id": "5b2c23f9df172f00146b1b201",
        "image": "http://warsawjs-21-api.herokuapp.com/static/instgr.png",
        "title": "My first UI project!",
        "owner": "bibixx",
        "date": 1529619449520,
        "commentsCount": 2
      },
      {
        "id": "5b2c23f9df172f00146b1b1220",
        "image": "http://warsawjs-21-api.herokuapp.com/static/instgr.png",
        "title": "My first UI project 2!",
        "owner": "bibixx",
        "date": 1529619449520,
        "commentsCount": 2
      },
      {
        "id": "5b2c23f9df172f0011246b1b20",
        "image": "http://warsawjs-21-api.herokuapp.com/static/instgr.png",
        "title": "My first UI project 3!",
        "owner": "bibixx",
        "date": 1529619449520,
        "commentsCount": 2
      },
      {
        "id": "5b2c23f9df172f0120146b1b20",
        "image": "http://warsawjs-21-api.herokuapp.com/static/instgr.png",
        "title": "My first UI project 4!",
        "owner": "bibixx",
        "date": 1529619449520,
        "commentsCount": 2
      }
    ],
  }
})(PostsList)

export default PostsList
