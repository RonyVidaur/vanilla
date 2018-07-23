import axios from "axios";
import { GET_USER_INFO } from "./types";

export const getUserInfo = () => dispatch => {
  axios.get("/api/user/").then(response => {
    dispatch({
      type: GET_USER_INFO,
      payload: response.data
    });
  });
};
