import { countReducer } from "./counterReducer";

import { combineReducers, createStore, legacy_createStore } from "redux";
import { loadState, saveState } from "./localStorageFunc";
import { useDispatch } from "react-redux";

const rootReducer = combineReducers({ counter: countReducer });

export const store = createStore(rootReducer, loadState());

store.subscribe(() => {
  saveState({...store.getState(),counter:{...store.getState().counter,loading:0}});
});

export type RootReducerType = ReturnType<typeof rootReducer>;
