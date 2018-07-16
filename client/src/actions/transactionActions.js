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

export const deleteTransaction = id => dispatch => {
  axios.delete(`/api/accounts/1/transactions/${id}`).then(response => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  });
};

export const addTransaction = transaction => dispatch => {
  axios.post("/api/accounts/1/transactions", transaction).then(response => {
    dispatch({ type: ADD_TRANSACTION, payload: response.data });
  });
};

export const setItemsLoading = () => {
  return { type: TRANSACTIONS_LOADING };
};
