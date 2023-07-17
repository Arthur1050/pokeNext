import { pokemonActionTypes } from "./action-types"

export const selPokemon = (payload:string) => ({
    type: pokemonActionTypes.SELECTED,
    payload
})