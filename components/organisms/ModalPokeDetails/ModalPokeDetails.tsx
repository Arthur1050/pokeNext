'use client'
import { SkeletonDiv } from "@/components/atoms/SkeletonDiv/SkeletonDiv";
import { ModalLeftRightDiv } from "@/components/atoms/modalLeftRight/styles";
import TypeBadge, { colorType } from "@/components/atoms/typeBadge/TypeBadge";
import { Pokemon, usePokemon } from "@/utils/hooks/usePokemon";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const ModalDetails = styled(ModalLeftRightDiv)<{$type:string}>`
    --primary-color: ${props => colorType(props.$type)};
    color: #262626;
    overflow: hidden;
    .divImagePoke {
        background-color: var(--primary-color);
        height: 13rem;
        position: relative;
        border-radius: 0 0 0 125%;
        img{
            /* width: 35%; */
            /* aspect-ratio: 1/1; */
            /* height: 17rem; */
            width: unset;
            height: unset;
            position: absolute;
            inset: 0;
            margin-inline: auto;
            top: unset;
            transform: translateY(25%);
        }
    }
    .name::first-letter {
        text-transform: uppercase;
    }
    .name {
        font-size: 1.5rem;
        text-align: center;
        font-weight: 700;
        color: #262626;
    }
    .containerTypes {
        color: #fff;
        display: flex;
        gap: .25rem;
        font-size: .825rem;
        justify-content: center;
        &> span {
            padding: 0 .5rem;
            border-radius: .25rem;
        }
    }
`

export default function ModalPokeDetails() {
    const [viewPokemon, setViewPokemon] = useState<Pokemon>()

    const {selected}:{selected:number} = useSelector((rootReducer:any) => rootReducer.pokemonReducer);
    const {pokemonView} = useSelector((rootReducer:any) => rootReducer.modalReducer);

    useEffect(() => {
        (async () => {
            const data = await usePokemon(selected);
            setViewPokemon(data)
        })();
    }, [])

    return(
        <ModalDetails $type={viewPokemon?.types ? viewPokemon.types[0].type.name:''} className={pokemonView ? 'viewModal' : ''}>
            {viewPokemon?.types ? (
                <>
                    <div>
                        <div className="divImagePoke">
                            <span className="absolute right-8 text-white top-0 text-[6rem] font-bold opacity-20 select-none">#{viewPokemon.id}</span>
                            <Image 
                                /* src={`https://nexus.traction.one/images/pokemon/pokemon/${viewPokemon.id}.png`} */
                                src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${viewPokemon.id}.gif`}
                                height={'120'}
                                width={'120'}
                                alt={viewPokemon.name + '.png'}
                            />
                        </div>
                        <div className="px-4 mt-[3.5rem]">
                            <p className="name">{viewPokemon.name}</p>
                            <div className="containerTypes">
                                {viewPokemon.types.map((type, i) => (
                                    <TypeBadge type={type}/>
                                ))}
                            </div>
                            <div className="flex text-center mt-4">
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">EXP Base</p>
                                    <p>{viewPokemon.base_experience}</p>
                                </div>
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">Altura</p>
                                    <p>{viewPokemon.height}</p>
                                </div>
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">Peso</p>
                                    <p>{viewPokemon.weight}</p>
                                </div>
                            </div>
                            <div className="containerStates mt-4">
                                <div className="gap-x-2 gap-y-1 grid grid-cols-[auto_1fr_auto] items-baseline">
                                    {viewPokemon.stats.map(stat => (
                                        <>
                                        <span>{stat.base_stat}</span>
                                        <div className="flex-grow h-[4px] bg-zinc-300 rounded">
                                            <div style={{
                                                width: `${(stat.base_stat/255)*100}%`
                                            }} className={`h-full rounded bg-blue-700`}/>
                                        </div>
                                        <span>{stat.stat.name}</span>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : <div className="flex flex-col items-center mt-8">
                    <SkeletonDiv className="w-[50%] h-[12rem] rounded-lg"/>
                    <SkeletonDiv className="w-[20%] h-[1.5rem] mt-4 rounded-lg"/>
                    <SkeletonDiv className="w-[10%] h-[1.5rem] mt-2 rounded-lg"/>
                    <div className="w-full flex justify-around mt-8">
                        <SkeletonDiv className="w-[20%] h-[3rem] rounded-lg"/>
                        <SkeletonDiv className="w-[20%] h-[3rem] rounded-lg"/>
                        <SkeletonDiv className="w-[20%] h-[3rem] rounded-lg"/>
                    </div>
                    <SkeletonDiv className="w-[90%] mt-8 h-[1.5rem] rounded-lg"/>
                    <SkeletonDiv className="w-[90%] mt-2 h-[1.5rem] rounded-lg"/>
                    <SkeletonDiv className="w-[90%] mt-2 h-[1.5rem] rounded-lg"/>
                    <SkeletonDiv className="w-[90%] mt-2 h-[1.5rem] rounded-lg"/>
                    <SkeletonDiv className="w-[90%] mt-2 h-[1.5rem] rounded-lg"/>
                    <SkeletonDiv className="w-[90%] mt-2 h-[1.5rem] rounded-lg"/>
                </div>}
        </ModalDetails>
    )
}