import axios from 'axios'
const API = 'https://65c67e3be5b94dfca2e19b59.mockapi.io/technical-task/users'

const getUsers = () => axios(API).then(({ data }) => data);

const addNewUser = (item) => axios.post(API, item, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(({ data }) => data)
  .catch(error => {
    console.log(error);
    throw error;
  });

const updateUserLikes = (id, likes) => axios.put(`${API}/${id}`, likes, {
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(({ data }) => data)
  .catch(error => {
    console.log(error);
    throw error;
  });

const deleteUser = (id) => axios.delete(`${API}/${id}`).then(({ data }) => data)

export { getUsers, deleteUser, updateUserLikes, addNewUser }

