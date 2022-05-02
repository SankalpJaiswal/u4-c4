import axios from "axios";
import React, { useEffect } from "react";
import { Select } from "./Styled";
import { Grid } from "./Styled";
import {useSelector, useDispatch } from 'react-redux'
import { getProductsData, getProductsFailure } from "../Redux/actions";
import { ProductCard } from "./ProductCard";

export const Products = () => {

  const {request, failure, products} = useSelector((state) => state.products);

  const dispatch = useDispatch();


  useEffect((payload) => {
    // fetch ProductsData using redux-thunk on every mount
    axios.get(`https://movie-fake-server.herokuapp.com/products`, {
      payload
    }).then(() =>{
      fetch(`https://movie-fake-server.herokuapp.com/products`)
      .then((res) => res.json())
      .then((res) => dispatch(getProductsData(res)))
      .catch((err) => dispatch(getProductsFailure()))
    })

    let data = getProductsData(dispatch);
  }, [dispatch]);
  const handleSort = (e) => {
    // dispatch sort products on change
  };

  // console.log(action.payload)
  return (
    <>
      <h2>Products</h2>
      <Select data-testid="product-sort-order" onChange={handleSort}>
        <option>Sort by--</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </Select>
      <Grid data-testid="products-container">
        {/* iterate data and show each POroduct card */}
          {/* {products.map((item) =>(
            <ProductCard {...item} />
          ))} */}
      </Grid>
    </>
  );
};