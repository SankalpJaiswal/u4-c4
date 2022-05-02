import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

const initState = {
  data: [],
  isLoading: false,
  isError: false,
  filterData: [],
  products: [],
};

const reducer = (state = initState, { type, payload }) => {
  switch(type){
    case GET_DATA_SUCCESS:{
      return{
        ...state,
        isLoading: false,
        isError: false,
        products: payload
      }
    }

    case GET_DATA_REQUEST:{
      return{
        ...state,
        isLoading: true,
        isError: false,
        products: []
      }
    }

    case GET_DATA_FAILURE:{
      return{
        ...state,
        isLoading: false,
        isError: true,
        products: []
      }
    }

    default:
      return state
    
  }
};
export { reducer };
