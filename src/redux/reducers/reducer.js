import { combineReducers} from "redux";
import titleReducer from "./titleReducer";
import usersReducer from "./usersReducer";
import calcReducer from "./calcReducer";


export const rootReducer = combineReducers({
  titleReducer,
  usersReducer,
  calcReducer


})