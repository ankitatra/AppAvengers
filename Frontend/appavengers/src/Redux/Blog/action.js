import {
    ADD_NOTES_FAILURE,
    ADD_NOTES_REQUEST,
    ADD_NOTES_SUCCESS,
    GET_DATA_FAILURE,
    GET_DATA_REQ,
    GET_DATA_SUCCESS,
  } from "./actionTypes";

 
  import axios from "axios";
  export const ActionPostNotesRequest = () => {
    return { type: ADD_NOTES_REQUEST };
  };
  
  export const ActionPostNotesSuccess = () => {
    return { type: ADD_NOTES_SUCCESS };
  };
  
  export const ActionPostNotesFailure = () => {
    return { type: ADD_NOTES_FAILURE };
  };
  
  export const AddNotes = (value, token) => (dispatch) => {
  
    dispatch(ActionPostNotesRequest());
  
    axios({
      method: "post",
      url: "http://localhost:8000/blog/add",
      data: value,
      headers: {
        Authorization: `${token}`,
      },
    })
      .then((res) => {
        console.log(res);
        dispatch(ActionPostNotesSuccess(res.data));
      })
      .catch((err) => dispatch(ActionPostNotesFailure()));
  };


 
  
  export const action_get_Data = (token) => (dispatch) => {
    dispatch({ type: GET_DATA_REQ });
    fetch(`http://localhost:8000/blog/${localStorage.getItem("userid")}`, {
      headers: {
        "Content-Type":"application/json",
        Authorization: `${token}`,
      },
    })
      .then((res) => {
       
       
        return res.json();
       
      })
     
      .then((res) => {
        
        dispatch({ type: GET_DATA_SUCCESS, payload: res });
       
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_FAILURE });
        console.log(err);
      });
  };