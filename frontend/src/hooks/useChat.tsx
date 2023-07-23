import { useEffect, useState } from "react";

const useChat = (contactId: number) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return { isLoading, messages };
};

export default useChat;
