import { GET_EXPENSE, POSTEXPENSE_FAIL,GETEXPENSES_SUCCESS } from "../action/index";
let initialState = {
  expenses: [],
};

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {

    case GETEXPENSES_SUCCESS:
      return {
        ...state,
        expenses: action.payload,
      };

    default:
      return state;
  }
};

export default expenseReducer;
