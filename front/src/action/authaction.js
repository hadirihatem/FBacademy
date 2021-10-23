import
{
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
}from "./index.js"
import axios from "axios";
import setToken from "../setToken";


export const registerUser = (info) => (dispatch) => {

  axios
    .post("http://localhost:5000/user/register", info)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload:  err,
      })
    );
};



export const loadUser = (id) => (dispatch) => {
  setToken()
  axios
    .get(`http://localhost:5000/user/${id}`)
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err
      })
    );
};



export const loginUser = (data) => (dispatch) => {
  axios
    .post("http://localhost:5000/user/login", data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      })
    );
};


export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
