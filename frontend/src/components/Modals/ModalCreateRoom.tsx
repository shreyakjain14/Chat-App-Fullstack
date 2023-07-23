import React, { useState } from "react";
import { createPortal } from "react-dom";
import useContacts from "../../hooks/useContacts";
import Contact from "../Contact";

const ModalCreateRoom = ({ setIsModalOpen }: any) => {
  const [searchName, setSearchName] = useState("");
  const { isLoading, contacts } = useContacts();

  const closeModal = () => setIsModalOpen(false);

  return createPortal(
    <div className="absolute top-0 left-0 right-0 bottom-0 w-screen h-screen bg-[rgba(0,0,0,0.7)]">
      <div className="absolute right-0 top-0 bottom-0 h-screen w-1/3 p-4 bg-white">
        <div className="flex justify-between mb-4">
          <h1 className="text-xl font-bold">Create Room</h1>
          <button
            className=" text-white w-8 h-8 rounded-2xl bg-red-500"
            type="button"
            onClick={closeModal}
          >
            X
          </button>
        </div>
        <input
          type="search"
          name="name"
          className="p-2 border border-gray-200 rounded-lg bg-gray-200 w-full"
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <div className="overflow-y-auto">
          {contacts.map((contact: any) => (
            <Contact key={contact.userID} {...contact} />
          ))}
        </div>
      </div>
    </div>,
    document.getElementById("portal") as HTMLElement
  );
};

export default ModalCreateRoom;
