import { pokemonActionTypes } from "./action-types"

export const selPokemon = (payload:{}) => ({
    type: pokemonActionTypes.SELECTED,
    payload
})