import axios from "axios";
import { useState,useEffect } from "react";
import User from "./components/users/User";
import "./App.css";
import Navbar from "./components/layout/NavBar";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Use the 'axios' library to make a GET request to the GitHub API endpoint
        const response = await axios.get("https://api.github.com/users");
        setUsers(response.data);
        // Log the fetched data to the console
        console.log("GitHub Users:", response.data);
      } catch (error) {
        // Log an error message if there's an issue fetching data
        console.error("Error fetching data:", error);
      }
    };
    // Call the 'fetchData' function when the component mounts
    fetchData();
  }, []); // The empty dependency array ensures that 'useEffect' runs only once when the component mounts
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>Hello from React</h1>
      </div>
      <User users={users} />
    </div>
  );
}
export default App;
