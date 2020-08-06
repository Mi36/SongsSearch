import { FETCH_API, FIELD_CHANGE, LOADING, ERROR } from "../actions/types";

const INITIAL_STATE = {
  field: "",
  songs: [],
  loading: false,
  error: null,
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return { ...state, field: action.payload, songs: [], error: null };
    case FETCH_API: {
      return { ...state, songs: action.payload, field: "", loading: false };
    }
    case LOADING: {
      return { ...state, error: null, loading: true };
    }
    case ERROR: {
      return { ...state, loading: false, songs: [], error: action.payload };
    }

    default:
      return state;
  }
};
