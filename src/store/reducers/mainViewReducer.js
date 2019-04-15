import * as actionTypes from '../actions/actionTypes';

export const mainViewReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      }

    default:
      return state;
  }
}

export default mainViewReducer;