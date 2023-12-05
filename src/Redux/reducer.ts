import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SEARCH_PRODUCTS_FAILURE,
  GET_SEARCH_PRODUCTS_REQUEST,
  GET_SEARCH_PRODUCTS_SUCCESS,
  GET_SEARCH_SORT_SUCCESS,
} from "./actionTypes";

const initState = {
  products: [],
  search: {
    searchProducts: [],
    isLoading: false,
    isError: false,
  },
  isLoading: false,
  isError: false,
};

export const AppReducer = (state = initState, { type, payload }: any) => {
  switch (type) {
    case GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    }
    case GET_PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    case GET_SEARCH_PRODUCTS_REQUEST: {
      return {
        ...state,
        search: {
          ...state.search,
          isLoading: true,
          isError: false,
        },
      };
    }
    case GET_SEARCH_PRODUCTS_SUCCESS: {
      return {
        ...state,
        search: {
          ...state.search,
          searchProducts: [...state.search.searchProducts, ...payload],
          isLoading: false,
          isError: false,
        },
      };
    }
    case GET_SEARCH_PRODUCTS_FAILURE: {
      return {
        ...state,
        search: {
          ...state.search,
          isLoading: false,
          isError: true,
        },
      };
    }
    case GET_SEARCH_SORT_SUCCESS: {
      return {
        ...state,
        search: {
          ...state.search,
          searchProducts: payload,
          isLoading: false,
          isError: false,
        },
      };
    }

    default:
      return state;
  }
};
