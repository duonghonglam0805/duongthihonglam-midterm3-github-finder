import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import Repos
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const data = response.data;
      setUser(data);
    } catch (error) {
      console.error("Error fetching data: ", error.message);
    }
  };

  const getUserRepos = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/:${username}/repos`
      );
      const data = response.data;
      setRepos(data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    getUser(id);
    getUserRepos(id);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    company,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    publib_gitsts,
    hireable,
  } = user;
  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
        <i className="fas fa-times-circle text-danger" />
      )}
    </Fragment>
  );
};

export default User;
