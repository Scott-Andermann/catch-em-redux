import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectMessages } from "../../features/Messages/messagesSlice";
import { selectName } from "../../features/Home/homeSlice";
import { sendMessage } from "../Socket/Socket";
import './Chat.css';

const Chat = () => {
  const user = useSelector(selectName);
  const messages = useSelector(selectMessages);
  const [message, setMessage] = useState('');
  const [isMinimize, setIsMinimize] = useState(false);

  const messageChange = (e) => {
    setMessage(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage({ userName: user, message: message })
    setMessage('')
  }

  // console.log(isMinimize);

  return (
    <div className='chatbox' style={isMinimize ? {height: 41} : {height: 265}}>
      <button className='minimize-button' onClick={() => setIsMinimize(!isMinimize)}>{isMinimize ? 'Maximize' : 'Minimize'}</button>
      { isMinimize ? <></> : 
        <ul className='message-box'>
        {messages.slice(-10).map((message) => (
          <li>{message}</li>
        ))}
      </ul> }
        <form className='message-form' onSubmit={onSubmit}>
          <input type='text' value={message} onChange={messageChange}></input>
          <button type='submit'>Send Message</button>
        </form>
    </div>
  );
};

export default Chat;
