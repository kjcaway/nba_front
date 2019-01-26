import * as types from "../actions/ActionTypes";
import update from "react-addons-update";

const initialState = {
  post: {
    status: "INIT",
    error: -1,
    message: ''
  },
  view: {
    status: "INIT",
    data: []
  }
};

export default function SearchReducer(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch (action.type) {
    case types.PLAYER_SEARCH:
      return update(state, {
        post: {
          status: { $set: "WAITING" },
          error: { $set: -1 }
        },
        view : {
          status: { $set: "LOADING" }
        }
      });
    case types.PLAYER_SEARCH_SUCCESS:
      return update(state, {
        post: {
          status: { $set: "SUCCESS" }
        },
        view: {
          status: { $set: "SUCCESS" },
          data: { $set: action.data }
        }
      });
    case types.PLAYER_SEARCH_FAIL:
      return update(state, {
        post: {
          status: { $set: "FAIL" },
          error: { $set: action.statusCode },
          message: { $set: action.message },
        },
        view : {
          status: { $set: "INIT" }
        }
      });
    default:
      return state;
  }
}
