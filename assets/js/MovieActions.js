import ActionTypes from './ActionTypes';
import Dispatcher from './Dispatcher';

const Actions = {
  showAll() {
    Dispatcher.dispatch({
      type: ActionTypes.SHOW_ALL,
    });
  },

  showDetail(id) {
    Dispatcher.dispatch({
      type: ActionTypes.SHOW_DETAIL,
      id,
    });
  },

  Update(id,title,rating) {
    Dispatcher.dispatch({
      type: ActionTypes.UPDATE,
       id,
       title,
       rating,
    });
  },

  Register(title,rating) {
    Dispatcher.dispatch({
      type: ActionTypes.REGISTER,
       title,
       rating,
    });
  },
};
export default Actions;
