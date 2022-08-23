import {Link} from 'react-router-dom';
import Menu from '../Menu/Menu';
import styled from 'styled-components';
import './Header.css';


const StyledHeader = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
margin: 5vh 10vw;
`

const NavBar = styled.nav`
display: flex;
width: 25vw;
justify-content: space-between;
align-items: center;
`

const Header = () => {

    return (
        <StyledHeader>
            <h1>Gotta Catch 'em All</h1>
            <NavBar>
                <Link className='nav-link' to='/'>Home </Link> 
                <Link className='nav-link' to='/explore'>Explore </Link>
                <Link className='nav-link' to='/pokedex'>Pokedex </Link>
            </NavBar>
            <Menu />
        </StyledHeader>
    )
}

export default Header