import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { addMessage } from "../../features/Messages/messagesSlice";
import { useDispatch } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// uncomment for deploy
const client = new W3CWebSocket('wss://catch-em-server.herokuapp.com');

// const client = new W3CWebSocket('ws://localhost:8000');

export const sendData = () => {
  client.send("from client");
};

export const sendCaughtNotification = ({ userName, name }) => {
  client.send(JSON.stringify({userName: userName, message: `I just caught a ${name}`}));
};

export const sendMessage = ({userName, message}) => {
  client.send(JSON.stringify({userName: userName, message: message}))
}

const Socket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    };
    client.onmessage = (message) => {
      dispatch(addMessage(message.data));
    };
  }, [dispatch]);

  return <></>;
};

export default Socket;
