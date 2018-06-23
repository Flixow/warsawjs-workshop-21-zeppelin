### warsawjs-workshop-21-zeppelin

## Table of Contents

- [Setup](#setup)
  - [redux](#redux)
  - [hot reload](#hot-reload)
- [Login Layout](#login-layout)
- [Login action](#login-aciton)
- [Setup react-router](#reat-router)


## Setup
### Redux

`yarn add redux react-redux redux-thunk`
* Create `store.js`
* Create `user` reducer with initial state
* Use `Provider` in `App.js`

### Hot reload
* Setup hot reloading in `index.js` file

### Login layout
* Create `Input`, `CheckInput` and `InputGroup` components
* `yarn add redux-form`
* Create `Home` page with login form
* Add: `username`, `password` and `termsCheckbox` fields connected with `redux-form`
* `yarn add redux-form-validators`
* Combine redux-form reducer
* Add validators to the fields

### Login action
* Create `net.js` and `api.js` files for API connection
* Create redux action for login user
* Set username in user profile and local storage

### react-router
* `yarn add react-router-dom react-router-redux@next history` [Docs](https://github.com/reacttraining/react-router/tree/master/packages/react-router-redux)
* Combine router reducer
* Apply `routerMiddleware`
* Wrap whole application in `ConnectedRouter` wrapper
* Specify '/' route with redirect for logged in user
