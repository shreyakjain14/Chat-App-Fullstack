import React, { useEffect } from "react";

const Contact = ({ name, imgUrl, location, setSelectedContact }: any) => {
  useEffect(() => {}, []);

  return (
    <div className="flex w-full border-b-2 border-b-gray-200 p-2">
      <img src={imgUrl} alt="user" />
      <div>
        <div>{name}</div>
        <div>{location}</div>
      </div>
    </div>
  );
};

export default Contact;
