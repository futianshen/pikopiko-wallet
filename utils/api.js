import axios from 'axios';

const apiUrl = 'http://34.125.25.175:8000/';

export const createUser = async (data) => {
  //data {username, password}
  return await axios.post(apiUrl + "users", data)
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

export const getUser = async (username) => {
  console.log("getuser")
  return await axios.get(apiUrl + "username/" + username)
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

export const getPets = async (userId) => {
  return await axios.get(apiUrl + "pets", {user_id: userId})
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
}

export const createPet = async () => {
  const data = {
    name: "Sol pet legendary bonk",
    exp: 0,
    species: "dog"
  }
  return await axios.post(apiUrl + "pets", data)
    .then((response) => {
      console.log(response.data);
      return response;
    })
    .catch((error) => {
        console.error('Error:', error.message);
    });
}