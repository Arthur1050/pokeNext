import { modalActionsTypes } from "./action-types"

export const openModalPokemon = () => ({
    type: modalActionsTypes.POKEMON_VIEW,
    payload: true
})

export const closeModalPokemon = () => ({
    type: modalActionsTypes.POKEMON_VIEW,
    payload: false
}
)
export const openModalSearch = () => ({
    type: modalActionsTypes.SEARCH,
    payload: true
})

export const closeModalSearch = () => ({
    type: modalActionsTypes.SEARCH,
    payload: false
})