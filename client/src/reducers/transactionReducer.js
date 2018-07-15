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
    default:
      return state;
  }
};
