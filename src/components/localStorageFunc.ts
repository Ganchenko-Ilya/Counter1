import { RootReducerType } from "./store";

export const loadState = () => {
  try {
    const state = localStorage.getItem("app-state");

    if (state) return JSON.parse(state);
    return undefined;
  } catch {}
};

export const saveState = (state: RootReducerType) => {
  try {
    localStorage.setItem("app-state", JSON.stringify(state));
  } catch {}
};
