
import axios from 'axios'   
  // SearchUsers function
  const getUsers = async (text) => {
    console.log(text);
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      return (response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getUserApi = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
     return (response.data);
    } catch (error) {
      console.error("Error fetching data: ", error.message);
    }
  };
export {getUsers, getUserApi}