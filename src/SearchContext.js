import React, { createContext, useState } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => { // props là children (các component nằm trong SearchProvider sẽ là children)
  const [text, setText] = useState("");
  const [users, setUsers] = useState([]);

  return (
    <SearchContext.Provider value={{ text, setText, users, setUsers }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

