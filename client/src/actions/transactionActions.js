import { GET_TRANSACTIONS, ADD_TRANSACTION, DELETE_TRANSACTION } from "./types";

export const getTransactions = () => {
  return { type: GET_TRANSACTIONS };
};
