import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQ,
  LOGIN_SUCC,
  LOGOUT_FAILED,
  LOGOUT_SUCC,
  REGISTER_FAILED,
  REGISTER_REQ,
  REGISTER_RESET,
  REGISTER_SUCC,
  
} from "./actionTypes";

export const loginNow = (data) => async (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  return axios
    .post("https://careful-school-uniform-lamb.cyclic.app/user/login", data)
    .then((res) => {
      dispatch({ type: LOGIN_SUCC, payload: res.data.token });
      console.log("loginnn",res.data.id)
      localStorage.setItem("userid",res.data.id)
      return res.data;
     
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: LOGIN_FAILED });
    });
};

export const registerNow = (data) => (dispatch) => {
  dispatch({ type: REGISTER_REQ });
  axios
    .post("https://careful-school-uniform-lamb.cyclic.app/user/register", data)
    .then((res) => {
      // console.log(res);
      dispatch({ type: REGISTER_SUCC });
    })
    .catch((err) => {
      // console.log(err);
      dispatch({ type: REGISTER_FAILED });
    });
};

export const registerReset = (dispatch) => {
  dispatch({ type: REGISTER_RESET });
};

export const logout=()=>(dispatch)=>{
  dispatch({ type: LOGOUT_SUCC });

  console.log("kdjhghjkjbhg")
}
