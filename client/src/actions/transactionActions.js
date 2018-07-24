import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTIONS_LOADING,
  GET_TOTAL_INCOME
} from "./types";
import axios from "axios";

export const getTransactions = () => dispatch => {
  dispatch(setItemsLoading());
  axios.get("/api/user/account/").then(response => {
    dispatch({
      type: GET_TRANSACTIONS,
      payload: response.data.transactions
    });
  });
};

export const deleteTransaction = id => dispatch => {
  axios.delete(`/api/user/accounts/transactions/${id}`).then(response => {
    dispatch({ type: DELETE_TRANSACTION, payload: id });
  });
};

export const addTransaction = transaction => dispatch => {
  axios.post("/api/user/accounts/transactions", transaction).then(response => {
    dispatch({ type: ADD_TRANSACTION, payload: response.data });
  });
};

export const getTotalIncome = () => dispatch => {
  dispatch({ type: GET_TOTAL_INCOME });
};

export const setItemsLoading = () => {
  return { type: TRANSACTIONS_LOADING };
};
