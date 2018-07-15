import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTIONS_LOADING
} from "./types";

export const getTransactions = () => {
  return { type: GET_TRANSACTIONS };
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
