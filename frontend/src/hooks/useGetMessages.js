import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = React.useState(false);
  const selectedConversation = useSelector(
    (state) => state.selectedConversation
  );
  const messages = useSelector((state) => state.message.messages);
  const dispatch = useDispatch();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/message/${selectedConversation?._id}`);
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        dispatch(setMessages(data));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) {
      getMessages();
    }
  }, [selectedConversation?._id]);

  return { loading, messages };
};

export default useGetMessages;
