import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,

} from "../action/index";
let initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  error: null,
};

const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
        isAuth:true,
      };
    case LOGIN_SUCCESS:

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem('isAuth',true)
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        error: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
    case REGISTER_FAIL:

      localStorage.removeItem("token");
      localStorage.removeItem('isAuth')
      return {
        ...state,

        isAuth: false,
        error: action.payload,
      };
      case LOGOUT:
        localStorage.removeItem("token");

        return {
          isAuth:false,
          error:null,
          user:null
        }

    default:
      return state;
  }
};
export default AuthReducer;
