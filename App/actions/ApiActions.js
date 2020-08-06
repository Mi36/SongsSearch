import { FIELD_CHANGE, FETCH_API, ERROR, LOADING } from "./types";
import axios from "axios";

export const fieldChange = (text) => {
  return {
    type: FIELD_CHANGE,
    payload: text,
  };
};

export const loadingData = () => {
  return {
    type: LOADING,
  };
};

export const fetchApi = ({ field }) => {
  return (dispatch) => {
    axios
      .get(`https://itunes.apple.com/search?term=${field}`)
      .then((res) => {
        dispatch({ type: FETCH_API, payload: res.data.results });
        if (res.data.results.length === 0) {
          dispatch({ type: ERROR, payload: "NoSongFount" });
        }
      })
      .catch((e) => {
        dispatch({ type: ERROR, payload: "NetworkIssue" });
      });
  };
};
