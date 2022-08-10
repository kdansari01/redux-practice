import { createStore } from "redux";
import { RootReducer } from "./combine-reducer";

export const store = createStore(RootReducer);
