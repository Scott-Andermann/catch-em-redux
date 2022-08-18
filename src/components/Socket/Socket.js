import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { addMessage } from "../../features/Messages/messagesSlice";
import { useDispatch } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// const location = useLocation();
const HOST = window.location.origin.replace(/^http/, "wss");
const client = new W3CWebSocket(HOST);
// const client = new W3CWebSocket('ws://localhost:8000');

export const sendData = () => {
  client.send("from client");
};

export const sendCaughtNotification = ({ user, name }) => {
  client.send(`${user} says: I just caught a ${name}`);
};

const Socket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    };
    client.onmessage = (message) => {
      dispatch(addMessage(message.data));
    };
  }, []);

  return <></>;
};

export default Socket;
