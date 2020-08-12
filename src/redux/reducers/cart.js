const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'ADD_TO_CART_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'ADD_TO_CART_FULFILLED':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        data: action.payload.data.data,
      };
    default:
      return state;
  }
};

export default cart;
