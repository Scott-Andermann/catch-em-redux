import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Gotta Catch 'em All</h1>
            <nav>
                <Link to='/'>Home </Link> 
                <Link to='/explore'>Explore </Link>
                <Link to='/pokedex'>Pokedex </Link>
            </nav>
        </header>
    )
}

export default Header