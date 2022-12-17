import axios from "axios";

const API_URL = "/api/users";

//Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    //save the user to local storage and l,ocal storage only holds strings
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data; //userData & token
}


const authService = {
    register
}

export default authService