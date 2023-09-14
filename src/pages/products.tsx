"use client";

import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../components/redux/store";
import { fetchProducts } from "../components/redux/slices/productSlices";
import ProductCard from "../components/productCard";

const Products = () => {
  const userRef = useRef(false);
  const { products, loading } = useSelector(
    (state: RootState) => state.products
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(fetchProducts());
    }

    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  const productArray = Object.values(products);
  return (
    <div>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4    ">
          {productArray.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
