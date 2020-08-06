import { FETCH_API, FIELD_CHANGE } from "../actions/types";

const INITIAL_STATE = {
  field: "",
  songs: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return { ...state, field: action.payload };
    case FETCH_API: {
      return { ...state, songs: action.payload };
    }

    default:
      return state;
  }
};
