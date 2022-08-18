import React from 'react';

const PokedexSearch = ({searchTerm, setSearchTerm}) => {

    
    const onChange = (e) => setSearchTerm(e.target.value);

    const onClick = (e) => {
        e.preventDefault();
        console.log('searching for', searchTerm);
    }

    return (
        <div>
            <input placeholder="search for pokemon" value={searchTerm} onChange={onChange}></input>
            <button type='button' onClick={onClick}>Search</button>
        </div>
    )
}

export default PokedexSearch;