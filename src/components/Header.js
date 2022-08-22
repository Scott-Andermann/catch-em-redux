import { useState } from 'react';
import {Link} from 'react-router-dom';
import Menu from './Menu/Menu';

const Header = () => {

    return (
        <header>
            <h1>Gotta Catch 'em All</h1>
            <nav>
                <Link to='/'>Home </Link> 
                <Link to='/explore'>Explore </Link>
                <Link to='/pokedex'>Pokedex </Link>
            </nav>
            <Menu />
        </header>
    )
}

export default Header