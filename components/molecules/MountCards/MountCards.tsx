"use client"
import { Pokemons } from "@/components/organisms/GridPokemons/GridPokemons"
import CardPokemon from "../CardPokemon"
import { PokeballFill } from "@/public/assets/svg/pokeballFill"
import { Suspense, use, useEffect, useRef, useState } from "react"
import { SkeletonDiv } from "@/components/atoms/SkeletonDiv/SkeletonDiv"
import { GridPokemonsStyle } from "@/components/organisms/GridPokemons/styles"

export default async function MountCards({
    pokemons,
    getPokemons,
    getData
}:{
    pokemons: Promise<{results: Pokemons[]}>,
    getPokemons: (limit:number, offset:number) => Promise<{results: Pokemons[]}>,
    getData: (selectedId:string) => Promise<{}>
}) {
    const loadMoreMsg = useRef<HTMLDivElement>(null)
    const [arrayPokemonsSection, setArrayPokemonsSection] = useState([<></>])

    const loadInitialPokemons = async () => {
        setArrayPokemonsSection([
            <>
                {(await pokemons).results.map((pokemon) => (
                    <CardPokemon key={pokemon.id} pokemon={pokemon} getData={getData}/>
                ))}
            </>
        ])
    }

    useEffect(() => {
        console.log(`renderizou`)
        loadInitialPokemons()
        loadMoreMsg.current && observer?.observe(loadMoreMsg.current)
    }, [])

    const observer = (typeof window !== "undefined") ? new IntersectionObserver(async entries => {
        const [entry] = entries;
        console.log(entry.isIntersecting);

        if (entry.isIntersecting) {
            let morePokemons = await getPokemons(30, arrayPokemonsSection.length*30)
            arrayPokemonsSection.push(
                <>
                    {morePokemons.results.map((pokemon) => (
                        <CardPokemon key={pokemon.id} pokemon={pokemon} getData={getData}/>
                    ))}
                </>
            );
            setArrayPokemonsSection(arrayPokemonsSection);
        }
        /* entry.isIntersecting && setArrayPokemons(currentArray => 
            currentArray.concat(use(getPokemons(30, currentArray.length)).results)
        ); */
    }, {
        threshold: 1.0,
        root: null
    }):null;

    return (
        <>
            {arrayPokemonsSection.map(pokemonSection => (
                    <Suspense fallback={<SKDGridPokemon />}>
                        {pokemonSection}
                    </Suspense>
                )
            )}
            <div ref={loadMoreMsg} className="w-full flex items-center justify-center gap-2 my-3 select-none">
                <p>Carregando mais...</p>
                <div className="animate-spin">
                    <PokeballFill />
                </div>
            </div>
        </>
    )
}

function SKDGridPokemon() {
    const cards = [];
    for(let i = 0; i <= 30; i++) {
      cards.push(
        <SkeletonDiv className='rounded-lg bg-red-700 w-[8rem] h-[11rem] flex-grow'/>
      )
    }
    return(
      <GridPokemonsStyle className=''>
        {cards}
      </GridPokemonsStyle>
    )
  }