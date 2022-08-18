import React from "react";
import { useSelector } from "react-redux";
import { selectMessages } from "../features/Messages/messagesSlice";

const Chat = () => {
  const messages = useSelector(selectMessages);
  console.log(messages);
  return (
    <ul>
      {messages.slice(-10).map((message) => (
        <li>{message}</li>
      ))}
    </ul>
  );
};

export default Chat;
