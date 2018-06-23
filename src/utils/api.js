import net from './net';

export default {
  auth: {
    login: ({ username, password }) => net.post({
      url: 'auth',
      data: {
        username,
        password,
      },
    }),
  },
  posts: {
    fetchAll: () => net.get({
      url: 'posts',
    }),
  },
};
