import React, { useState } from "react";
import Modal_ from "./Modal";

const Product = ({ datum }) => {
  const { image, name, price } = datum;

  return (
    <div className="text-center item p-5">
      <div>
        <img src={image} alt="" className="w-full" />
      </div>
      <div className="flex flex-col">
        <h2>{name}</h2>
        <span className="text-red-500">${price}</span>
        <button className="py-3 px-4 bg-black text-white w-1/3 mx-auto">
          Add to cart
        </button>
      </div>
      <Modal_ datum={datum} />
    </div>
  );
};

export default Product;
