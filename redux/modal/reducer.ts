import { AnyAction } from "redux";
import { modalActionsTypes } from "./action-types";

const initialState = {}

export default function modalReducer(state = initialState, action:AnyAction) {
    switch(action.type) {
        case modalActionsTypes.POKEMON_VIEW:
            return {
                ...state, 
                pokemonView: action.payload
            };
        case modalActionsTypes.SEARCH:
            return {
                ...state,
                searchView: action.payload
            }
        default:
            return state;
    }
}