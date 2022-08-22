import React, { useState } from "react";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';

const ArrowDiv = styled.div`
position: relative;
left: 0;
top: 50vh;
height: 80px;
width: 20px;
background-color: gray;
`

const MenuBody = styled.div`
position: relative;
left: 0;
top: 0;
height: 100%;
width: 400px;
background-color: gray;
`

const MenuList = styled.ul`
list-style: none;
width: 100%;
height: 100%;
`

const ListElement = styled.li`
color: white;
font-weight: bold;
font-size: 18px;
`

const Menu = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            display: 'flex'
        }}>
            <AnimatePresence>
                {/* This is the motion component for the menu */}
                {visible && <motion.div
                    className='menu-body'
                    key='menu-slide'
                    initial={{ x: '-400px' }}
                    animate={{ x: 0 }}
                    exit={{ x: '-400px' }}
                    transition={{ type: 'tween' }}>
                    <MenuList>
                        <ListElement><a href='/'>Home</a></ListElement>
                        <ListElement><a href='/explore'>Explore</a></ListElement>
                        <ListElement><a href='/pokedex'>Pokedex</a></ListElement>
                    </MenuList>
                    <svg
                        style={{height: '40px'}}
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 122.88 122.88"
                    >
                        <path onClick={() => setVisible(false)}
                            d="M6 6a20.53 20.53 0 0129 0l26.5 26.49L87.93 6a20.54 20.54 0 0129 0 20.53 20.53 0 010 29L90.41 61.44l26.49 26.49a20.54 20.54 0 010 29 20.54 20.54 0 01-29 0L61.44 90.41 35 116.9a20.54 20.54 0 01-29 0 20.54 20.54 0 010-29l26.47-26.46L6 34.94A20.53 20.53 0 016 6z"
                            className="cls-1"
                        ></path>
                    </svg>
                </motion.div>}
                {/* This is the motion component to open the menu */}
                {!visible && 
                <motion.div className='arrow' onClick={() => setVisible(true)}
                    key='menu-selector'
                    initial={{ width: 0 }}
                    animate={{ width: '40px' }}
                    exit={{ width: 0, transition: { delay: 0 } }}
                    transition={{ delay: 0.3 }}
                >
                    <svg
                        style={{ height: '40px', width: 'auto' }}
                        xmlns="http://www.w3.org/2000/svg"
                        x="0"
                        y="0"
                        version="1.1"
                        viewBox="0 0 330 330"
                        xmlSpace="preserve"
                    >
                        <path d="M250.606 154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213.001-5.857 5.858-5.857 15.355.001 21.213l139.393 139.39L79.393 304.394c-5.857 5.858-5.857 15.355.001 21.213C82.322 328.536 86.161 330 90 330s7.678-1.464 10.607-4.394l149.999-150.004a14.996 14.996 0 000-21.213z"></path>
                    </svg>
                </motion.div>}
            </AnimatePresence>

        </div>
    )
}

export default Menu;