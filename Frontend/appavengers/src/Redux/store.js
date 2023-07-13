import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";


import { LoginReducer} from "./User/reducer"

// import { reducer as noteReducer } from "./NotesReducer/reducer";

import { reducer as BlogReducer } from "./Blog/reducer";

const mainReducer = combineReducers({
  
  LoginReducer,
  BlogReducer 
//   Dashboardreducer
});


export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));