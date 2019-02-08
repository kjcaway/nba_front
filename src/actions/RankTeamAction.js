import {
  RANK_TEAM,
  RANK_TEAM_SUCCESS,
  RANK_TEAM_FAIL
} from "./ActionTypes";
import axios from "axios";

export function getRankRequest(date) {
  return dispatch => {
    dispatch(getRank());

    return axios
      .post("/api/nba/rank", { gameDate: date })
      .then(res => {
        console.log("get Rank action success. res===" + JSON.stringify(res.data));
        dispatch(getRankSuccess(res));
      })
      .catch(err => {
        console.log("get Rank action fail. err == " + err);
        dispatch(getRankFail(err));
      });
  };
}

export function getRank() {
  return {
    type: RANK_TEAM
  };
}

export function getRankSuccess(res) {
  return {
    type: RANK_TEAM_SUCCESS,
    data: res.data
  };
}

export function getRankFail(err) {
  return {
    type: RANK_TEAM_FAIL,
    statusCode: err.response.status,
    message: err.message
  };
}
