import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import Repos from "../repos/Repos";
import { getUserApi, getUserReposApi } from "../../data/api";
const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  const getUser = async (username) => {
    try{
      const user = await getUserApi(username);
      setUser(user);
    }catch(error){
      console.error("Error fetching data: ", error.message);
    }
  };

  const getUserRepos = async (username) =>  {
    try{
      const repos = await getUserReposApi(username);
      setRepos(repos);
    }catch (error){
      console.error("Error fetching data: ", error.message);
    }
  }

  useEffect(() => {
    getUser(id); // call async getUser function
    getUserRepos(id);
  }, [id]);

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
    public_gists,
    hireable,
  } = user;
  // console.log("user:",repos)
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
      <div className="card grid-2">
        <div className="all-center">
            <img 
              src={avatar_url}
              alt={name}
              className="round-img"
              style={{width: "150px"}}
            />
            <h1>{name}</h1>
            <p>{location}</p>
        </div>
      </div>
      <div>
      {bio && (
        <Fragment> 
          <h3>Bio: </h3>
          <p>{bio}</p>
        </Fragment>
      )}
      <a 
        href={html_url}
        className="btn btn-dark my-1"
        target="_blank"
        rel="noopener noreferrer"
      >
      Show Github Profile
      </a>
      <ul>
        <li>
          {login && (
            <Fragment>
              <strong>Username: </strong>
              {login}
            </Fragment>
          )}
        </li>
        <li>
          {company && (
            <Fragment>
              <strong>Company: </strong>
              {company}
            </Fragment>
          )}
        </li>
        <li>
          {blog && (
            <Fragment>
              <strong>Website: </strong>
              <a href={blog} target="_blank" rel="noopener noreferrer">
                {blog}
              </a>
            </Fragment>
          )}
        </li>
      </ul>
      </div>
      <div className="card text-center">
          <div className="badge badge-primary">Followers: {followers}</div>
          <div className="badge badge-success">Following: {following}</div>
          <div className="badge badge-light">Repository: {public_repos}</div>
          <div className="badge badge-dark">Gist: {public_gists}</div>
      </div>
      <div className="grid-repos">
          <Repos repos = {repos} />      
      </div>
    </Fragment>
  );
};

export default User;
