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

    return res.json();
}

export default async function GridPokemons() {
    /* const [pokemons, setPokemons] = useState((await getPokemons(30, 0)).results) */
    const allPokemons = (await getPokemons(251, 0)).results

    allPokemons.forEach((pokemon, i) => {
        pokemon.id = i + 1;
    })

    const loadMore = async () => {
        console.log('porra')
        /* setPokemons(
            pokemons.concat((await getPokemons(30, (pokemons[pokemons.length - 1].id - 1))).results)
        ) */
    }

    const pokemons = (limit:number) => {
        return allPokemons.slice(0, limit)
    }

    return(
        <GridPokemonsStyle>
            <MountCards getData={getDataPokemon} pokemons={getPokemons}/>
        </GridPokemonsStyle>
    )
}