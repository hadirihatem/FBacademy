import {
  GET_EXPENSE,
  POSTEXPENSE_FAIL,
  GETEXPENSES_FAIL,
  GETEXPENSES_SUCCESS,


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



//-------------get expenses list-------------

export const getexpenses=()=>(dispatch)=>{
axios.get("http://localhost:5000/expenses").then((res) => {
  dispatch({
    type: GETEXPENSES_SUCCESS,
    payload: res.data.data,
  });
})
.catch((err) => {
  dispatch({
    type: GETEXPENSES_FAIL,
  });
  // console.log(err);
});
}
