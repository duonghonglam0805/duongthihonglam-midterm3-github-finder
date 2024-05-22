import React from "react";
import RepoItem from "./RepoItem";
const Repos = (props) => {
  const {repos} = props;
  return (
    <>
        {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} /> 
      ))}
    </>
  )
};

export default Repos;
