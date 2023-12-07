import axios from "axios";
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
import { ProductModel } from "../Utils/ProductModel";
import { ProductTypes } from "../Utils/ProductTypes";

const options: any = {
  method: "GET",
  url: "https://wayfair.p.rapidapi.com/products/search",
  params: {
    keyword: "all",
    sortby: "0",
    curpage: "1",
    itemsperpage: "5",
  },
  headers: {
    "X-RapidAPI-Key": "9d4904cfe8mshf94a2ca52460c5cp1951e6jsn73f864063479",
    "X-RapidAPI-Host": "wayfair.p.rapidapi.com",
  },
};

interface SetObjectAction {
  type: string;
  payload: ProductTypes;
}

export const getProducts =
  (keyword: string) => (dispatch: (args: any) => any) => {
    // console.log("action working", process.env.REACT_APP_RAPID_API_KEY);
    options.params.keyword = keyword;
    dispatch({ type: GET_PRODUCTS_REQUEST });
    axios
      .request(options)
      .then((r: any) => {
        // console.log(r.data.response.product_collection, "----");
        console.log(r.data.response, "----");
        const modifiedData = r.data?.response?.product_collection?.map(
          (item: any) =>
            ProductModel(
              item.sku,
              item.image_url,
              item.sale_price,
              item.name,
              item.manufacturer_name,
              0,
              false,
            ),
        );
        console.log(modifiedData, "=======");

        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: modifiedData });
      })
      .catch((err: any) => dispatch({ type: GET_PRODUCTS_FAILURE }));
  };

export const searchProducts =
  (keyword: string, page: string) => (dispatch: (args: any) => any) => {
    // console.log("action working", process.env.REACT_APP_RAPID_API_KEY);
    options.params.keyword = keyword;
    options.params.curpage = page;
    dispatch({ type: GET_SEARCH_PRODUCTS_REQUEST });
    axios
      .request(options)
      .then((r: any) => {
        // console.log(r.data.response.product_collection, "----");
        console.log(r.data.response, "----");
        const modifiedData = r.data?.response?.product_collection?.map(
          (item: any) =>
            ProductModel(
              item.sku,
              item.image_url,
              item.sale_price,
              item.name,
              item.manufacturer_name,
              0,
              false,
            ),
        );
        console.log(modifiedData, "=======");

        dispatch({ type: GET_SEARCH_PRODUCTS_SUCCESS, payload: modifiedData });
      })
      .catch((err: any) => dispatch({ type: GET_SEARCH_PRODUCTS_FAILURE }));
  };

export const sortProducts =
  (data: any, type: any) => (dispatch: (args: any) => any) => {
    dispatch({ type: GET_SEARCH_PRODUCTS_REQUEST });

    console.log("Came here to sort!!!", type);
    if (type == "asc") {
      const modifiedData = data.slice().sort((a: any, b: any) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });

      console.log(modifiedData, "!!! asc");

      dispatch({ type: GET_SEARCH_SORT_SUCCESS, payload: modifiedData });
    } else if (type == "desc") {
      const modifiedData = data.slice().sort((a: any, b: any) => {
        const nameA = a.title.toLowerCase();
        const nameB = b.title.toLowerCase();

        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });

      dispatch({ type: GET_SEARCH_SORT_SUCCESS, payload: modifiedData });
    } else if (type == "priceDesc") {
      const modifiedData = data.slice().sort((a: any, b: any) => {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA > nameB) return -1;
        if (nameA < nameB) return 1;
        return 0;
      });

      dispatch({ type: GET_SEARCH_SORT_SUCCESS, payload: modifiedData });
    } else if (type == "priceAsc") {
      const modifiedData = data.slice().sort((a: any, b: any) => {
        const nameA = a.price;
        const nameB = b.price;

        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });

      dispatch({ type: GET_SEARCH_SORT_SUCCESS, payload: modifiedData });
    }
  };

export const filterProducts =
  (data: any, max: any, min: any) => (dispatch: (args: any) => any) => {
    const filterdData = data.filter((e: any) => {
      if (e.price >= min && e.price <= max) {
        return e;
      }
    });

    dispatch({ type: GET_SEARCH_FILTER_SUCCESS, payload: filterdData });
  };

export const setSingleProduct = (product: any): SetObjectAction => ({
  type: GET_SINGLE_PRODUCT,
  payload: product,
});
