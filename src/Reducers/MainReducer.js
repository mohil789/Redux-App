import loginReducer from "./LoginReducer";
import { combineReducers } from "redux";
import OrderReducer from "./OrderReducer";

const rootReducers = combineReducers({
    login: loginReducer,
    order: OrderReducer,
});
export default rootReducers;