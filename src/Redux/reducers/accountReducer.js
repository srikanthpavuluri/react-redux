import { accountConstants } from "../../constants";

const initialState = {
  requestingAmount: false
};

export default (state = initialState, action) => {
    // requestingAmount: false
    // { type: accountConstants.ACCOUNT_DETAILS_FETCH }
  switch (action.type) {
    case accountConstants.ACCOUNT_DETAILS_FETCH: 
      return {
        ...state,
        requestingAmount: true
      };
    case accountConstants.ACCOUNT_DETAILS_FETCHED:
      return {
        ...state,
        amount: action.amount, // 125000
        requestingAmount: false
      };
    case accountConstants.ACCOUNT_DETAILS_ALTERED:
      return {
        ...state,
        amount: action.amount
      };
    default:
      return state;
  }
};
