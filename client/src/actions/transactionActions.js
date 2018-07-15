import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTIONS_LOADING
} from "./types";
import axios from "axios";

export const getTransactions = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/accounts/1/").then(response => {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: response.data.transactions
    });
  });
};

export const deleteTransaction = id => {
  return { type: DELETE_TRANSACTION, payload: id };
};

export const addTransaction = transaction => {
  return { type: ADD_TRANSACTION, payload: transaction };
};

export const setItemsLoading = () => {
  return { type: TRANSACTIONS_LOADING };
};
