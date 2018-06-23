import api from '../utils/api'

import { SET_POSTS_LIST } from './'

export const setPosts = posts => ({
  type: SET_POSTS_LIST,
  list: posts
})

export const fetchPosts = () => async dispatch => {
  try {
    const { posts } = await api.posts.fetchAll()

    dispatch(setPosts(posts))
  } catch (e) {
    console.log(e)
  }
}
