import React, {useContext } from "react";
import Users from "./Users";
import {getUsers } from "../../data/api";
import SearchContext from "../../SearchContext";
const Search = () => {
  const { text, setText, users, setUsers } = useContext(SearchContext);
  const clearUsers = () => {
    setUsers([]);
  };

  // search user function
  const searchUsers = async (text) => {
    try {
        const users = await getUsers(text);
        setUsers(users);
    } catch (error) {
        console.error("Get users fail", error);
    }
};
  // onSubmit function
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter something");
    } else {
      searchUsers(text);
      setText("");
    }
  };
  // onChange function
  const onChange = (e) => {
    setText(e.target.value); // text se duoc thay doi bang gia tri moi user nhap vao
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Search User"
          value={text} // la cai khai bao tren phan useSate
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-success btn-block"
        />
      </form>
      {/* Adding Clear button */}
      {users.length > 0 && (
        <button className="btn btn-danger btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
      <Users
        users={users}
        // users ben phai la du lieu sau khi duoc goi ve boi ham SearchUser
      />
    </div>
  );
};

export default Search;
