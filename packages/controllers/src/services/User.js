import *  as axios from 'axios';

class User {
  static posts () {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
  }
}

export { User }
