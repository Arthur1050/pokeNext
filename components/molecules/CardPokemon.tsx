'use client'
import Image from "next/image";
import { CardPokemonDiv } from "./styles";
import { useDispatch } from "react-redux"
import { openModal } from "@/redux/modal/actions";
import { selPokemon } from "@/redux/pokemon/actions";

interface CardPokemon {
    pokemon: {
        name: string,
        id: number
    }
    getData: (selectedId:string) => Promise<{}>
}
export default async function CardPokemon({pokemon, getData} : CardPokemon) {
    const dispatch = useDispatch();

    const viewPokemonDetails = async () => {
        dispatch(openModal());
        const data = await getData(pokemon.id.toString()); 
        dispatch(selPokemon(data))
    }

    return(
        <>
        <CardPokemonDiv key={pokemon.id} onClick={viewPokemonDetails}>
            <Image 
                src={`https://nexus.traction.one/images/pokemon/pokemon/${pokemon.id}.png`}
                height={'120'}
                width={'120'}
                alt={pokemon.name + '.png'}
            />
            <p>{pokemon.name}</p>
        </CardPokemonDiv>
        </>
    )
}