import React from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { required, length } from 'redux-form-validators'

import { Input, InputGroup, CheckInput } from '../../components'

import { login } from '../../actions/user'

let Home = ({
  handleSubmit, termsCheckbox, className, login,
}) => {
  return (
    <div className="display-flex mt">
      <img
        src="https://placehold.it/200x200"
        alt=""
        className='flex-3'
      />
      <form
        onSubmit={handleSubmit(login)}
        className='flex-2 ml'
      >
        <InputGroup>
          <Field
            full
            label="Your name"
            name="username"
            component={Input}
            type="text"
            validate={[required()]}
          />
          <Field
            full
            label="Password"
            name="password"
            component={Input}
            type="password"
            validate={[required(), length({ min: 8 })]}
          />
          <Field
            type="checkbox"
            name="termsCheckbox"
            component={CheckInput}
          >
            I agree to Terms & conditions
          </Field>
        </InputGroup>

        <button disabled={!termsCheckbox}>
          Continue
        </button>
      </form>
    </div>
  )
}

Home = connect(state => {
  const termsCheckbox = formValueSelector('signup')(state, 'termsCheckbox')
  return {
    termsCheckbox,
  }
}, {
  login
})(Home)

Home = reduxForm({
  form: 'signup',
})(Home)

export default Home
