import axios from "axios";
import { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/layout/NavBar";
import User from "./components/users/User";
import Search from "./components/users/Search";
import NotFound from "./components/NotFound";
import { fetchDataApi } from "./data/api";
function App() {
  const [users, setUsers] = useState([]);
    const fetchData = async () => {
      try {
        const users = await fetchDataApi();
        setUsers(users);
        console.log("GitHub Users:", users);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    
useEffect(() => {
  fetchData()
},[]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1>GitHub Users Data</h1>
          <Switch>
            <Route exact path= "/" component={Search} />
            <Route exact path= "/about" component={About} />
            {/* Add this line to specify the routing */}
            <Route exact path="/user/:id" component={User} />
            <Route exact path= "/*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
