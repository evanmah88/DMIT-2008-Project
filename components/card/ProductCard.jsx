import React from 'react';
import Link from 'next/link';
import { BuyNow } from '../BuyNowForm';

const ProductCard = ({ id, brand, price, model, sensor, buttons }) => {
  return (
    <div className="product-card bg-purple-200 shadow-md rounded-md p-4 m-2">
      <div>
        <h3 className="text-lg text-black font-semibold">
          {brand} {model}
        </h3>
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">Sensor: {sensor}</p>
        <p className="text-gray-600">Amounts of buttons: {buttons}</p>
        <p className="text-gray-600">id: {id}</p>
      
        <Link href={`/product/${id}`} passHref>
          <button className="text-blue-500 border-none bg-transparent" type="button">
            View Details
          </button>
        </Link>
        <BuyNow></BuyNow>
      </div>
    </div>
  );
};

export default ProductCard;
