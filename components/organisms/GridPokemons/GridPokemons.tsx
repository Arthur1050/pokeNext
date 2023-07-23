import CardPokemon from "@/components/molecules/CardPokemon";
import styles from './GridPokemon.module.css'
import { getDataPokemon } from "@/app/actions";

interface Pokemons {
    name: string,
    id: number
}

export default async function GridPokemons() {
    const maxPokemons = 251;
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}?limit=${maxPokemons}`);
    const data = await res.json();

    const pokemons:Pokemons[] = data.results;

    pokemons.forEach((pokemon, i) => {
        pokemon.id = i + 1;
    })

    return(
        <div className={styles.gridPokemon}>
            {pokemons?.map((pokemon) => (
                <>
                <CardPokemon key={pokemon.id} pokemon={pokemon} getData={getDataPokemon}/>
                </>
            ))}
        </div>
    )
}