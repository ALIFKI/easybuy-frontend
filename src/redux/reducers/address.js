const initialState = {
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const address = (state = initialState, action) => {
  switch (action.type) {
    case 'MY_ADDRESS_LIST_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'MY_ADDRESS_LIST_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'MY_ADDRESS_LIST_FULFILLED':
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

export default address;
