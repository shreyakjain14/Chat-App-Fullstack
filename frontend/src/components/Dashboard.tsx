import React, { useState } from "react";
import Posts from "./Posts";
import Contacts from "./Contacts";
import Chat from "./Chat";
import Header from "./Header";
import Footer from "./Footer";

const Dashboard = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <div className="h-screen w-screen flex flex-col">
      <Header />
      <main className="flex flex-1 bg-gray-100 max-md:flex-col max-md:overflow-auto">
        <Posts />
        <Contacts setSelectedContact={setSelectedContact} />
        {selectedContact !== null && (
          <Chat
            selectedContact={selectedContact}
            setSelectedContact={setSelectedContact}
          />
        )}
        <Chat />
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
