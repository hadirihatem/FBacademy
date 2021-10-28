import {
  GET_EXPENSE,
  POSTEXPENSE_FAIL,
  
} from "./index.js";
import axios from "axios";
import setToken from "../setToken";

export const postexpense = (data) => (dispatch) => {
  axios
    .post(`http://localhost:5000/expense`, data)
    .then((res) => {
      dispatch(getexpense());
    })
    .catch((err) => {
      dispatch({
        type: POSTEXPENSE_FAIL,
      });
      // console.log(err);
    });
};

//-----------get expense------------

export const getexpense = (id) => (dispatch) => {
  axios.get("http://localhost:5000/expense", id).then((res) => {
    return dispatch({
      type: GET_EXPENSE,
      payload: res.data,
    });
  });
};
