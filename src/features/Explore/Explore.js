import { useState, useEffect } from "react";
import {
  addCaught,
  addSeen,
  selectSeen,
  selectCaught,
} from "../Pokedex/pokedexSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectName } from "../Home/homeSlice";
import { sendCaughtNotification } from "../../components/Socket/Socket";

const Explore = () => {
  const dispatch = useDispatch();
  const pokedexCurr = useSelector(selectSeen);
  const pokemonCaught = useSelector(selectCaught);
  const user = useSelector(selectName);
  const [pokemon, setPokemon] = useState({});
  const [alreadyCaught, setAlreadyCaught] = useState(false);
  const [pokeId, setPokeId] = useState(Math.ceil(Math.random() * 151));
  const [tries, setTries] = useState(0);

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
    const response = await fetch(url);
    const result = await response.json();
    // console.log(pokeId);
    // console.log(result);
    setPokemon(result);
    setPokeId(Math.ceil(Math.random() * 151));
  };

  const onClickSearch = () => {
    fetchPokemon();
  };

  const catchPokemon = () => {
    const catchValue = Math.random();
    if (catchValue > 0.5) {
      dispatch(
        addCaught({
          id: pokemon.id,
          name: pokemon.name,
          src: pokemon.sprites.front_default,
          stats: [
            { name: "hp", stat: pokemon.stats[0].base_stat },
            { name: "attack", stat: pokemon.stats[1].base_stat },
            { name: "defense", stat: pokemon.stats[2].base_stat },
            { name: "special attack", stat: pokemon.stats[3].base_stat },
            { name: "special defense", stat: pokemon.stats[4].base_stat },
            { name: "speed", stat: pokemon.stats[5].base_stat },
          ],
        })
      );
      sendCaughtNotification({
        user: user,
        name: pokemon.name,
      });
      alert(`Congratulations you caught ${pokemon.name}`);
      setAlreadyCaught(true);
      setTries(0);
    } else if (tries > 1) {
      alert(`Oh no! ${pokemon.name} escaped!`);
      setPokemon({});
      setTries(0);
    } else {
      alert(`Oh no! ${pokemon.name} broke out of the Pokeball!`);
      setTries((count) => count + 1);
    }
  };

  useEffect(() => {
    // has the pokemon been caught yet?
    if (pokemonCaught.some((element) => element.name === pokemon.name))
      setAlreadyCaught(true);
    else setAlreadyCaught(false);

    // has the pokemon been seen yet? if so display a message, if not, add to array of seen pokemon
    if (pokemon.name && !pokedexCurr.includes(pokemon.name)) {
      dispatch(addSeen(pokemon.name));
    }
  }, [pokemon, dispatch, pokedexCurr, pokemonCaught]);

  return (
    <div>
      <h2>Explore</h2>
      <h4>So far you have seen {pokedexCurr.length} Pokemon</h4>
      <button type="button" onClick={onClickSearch}>
        Search for Pokemon!
      </button>
      {Object.keys(pokemon).length !== 0 && (
        <div>
          <h3>{pokemon.name}</h3>
          <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
          <br></br>
          <button onClick={catchPokemon} disabled={alreadyCaught}>
            Try to Catch {pokemon.name}
          </button>
        </div>
      )}
    </div>
  );
};

export default Explore;
