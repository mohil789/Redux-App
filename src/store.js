import rootReducers from "./Reducers/MainReducer";
import { createStore } from "redux";

const store = createStore(rootReducers);

export default store;