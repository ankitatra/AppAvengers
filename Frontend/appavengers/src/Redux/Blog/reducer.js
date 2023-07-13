import {
    GET_DATA_FAILURE,
    GET_DATA_REQ,
    GET_DATA_SUCCESS,
    ADD_NOTES_FAILURE,
    ADD_NOTES_REQUEST,
    ADD_NOTES_SUCCESS,
  } from "./actionTypes";
  
  const initialstate = {
    data: [],
    isLoading: false,
    isError: false,
  };
  
  export const reducer = (state = initialstate, { type, payload }) => {
    switch (type) {
      case GET_DATA_REQ:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
          data: payload,
        };
      case GET_DATA_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
        case ADD_NOTES_REQUEST:
            return {
              ...state,
              isLoading: true,
              isError: false,
            };
          case ADD_NOTES_SUCCESS:
            return {
              ...state,
              isLoading: false,
            };
          case ADD_NOTES_FAILURE:
            return {
              ...state,
              isLoading: false,
              isError: true,
            };
      default:
        return state;
    }
  };