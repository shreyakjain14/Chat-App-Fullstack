import { useEffect, useState } from "react";
import { DOMAIN } from "../utils/constants";
import { useSelector } from "react-redux";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]: any = useState(null);
  const userID = useSelector((store: any) => store.user.userID);

  useEffect(() => {
    const fetchContacts = async () => {
      console.log("inside fetchContacts");
      try {
        const res = await fetch(DOMAIN + "contacts/" + userID);
        const json = await res.json();
        if (!json.success) {
          setError(json.error);
        } else {
          setContacts(json.contacts);
        }
      } catch (err) {
        console.error("error ", err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, [userID]);

  return { isLoading, contacts };
};

export default useContacts;
