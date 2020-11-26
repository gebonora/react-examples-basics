import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //Cambiamos el nombre del export para expresividad
import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
});
