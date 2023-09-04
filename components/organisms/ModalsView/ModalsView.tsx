'use client'
import { useSelector } from "react-redux"
import { AnyAction } from "redux"
import ModalPokeDetails from "../ModalPokeDetails/ModalPokeDetails"
import ModalSearch from "../ModalSearch/ModalSearch"

export default function ModalsView() {
    const {
        pokemonView,
        searchView
    } = useSelector((rootReducer:AnyAction) => rootReducer.modalReducer)

    if (pokemonView) return <ModalPokeDetails />;
    if (searchView) return <ModalSearch />;
    return <></>
}