import {
  GET_TRANSACTIONS,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
  TRANSACTIONS_LOADING,
  GET_TOTAL_INCOME
} from "../actions/types";
const initialState = {
  transactions: [],
  totalIncome: 0,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
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
    case GET_TOTAL_INCOME:
      return {
        ...state
        // totalIncome: state.transactions
        //   .filter(transaction => {
        //     return transaction.type === 1;
        //   })
        //   .map(element => {
        //     return element.amount || 0;
        //   })
        //   .reduce((acc, currVal) => {
        //     return acc + currVal;
        //   }, 0)
      };
    default:
      return state;
  }
};
