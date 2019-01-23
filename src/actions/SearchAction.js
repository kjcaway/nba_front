import {
  PLAYER_SEARCH,
  PLAYER_SEARCH_SUCCESS,
  PLAYER_SEARCH_FAIL
} from "./ActionTypes";
import axios from "axios";

export function searchPostRequest(keyword) {
  return dispatch => {
    dispatch(searchPost());

    return axios
      .post("/api/nba/player/", { name: keyword })
      .then(res => {
        console.log("Search action success. res===" + JSON.stringify(res.data));
        dispatch(searchPostSuccess(res));
      })
      .catch(err => {
        console.log("Search action fail. err == " + err);
        dispatch(searchPostFail(err));
      });
  };
}

export function searchPost() {
  return {
    type: PLAYER_SEARCH
  };
}

export function searchPostSuccess(res) {
  return {
    type: PLAYER_SEARCH_SUCCESS,
    data: res.data
  };
}

export function searchPostFail(err) {
  return {
    type: PLAYER_SEARCH_FAIL,
    error: err,
    message: err
  };
}
