import Image from "next/image";
import { CardPokemonDiv } from "./styles";
import { useDispatch } from "react-redux"
import { openModal } from "@/redux/modal/actions";
import { MouseEvent} from "react";
import { selPokemon } from "@/redux/pokemon/actions";

interface CardPokemon {
    pokemon: {
        name: string,
        id: number
    }
}
export default function CardPokemon({pokemon} : CardPokemon) {
    const dispatch = useDispatch();

    const viewPokemonDetails = () => {
        dispatch(openModal());
        dispatch(selPokemon(pokemon.id.toString()))
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