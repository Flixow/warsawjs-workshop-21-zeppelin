class Net {
  constructor() {
    this.BASE_URL = process.env.API_BASE_URL || 'https://warsawjs-21-api.herokuapp.com'
  }

  get = ({ url }) => {
    return fetch(`${this.BASE_URL}/${url}/`)
      .then(res => res.json())
      .catch(error => error)
  }

  post = ({ url, data = {} }) => {
    const preprocessedData = data instanceof FormData ? data : JSON.stringify(data)
    return fetch(`${this.BASE_URL}/${url}/`, {
      method: 'POST',
      body: preprocessedData,
    })
    .then(res => res.json())
    .catch(error => error)
  }

  mock = ({ data }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data)
      }, 1500)
    })
  }
}

export default new Net()
