import {combineReducers} from "redux";

import modalReducer from "./modal/reducer";
import pokemonReducer from "./pokemon/reducer";

const rootReducer = combineReducers({modalReducer, pokemonReducer})

export default rootReducer;