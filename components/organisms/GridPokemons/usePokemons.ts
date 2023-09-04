import { useCallback, useEffect, useState } from "react";

export interface Pokemons {
    name: string,
    id: number,
    url: string
}

export const usePokemons = (limit=649, offset=0) => {
    const [pokemons, setPokemons] = useState<Pokemons[]>([])

    const handleFetchPokemons = useCallback(async () => {
        const api = 'https://pokeapi.co/api/v2/pokemon/';
    
        const res = await fetch(`${api}?limit=${limit>649?649:limit}&offset=${offset}`, {
            cache: "no-cache"
        });
    
        const data = (await res.json()) as {results: Pokemons[]};
    
        data.results.forEach((pokemon, i) => {
            pokemon.id = i + 1 + offset;
        })

        setPokemons(data.results)
    }, [])

    useEffect(() => {
        handleFetchPokemons()
    }, [handleFetchPokemons])

    return {
        pokemons
    };
}