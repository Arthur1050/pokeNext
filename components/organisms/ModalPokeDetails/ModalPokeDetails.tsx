'use client'
import { ModalLeftRightDiv } from "@/components/atoms/modalLeftRight/styles";
import Image from "next/image";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

interface Pokemon {
    selected: {
        name: string,
        id: string,
        base_experience: number,
        height: number,
        weight: number
        types: Array<{
            slot: number,
            type: {name: string, url: string}
        }>,
        stats: Array<{
            base_stat: number,
            effort: number,
            stat: {
                name: string,
                url: string
            }
        }>
    }
}

const colorType = (type:string) => {
    switch(type) {
            case 'bug': return '#B9BF04';
            case 'grass': return '#618C03';
            case 'fire': return '#E8740C';
            case 'water': return '#77B9E3';
            case 'psychic': return '#f35182';
            case 'rock': return '#A6948D';
            case 'electric': return '#F2BC21';
            case 'poison': return '#77009C';
            case 'fighting': return '#c93129';
            default: return '#b2b2b2';
        }
}

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
    const {selected}:Pokemon = useSelector((rootReducer:any) => rootReducer.pokemonReducer);
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);
    
    console.log(`selected`)

    return(
        <ModalDetails $type={selected ? selected.types[0].type.name:''} className={viewModal ? 'viewModal' : ''}>
            {selected && (
                <>
                    <div>
                        <div className="divImagePoke">
                            <span className="absolute right-8 text-white top-0 text-[6rem] font-bold opacity-20 select-none">#{selected.id}</span>
                            <Image 
                                /* src={`https://nexus.traction.one/images/pokemon/pokemon/${selected.id}.png`} */
                                src={`https://raw.githubusercontent.com/wellrccity/pokedex-html-js/master/assets/img/pokemons/poke_${selected.id}.gif`}
                                height={'120'}
                                width={'120'}
                                alt={selected.name + '.png'}
                            />
                        </div>
                        <div className="px-4 mt-[3.5rem]">
                            <p className="name">{selected.name}</p>
                            <div className="containerTypes">
                                {selected.types.map(type => (
                                    <span style={{
                                        backgroundColor: colorType(type.type.name)
                                    }}>{type.type.name}</span>
                                ))}
                            </div>
                            <div className="flex text-center mt-4">
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">EXP Base</p>
                                    <p>{selected.base_experience}</p>
                                </div>
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">Altura</p>
                                    <p>{selected.height}</p>
                                </div>
                                <div className="w-[calc(100%/3)]">
                                    <p className="font-semibold">Peso</p>
                                    <p>{selected.weight}</p>
                                </div>
                            </div>
                            <div className="containerStates mt-4">
                                <div className="gap-x-2 gap-y-1 grid grid-cols-[auto_1fr_auto] items-baseline">
                                    {selected.stats.map(stat => (
                                        <>
                                        <span>{stat.base_stat}</span>
                                        <div className="flex-grow h-[4px] bg-zinc-300 rounded">
                                            <div style={{
                                                width: `${(stat.base_stat/255)*100}%`
                                            }} className={`h-full rounded bg-blue-700`}/>
                                        </div>
                                        <span >{stat.stat.name}</span>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </ModalDetails>
    )
}