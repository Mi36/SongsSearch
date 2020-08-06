import { FIELD_CHANGE, FETCH_API } from "./types";
import axios from "axios";

export const fieldChange = (text) => {
  return {
    type: FIELD_CHANGE,
    payload: text,
  };
};

export const fetchApi = (field) => {
  return (dispatch) => {
    axios
      .get(`https://itunes.apple.com/search?term=${field}`)
      .then((res) => {
        dispatch({ type: FETCH_API, payload: res.data.results });
      })
      .catch((e) => {
        console.log("errors", e);
      });
  };
};
