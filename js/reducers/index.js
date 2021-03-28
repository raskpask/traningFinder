import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_POSITION } from "../constants/action-types";
import { SET_LOCATION } from "../constants/action-types";

const initialState = {
  articles: [],
  positions: [],
  location:{}
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  } else if (action.type === ADD_POSITION){
    return Object.assign({}, state, {
      positions: state.positions.concat(action.payload)
    });
  } else if (action.type === SET_LOCATION){
    return Object.assign({}, state, {
      location: state.location
    });
  }
  return state;
}

export default rootReducer;{

}