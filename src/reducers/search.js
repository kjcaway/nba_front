import * as types from '../actions/ActionTypes';
import update from 'react-addons-update';

const initialState = {
    list: {
        status: 'INIT',
        data: []
    }
}

export default function search(state, action){
    if(typeof state === "undefined"){
        state = initialState;
    }

    switch(action.type) {
        case types.PLAYER_SEARCH:
            return update(state, {
                list:{
                    status: {$set:'WAITING'}
                }
            });
        case types.PLAYER_SEARCH_SUCCESS:
            return update(state, {
                list:{
                    status:{$set:'SUCCESS'},
                    data: {$set:action.data}
                }
            });
        case types.PLAYER_SEARCH_FAIL:
            return update(state, {
                list:{
                    status:{$set :'FAIL'}
                }
            });
        default:
            return state;
    }
}