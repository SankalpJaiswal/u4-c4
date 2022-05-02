// use axios for api call
import axios from "axios";
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionTypes";

function getProductsData(payload) {
    return {
        type: GET_DATA_SUCCESS,
        payload
    }
}

function getProductsRequest(){
    return{
        type: GET_DATA_REQUEST
    }
}

function getProductsFailure(){
    return{
        type: GET_DATA_FAILURE
    }
}

const sortProducts = () => {};

const filterProducts = () => {};

export { getProductsData, sortProducts, filterProducts };
export {getProductsRequest, getProductsFailure};
