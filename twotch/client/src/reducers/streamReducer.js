import _ from "lodash";
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") }; //el ... en mapKeys es para "aplanarlo" como keys del state"
    //crea un objeto a partir del array (1er arg), poniendo como keys la key del elemento especificada
    // en el segundo arg como string. En este caso tenemos un array de objetos que tienen una key "id"
    // y le creamos una key al objeto con el valor de id, y le asignamos el objeto.
    case DELETE_STREAM:
      return _.omit(state, action.payload); //crea un nuevo objeto omitiendo el segudo arg
    default:
      return state;
  }
};

export default streamReducer;
