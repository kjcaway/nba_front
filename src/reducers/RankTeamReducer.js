import * as types from "../actions/ActionTypes";
import update from "react-addons-update";

const initialState = {
  view: {
    status: "INIT",
    data: {}
  }
};

export default function RankTeamReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch (action.type) {
    case types.RANK_TEAM:
      return update(state, {
        view : {
          status: { $set: "LOADING" }
        }
      });
    case types.RANK_TEAM_SUCCESS:
      return update(state, {
        view: {
          status: { $set: "SUCCESS" },
          data: { $set: action.data }
        }
      });
    case types.RANK_TEAM_FAIL:
      return update(state, {
        view : {
          status: { $set: "INIT" }
        }
      });
    default:
      return state;
  }
}
