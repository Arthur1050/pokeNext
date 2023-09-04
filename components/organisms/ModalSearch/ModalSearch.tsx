'use client'

import { ChevronRight, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Pokemons, usePokemons } from "../GridPokemons/usePokemons";
import Image from "next/image";
import TypeBadge from "@/components/atoms/typeBadge/TypeBadge";
import { useDispatch } from "react-redux";
import { closeModalSearch, openModalPokemon } from "@/redux/modal/actions";
import { selPokemon } from "@/redux/pokemon/actions";

const SearchBarStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    animation: fadeToTop forwards .2s;
    position: absolute;
    inset: 0;
    margin: auto;
    width: 50vw;
    height: 80vh;
    @keyframes fadeToTop {
        from {
            transform: translateY(1rem);
            opacity: 0;
        } to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

const ListPokemonsFetched = styled.div`
    overflow: auto;
    animation: fadeToTop forwards .2s;
    &>div {
        display: flex;
        flex-direction: column;
        gap: .5rem;
    }
    .pokemonItem {
        transition: 200ms filter;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 1.5rem;
        background-color: #fff;
        padding: .75rem 1.5rem;
        border-radius: .5rem;
        span {
            color: #252525;
            font-size: 1.25rem;
            line-height: 160%;
            letter-spacing: -.75px;
            &::first-letter {
                text-transform: uppercase;
            }
        }
        &:hover {
            filter: brightness(.9);
        }
    }
    &::-webkit-scrollbar {
        display: none;
    }
    @keyframes fadeToTop {
        from {
            transform: translateY(1rem);
            opacity: 0;
        } to {
            transform: translateY(0);
            opacity: 1;
        }
    }
`

export default function ModalSearch() {
    const [search, setSearch] = useState('');
    const [fetchPokemons, setFetchPokemons] = useState<Pokemons[]>([])

    const {pokemons} = usePokemons()
    const inputText = useRef<HTMLInputElement>(null)
    const dispatch = useDispatch()

    async function showPokemon(id:number) {
        dispatch(closeModalSearch())
        dispatch(openModalPokemon())
        dispatch(selPokemon(id))
    }

    useEffect(() => {
        inputText.current?.focus()
        const timeOut = setTimeout(() => {
            if (search.length) {
                const fetchedPokemons = pokemons.filter((pokemon) => pokemon.name.includes(search.toLowerCase()))
                fetchedPokemons.sort((a, b) => {
                    const nameA = a.name.toLowerCase();
                    const nameB = b.name.toLowerCase();
                    const sortVar = search.toLowerCase()

                    if (nameA.indexOf(sortVar) > nameB.indexOf(sortVar)) return 1
                    if (nameA.indexOf(sortVar) < nameB.indexOf(sortVar)) return -1
                    return 0
                })
                setFetchPokemons(fetchedPokemons)
            }
        }, 750)

        return () => clearInterval(timeOut)
    }, [search])

    return (
        <>
            <SearchBarStyled>
                <div className="bg-white flex items-center px-4 py-3 gap-3 rounded-lg">
                    <Search className="text-zinc-400"/>
                    <input ref={inputText} onChange={ev => setSearch(ev.currentTarget.value)} value={search} className="grow outline-0" type="text" placeholder="Digite o nome ou numero do pokemon..."/>
                </div>
                {
                fetchPokemons.length ?
                    <ListPokemonsFetched>
                        <div>
                        {fetchPokemons.map(pokemon => (
                            <div key={pokemon.id} className="pokemonItem" onClick={() => showPokemon(pokemon.id)}>
                                <Image 
                                    src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
                                    height={'64'}
                                    width={'64'}
                                    alt={pokemon.name + '.png'}
                                />
                                <span>{pokemon.name}</span>
                                <ChevronRight size={32} className="ml-auto text-zinc-400"/>
                            </div>
                        ))}
                        </div>
                    </ListPokemonsFetched>:<></>
                }
            </SearchBarStyled>
        </>
    )
}