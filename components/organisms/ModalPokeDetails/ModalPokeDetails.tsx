'use client'

import ModalLeftRight from "@/components/atoms/modalLeftRight/ModalLeftRight";
import rootReducer from "@/redux/root-reducer";
import { useSelector } from "react-redux";

export default async function ModalPokeDetails() {
    const {viewModal} = useSelector((rootReducer:any) => rootReducer.modalReducer);
    const {selectedId} = useSelector((rootReducer:any) => rootReducer.pokemonReducer);

    const api = 'https://pokeapi.co/api/v2/pokemon/';

    const res = await fetch(`${api + selectedId}`);
    const data = await res.json();

    console.log(data)

    return(
        <ModalLeftRight state={viewModal}>
            <p></p>
        </ModalLeftRight>
    )
}