import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {

  editID(text) {
    Dispatcher.dispatch({
      type: ActionTypes.EDIT_ID,
       text,
    });
  },

    editRating(text) {
    Dispatcher.dispatch({
      type: ActionTypes.EDIT_RATING,
       text,
    });
  },

    editTitle(text) {
    Dispatcher.dispatch({
      type: ActionTypes.EDIT_TITLE,
       text,
    });
  },
};
export default Actions;
