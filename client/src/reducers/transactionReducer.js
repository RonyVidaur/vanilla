import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION
} from "../actions/types";
const initialState = {
  transactions: [
    { id: 1, title: "shoes", amount: 50, type: "expense" },
    { id: 2, title: "freelance", amount: "200", type: "income" }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return { ...state };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => {
          return transaction.id !== action.payload;
        })
      };
    default:
      return state;
  }
};
