import React, { useState } from "react";
import ModalCreateRoom from "./Modals/ModalCreateRoom";
import useContacts from "../hooks/useContacts";
import Contact from "./Contact";

const Contacts = ({ selectedContact, setSelectedContact }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, contacts } = useContacts();
  console.log("contacts ", contacts);

  const openCreateRoomModal = () => setIsModalOpen(true);

  return (
    <div className="flex-1 mb-24 p-4 bg-white m-4 rounded-md flex flex-col">
      <div className="flex mb-4 justify-between">
        <div className="text-lg font-bold">Contacts</div>
        <button
          className="p-2 border border-gray-200 rounded-md text-sm"
          onClick={openCreateRoomModal}
        >
          + Create Room
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact: any) => (
          <Contact
            key={contact.userID}
            {...contact}
            setSelectedContact={setSelectedContact}
          />
        ))}
      </div>
      {isModalOpen && <ModalCreateRoom setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Contacts;
