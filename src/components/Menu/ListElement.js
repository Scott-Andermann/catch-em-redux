import styled from "styled-components";
import {motion, AnimatePresence} from 'framer-motion';
import {Link} from 'react-router-dom';
import { arrow } from "../../resources/svgart";

const Element = styled.div`
display: flex;
flex-direction: column;
align-items: left;
color: white;
font-weight: bold;
font-size: 18px;
line-height: 2rem;
`


const ListElement = ({showMore, setShowMore, moreElements, linkTo, heading}) => {

    return (
        <Element>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '20px' }} onClick={() => setShowMore(curr => !curr)}>
                    {arrow({ height: '18px', width: 'auto', transform: showMore ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' })}
                </div>
                <Link to={linkTo}>{heading}</Link>
            </div>
            <AnimatePresence>
                {showMore && <motion.ul
                    key='menu-drop'
                    initial={{ lineHeight: 0, opacity: 0 }}
                    animate={{ lineHeight: '2rem', opacity: 1 }}
                    exit={{ height: 0, opacity: 0, transition: { height: { delay: 0.5 } } }}
                >
                    {showMore && moreElements.map(element => <motion.li>{element}</motion.li>)}
                </motion.ul>}
            </AnimatePresence>
        </Element>
    )
}

export default ListElement;