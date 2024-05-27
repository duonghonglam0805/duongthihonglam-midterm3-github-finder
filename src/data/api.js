
import axios from 'axios'   
  const fetchDataApi = async () => {
  try {
    // Use the 'axios' library to make a GET request to the GitHub API endpoint
    const response = await axios.get("https://api.github.com/users");
    return (response.data); 
    console.log("GitHub Users:", response.data);
  } catch (error) {
    // Log an error message if there's an issue fetching data
    console.error("Error fetching data:", error);
  }
  };
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
  const getUserReposApi = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      return (response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
export {getUsers, getUserApi, getUserReposApi, fetchDataApi}