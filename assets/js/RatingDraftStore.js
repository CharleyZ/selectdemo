import {ReduceStore} from 'flux/utils';
import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';
import Draft from './Draft';


class RatingDraftStore extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return "";
  }

  reduce(state, action) {
    switch (action.type) {

      case ActionTypes.EDIT_RATING:

        return action.text;

      default:
        return state;
    }
  }
}

export default new RatingDraftStore();