import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { addMessage } from "../../features/Messages/messagesSlice";
import { changeUsers } from "../../features/Users/usersSlice";
import { useDispatch } from "react-redux";
import { w3cwebsocket as W3CWebSocket } from "websocket";

// uncomment for deploy
// const client = new W3CWebSocket('wss://catch-em-server.herokuapp.com');

const client = new W3CWebSocket('ws://localhost:8000');

export const sendData = () => {
  client.send("from client");
};

export const sendCaughtNotification = ({ userName, name }) => {
  client.send(JSON.stringify({type: 'message', userName: userName, message: `I just caught a ${name}`}));
};

export const sendMessage = ({userName, message}) => {
  client.send(JSON.stringify({type: 'message', userName: userName, message: message}))
}

export const sendUserUpdate = ({userName}) => {
  client.send(JSON.stringify({type: 'userUpdate', userName: userName}))
}

const Socket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    client.onopen = () => {
      console.log("websocket client connected");
    };
    client.onmessage = (message) => {
      // console.log(message);
      const parsed = JSON.parse(message.data);
      console.log(parsed);
      if (parsed.type === 'chat') {
        dispatch(addMessage(parsed.post));
      } else if (parsed.type === 'user') {
        dispatch(changeUsers(parsed.users))
      }
    };
  }, [dispatch]);

  return <></>;
};

export default Socket;
