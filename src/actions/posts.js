import api from '../utils/api'
import { objectToFormData } from '../utils/forms'

import { SET_POSTS_LIST, ADD_POST_TO_LIST } from './'

export const setPosts = posts => ({
  type: SET_POSTS_LIST,
  list: posts
})

export const addPostToList = post => ({
  type: ADD_POST_TO_LIST,
  post
})

export const fetchPosts = () => async dispatch => {
  try {
    const { posts } = await api.posts.fetchAll()

    dispatch(setPosts(posts))
  } catch (e) {
    console.log(e)
  }
}

export const createPost = data => async (dispatch, getState) => {
  const { username } = getState().user.profile
  const formData = objectToFormData({ username, ...data })

  try {
    const { post } = await api.posts.create(formData)

    dispatch(addPostToList(post))
  } catch (e) {
    console.log(e)
  }
}
