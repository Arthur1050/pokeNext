"use client"
import { Pokemons } from "@/components/organisms/GridPokemons/GridPokemons"
import CardPokemon from "../CardPokemon"
import { PokeballFill } from "@/public/assets/svg/pokeballFill"
import { useEffect, useRef, useState } from "react"

export default async function MountCards({
    pokemons,
    getData
}:{
    pokemons: (limit:number, offset:number) => Promise<{results: Pokemons[]}>,
    getData: (selectedId:string) => Promise<{}>
}) {
    const loadMoreMsg = useRef<HTMLDivElement>(null)
    const [limit, setLimit] = useState(30);

    const pokemonsArray = await pokemons(limit, 0);

    const observer = (typeof window !== "undefined") ? new IntersectionObserver(entries => {
        const [entry] = entries;
        console.log(entry.isIntersecting);
        /* entry.isIntersecting && loadMore(); */
    }, {
        threshold: 1.0,
        root: null
    }):null;

    useEffect(() => {
        console.log(`renderizou`)
        loadMoreMsg.current && observer?.observe(loadMoreMsg.current)
    }, [])
    return (
        <>
            {pokemonsArray?.results.map((pokemon) => (
                <CardPokemon key={pokemon.id} pokemon={pokemon} getData={getData}/>
            ))}
            <div ref={loadMoreMsg} className="w-full flex items-center justify-center gap-2 my-3 select-none">
                <p>Carregando mais...</p>
                <div className="animate-spin">
                    <PokeballFill />
                </div>
            </div>
        </>
    )
}