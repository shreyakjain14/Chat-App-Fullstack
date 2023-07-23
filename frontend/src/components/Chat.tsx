import React, { useEffect } from "react";
import useChat from "../hooks/useChat";
import io from "socket.io-client";
const socket = io("http://localhost:8000");

const Chat = ({ selectedContact }: any) => {
  const { isLoading, messages } = useChat(selectedContact);

  useEffect(() => {
    socket.on("receive_message", (message) => console.log(message));
  }, [socket]);

  function sendMessage() {
    socket.emit("send_message", "hello world");
  }

  return (
    <div>
      <button onClick={sendMessage}>Send Message</button>{" "}
    </div>
  );
};

export default Chat;
