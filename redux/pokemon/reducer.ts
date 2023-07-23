import { AnyAction } from "redux";
import { pokemonActionTypes } from "./action-types";

const initialState = {
    selected: null,
}

export default function pokemonReducer(state = initialState, action: AnyAction) {
    switch(action.type) {
        case pokemonActionTypes.SELECTED :
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
}