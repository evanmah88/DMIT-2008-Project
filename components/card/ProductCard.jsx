import Link from "next/link";
import React from "react";

const ProductCard = ({ brand, price, model, sensor, buttons }) => {
  return (
    <div className="product-card bg-white shadow-md rounded-md p-4 m-2">

      <div>
        <h3 className="text-lg text-black font-semibold">
          {brand} {model}
        </h3>
        <p className="text-gray-600">Price: ${price}</p>
        <p className="text-gray-600">Sensor: {sensor}</p>
        <p className="text-gray-600">Amounts of buttons: {buttons} </p>
      </div>
    </div>
  );
};

export default ProductCard;
