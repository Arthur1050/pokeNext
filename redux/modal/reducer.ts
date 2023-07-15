import { AnyAction } from "redux";
import { modalActionsTypes } from "./action-types";

const initialState = {
    viewModal: false
}

export default function modalReducer(state = initialState, action:AnyAction) {
    switch(action.type) {
        case modalActionsTypes.VIEW:
            return {
                ...state, 
                viewModal: action.payload
            };
        default:
            return state;
    }
}