import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import './Menu.css';
import ListElement from "./ListElement";
import { arrow, exitButton } from "../../resources/svgart";

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
padding-top: 15vh;
`

const BreakDiv = styled.div`
flex-basis: 100%;
height: 0
`

const moreElements = ['one', 'two', 'three', 'four']

const Menu = () => {
    const [visible, setVisible] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [showMoreExplore, setShowMoreExplore] = useState(false);

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
                        <ListElement showMore={showMore} setShowMore={setShowMore} moreElements={moreElements} linkTo='/' heading='Home' />
                        <ListElement showMore={showMoreExplore} setShowMore={setShowMoreExplore} moreElements={moreElements} linkTo='/explore' heading='Explore' />
                        {/* <ListElement>
                            <div style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '20px' }} onClick={() => setElemVis(curr => !curr)}>
                                    {arrow({ height: '18px', width: 'auto', transform: elemVis ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' })}
                                </div>
                                <Link to='/'>Home</Link>
                            </div>
                            <AnimatePresence>
                                {elemVis && <motion.ul
                                    key='menu-drop'
                                    initial={{ lineHeight: 0, opacity: 0 }}
                                    animate={{ lineHeight: '2rem', opacity: 1 }}
                                    exit={{ lineHeight: 0, opacity: 0, transition: { lineHeight: { delay: 0.5 } } }}
                                >
                                    {elemVis && moreElements.map(element => <motion.li>{element}</motion.li>)}
                                </motion.ul>}
                            </AnimatePresence>
                        </ListElement> */}
                        {/* <ListElement><Link to='/explore'>Explore</Link></ListElement>
                        <ListElement><Link to='/pokedex'>Pokedex</Link></ListElement> */}
                    </MenuList>
                    <div style={{ height: '40px' }} onClick={() => setVisible(false)}>
                        {exitButton({ height: '40px', cursor: 'pointer' })}
                    </div>
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1"
                        viewBox="0 0 122.88 122.88"
                    >
                        <path onClick={() => setVisible(false)}
                            d="M6 6a20.53 20.53 0 0129 0l26.5 26.49L87.93 6a20.54 20.54 0 0129 0 20.53 20.53 0 010 29L90.41 61.44l26.49 26.49a20.54 20.54 0 010 29 20.54 20.54 0 01-29 0L61.44 90.41 35 116.9a20.54 20.54 0 01-29 0 20.54 20.54 0 010-29l26.47-26.46L6 34.94A20.53 20.53 0 016 6z"
                            className="cls-1"
                        ></path>
                    </svg> */}
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
                        {arrow({ height: '40px', width: 'auto' })}
                    </motion.div>}
            </AnimatePresence>

        </div>
    )
}

export default Menu;