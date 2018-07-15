import { GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

export const getTransactions = () => {
  return { type: GET_TRANSACTIONS };
};

export const deleteTransaction = id => {
  return { type: DELETE_TRANSACTION, payload: id };
};
