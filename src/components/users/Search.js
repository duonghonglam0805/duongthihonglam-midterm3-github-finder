import axios from "axios";
import React, { useState } from "react";
import Users from "./Users";

const Search = () => {
  const [text, setText] = useState(""); // dùng để lưu và hiển thị dữ liệu user input
  const [users, setUsers] = useState([]); // mảng để hiển thị và lưu trữ dữ liệu user trả về từ API
  // SearchUsers function
  const searchUsers = async (text) => {
    try {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${text}`
      );
      setUsers(response.data.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const clearUsers = () => {
    setUsers([]);
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
