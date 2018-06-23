import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import { required } from 'redux-form-validators'

import { Input, InputGroup } from '../../../components'

import { createPost } from '../../../actions/posts'

let NewPost = ({ handleSubmit, createPost, history }) => {
  const handleCreatePost = data => {
    createPost(data).then(() => history.push('/posts'))
  }

  return (
    <form
      onSubmit={handleSubmit(handleCreatePost)}
      className='flex-2 ml'
    >
      <InputGroup>
        <Field
          full
          label="Title"
          name="title"
          component={Input}
          type="text"
          validate={[required()]}
        />
        <Field
          full
          label="Image"
          name="image"
          component={Input}
          type="file"
          validate={[required()]}
        />
      </InputGroup>

      <button>
        Continue
      </button>
    </form>
  )
}

NewPost = connect(null, {
  createPost
})(NewPost)

NewPost = reduxForm({
  form: 'newPost',
})(NewPost)

export default NewPost
