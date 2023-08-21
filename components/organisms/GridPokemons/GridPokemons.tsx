'use client'
import { Suspense, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { GridPokemonsStyle } from "./styles";
import { PokeballFill } from '@/public/assets/svg/pokeballFill';
import { SkeletonDiv } from '@/components/atoms/SkeletonDiv/SkeletonDiv';
import CardPokemon from '@/components/molecules/CardPokemon';

export interface Pokemons {
    name: string,
    id: number
}

async function getPokemons(limit:number, offset:number):Promise<{results: Pokemons[]}> {
    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api}?limit=${limit}&offset=${offset}`, {
        cache: "no-cache"
    });

    const data:Promise<{results: Pokemons[]}> = res.json();

    (await data).results.forEach((pokemon, i) => {
        pokemon.id = i + 1 + offset;
    })

    return data;
}

export default function GridPokemons({getData}:{
    getData: (selectedId:string) => Promise<{}>
}) {
    const loadMoreMsg = useRef<HTMLDivElement>(null)
    const gridContainer = useRef<HTMLDivElement>(null)
    const [pokemonsBlock, setPokemonsBlock] = useState<Array<JSX.Element[]>>([])

    async function loadPokemons() {
        const currentPokemonsCount = gridContainer.current ? gridContainer.current.childElementCount-1 : 0;
        const data = await getPokemons(30, currentPokemonsCount);
         
        // Monta um bloco de pokemons
        const blockResult = data.results.map(pokemon => <CardPokemon key={pokemon.id} pokemon={pokemon} getData={getData}/>)

        setPokemonsBlock(prevPokemonsBlock => [...prevPokemonsBlock , blockResult])
    }

    const observerFunction = (entries:IntersectionObserverEntry[]) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
            loadPokemons()
        }
    }

    useEffect(() => {
        const observer = (typeof window !== "undefined") ? new IntersectionObserver(observerFunction, {
            threshold: 1.0,
            root: null
        }):null;
    
        loadMoreMsg.current && observer?.observe(loadMoreMsg.current)
        
        return () => {
            observer?.disconnect()
        }
    })

    return(
        <GridPokemonsStyle ref={gridContainer}>
            <>
                {pokemonsBlock.map((block, i) => (
                        <Suspense key={i} fallback={<SKDGridPokemon />}>
                            {block}
                        </Suspense>
                    )
                )}
                <div ref={loadMoreMsg} className="w-full flex items-center justify-center gap-2 my-3 select-none">
                    <p>Carregando mais...</p>
                    <div onClick={() => loadPokemons()} className="animate-spin">
                        <PokeballFill />
                    </div>
                </div>
            </>
        </GridPokemonsStyle>
    )
}

function SKDGridPokemon() {
    const cards = [];
    for(let i = 0; i <= 30; i++) {
      cards.push(
        <SkeletonDiv key={i} className='rounded-lg bg-red-700 w-[8rem] h-[11rem] flex-grow'/>
      )
    }
    return(
      <GridPokemonsStyle className=''>
        {cards}
      </GridPokemonsStyle>
    )
  }