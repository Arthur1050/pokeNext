import styles from './GridPokemon.module.css'
import { GridPokemonsStyle } from "./styles";
import { getDataPokemon } from "@/app/actions";
import MountCards from "@/components/molecules/MountCards/MountCards";

export interface Pokemons {
    name: string,
    id: number
}

async function getPokemons(limit:number, offset:number):Promise<{results: Pokemons[]}> {
    "use server"
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}?limit=${limit}&offset=${offset}`, {
        cache: "no-cache"
    });

    const data:Promise<{results: Pokemons[]}> = res.json();

    (await data).results.forEach((pokemon, i) => {
        pokemon.id = i + 1;
    })

    return data;
}

export default function GridPokemons() {
    const pokemons = getPokemons(30, 0);

    return(
        <GridPokemonsStyle>
            <MountCards getData={getDataPokemon} pokemons={pokemons} getPokemons={getPokemons}/>
        </GridPokemonsStyle>
    )
}