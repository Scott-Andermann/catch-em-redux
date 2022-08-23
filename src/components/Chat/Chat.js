import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectMessages } from "../../features/Messages/messagesSlice";
import { selectName } from "../../features/Home/homeSlice";
import { sendMessage } from "../Socket/Socket";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import './Chat.css';

const Wrapper = styled.div`
position: fixed;
bottom: 0;
left: 0;
width: 400px;
background-color: #f2f2f2;`

const ButtonBar = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 50px;
border-bottom: 1px solid black;
padding: 3px;
`

const Bar = styled.div`
width: 35px;
height: 5px;
background-color: black;
margin: 6px 0;
transition-delay: 0.4s;
transition: 0.4s;
pointer-events: none;`

const Chat = () => {
  const user = useSelector(selectName);
  const messages = useSelector(selectMessages);
  const [message, setMessage] = useState('');
  const [isMinimize, setIsMinimize] = useState(true);

  const messageChange = (e) => {
    setMessage(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    sendMessage({ userName: user, message: message })
    setMessage('')
  }

  const minimizeAnim = (e) => {
    console.log(e)
    e.target.classList.toggle('change')
    setIsMinimize(!isMinimize);
  }

  return (

      <Wrapper className='chatbox'>
        <ButtonBar>
          <h3>Messages</h3>
          <div className='button-container' onClick={minimizeAnim}>
            <Bar className='bar1'></Bar>
            <Bar className='bar2'></Bar>
            <Bar className='bar3'></Bar>
          </div>
        </ButtonBar>
        <AnimatePresence>
        {isMinimize ? <></> :
          <motion.div
            key='chatbox-slide-up'
            initial={{ height: 0 }}
            animate={{ height: '265px' }}
            exit={{ height: 0, visibility: 'hidden' }}>
            <ul className='message-box'>
              {messages.map((message) => (
                <li style={{overflowAnchor: 'none'}}>{message}</li>
              ))}
              <li style={{overflowAnchor: 'auto', height: '1px'}}></li>
            </ul>
            <form className='message-form' onSubmit={onSubmit}>
              <input type='text' value={message} onChange={messageChange}></input>
              <button type='submit'>Send</button>
            </form>
          </motion.div>}
          </AnimatePresence>
        {/* <AnimatePresence>
        {isMinimize &&
          <motion.div
          initial={{opacity: 0, x: -100}}
          animate={{opacity: 1, x: 0}}
          exit={{opacity: 0, x: -100}}>
            test123
          </motion.div>}
      </AnimatePresence> */}
      </Wrapper>

  );
};

export default Chat;
