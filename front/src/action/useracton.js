import
{
  GETUSERS_SUCCESS,
  GETUSERS_FAIL,
  UPDATEUSER_SUCCES,
  UPDATEUSER_FAIL,

}from "./index.js"
import axios from "axios";
import setToken from "../setToken";



export const getUsersList = () => (dispatch) => {
  axios
    .get(`http://localhost:4000/users`)
    .then((res) => {
      dispatch({
        type: GETUSERS_SUCCESS,
        payload: res.data.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GETUSERS_FAIL,
      });
      // console.log(err);
    });
}


export const updateuser=(id,data )=>(dispatch)=>{
  axios.put(`http://localhost:4000/users/${id}`, data)
  .then((res) => {
    dispatch({
      type: UPDATEUSER_SUCCES,
      payload: { user: "User Updated" },
    });
    dispatch(loadUser())
  })
  .catch((err) =>
    dispatch({
      type: UPDATEUSER_FAIL,
      payload: err,
    })
  );
};
