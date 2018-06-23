import React, { PureComponent } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import List from './List'
import Post from './Post'

import { fetchPosts } from '../../actions/posts'

class Posts extends PureComponent {
  componentWillMount() {
    this.props.fetchPosts()
  }

  render() {
    const { match } = this.props

    return (
      <Switch>
        <Route exact path={`${match.url}`} component={List} />
        <Route exact path={`${match.url}/:postId`} component={Post} />

        <Redirect to="/404"/>
      </Switch>
    )
  }
}

Posts = connect(null, {
  fetchPosts
})(Posts)

export default Posts
