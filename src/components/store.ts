import { countReducer } from "./counterReducer";

import { combineReducers, createStore, legacy_createStore } from "redux";




const rootReducer = combineReducers({counter:countReducer})



export const store =createStore(rootReducer)



export type RootReducerType = ReturnType<typeof rootReducer>