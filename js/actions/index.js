import { ADD_ARTICLE } from "../constants/action-types";
import { ADD_POSITION } from "../constants/action-types";
import { SET_LOCATION } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };

export function addPosition(payload){
    return {type: ADD_POSITION, payload}
}

export function setLocation(payload){
    return { type: SET_LOCATION, payload}
}