import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 p-4 w-[96%] mx-[2%] rounded shadow-lg bg-white">
      <form className="flex justify-between ">
        <input type="text" placeholder="Type Something..." />
        <button
          type="submit"
          className="mb-4 text-left px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Post -&gt;
        </button>
      </form>
    </footer>
  );
};

export default Footer;
