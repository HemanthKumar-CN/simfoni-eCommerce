import {
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_SEARCH_FILTER_SUCCESS,
  GET_SEARCH_PRODUCTS_FAILURE,
  GET_SEARCH_PRODUCTS_REQUEST,
  GET_SEARCH_PRODUCTS_SUCCESS,
  GET_SEARCH_SORT_SUCCESS,
  GET_SINGLE_PRODUCT,
} from "./actionTypes";

const initState = {
  products: [],
  filterData: [],
  sortData: [],
  search: {
    searchProducts: [],
    isLoading: false,
    isError: false,
  },
  singleProduct: {},
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
          searchProducts: payload,
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
      if (state.filterData.length) {
        console.log(payload, "filterData !!! @reducer");
        return {
          ...state,
          filterData: payload,
        };
      }

      console.log(payload, "filterData !!! @reducer", state.filterData);

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
    case GET_SEARCH_FILTER_SUCCESS: {
      return {
        ...state,
        filterData: payload,
      };
    }
    case GET_SINGLE_PRODUCT: {
      // console.log(payload, "inside reducer!!");
      return {
        ...state,
        singleProduct: payload,
      };
    }

    default:
      return state;
  }
};
