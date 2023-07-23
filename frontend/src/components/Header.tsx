import React, { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  return (
    <header className="flex justify-evenly bg-blue-400 p-4">
      <input
        type="text"
        placeholder="Search"
        className="bg-white w-1/2 rounded-lg p-2"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
    </header>
  );
};

export default Header;
