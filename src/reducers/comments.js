import { SAVE_COMMENT } from '../actions/types';

export default function(state = [], actions){
  switch (actions.type){
    case SAVE_COMMENT:
      return [ ...state, actions.payload ];
    default: return state;
  }
}
