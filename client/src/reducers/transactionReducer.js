import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTIONS_LOADING
} from "../actions/types";
const initialState = {
  transactions: [],
  totalIncome: 0,
  loading: false,
  accountId: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload.transactions,
        accountId: action.payload.id,
        loading: false
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(transaction => {
          return transaction.id !== action.payload;
        })
      };
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [{ ...action.payload }, ...state.transactions]
      };
    case TRANSACTIONS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
