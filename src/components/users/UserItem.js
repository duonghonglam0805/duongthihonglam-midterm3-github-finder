import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const UserItem = (props) => {
  const { login, avatar_url} = props.user; //destructuring
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      README.md 2024-05-17 6 / 22
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
