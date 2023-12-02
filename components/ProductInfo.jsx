import React from 'react';
const ProductInfo = ({ id, brand, price, model, sensor, buttons, color, illumination, type, ergonomic,connectivity }) => {
  return (
    <div className="product-card bg-white shadow-md rounded-md p-4 m-2">
      <div>
        <h3 className="text-lg text-black font-semibold">
          {brand} {model}
        </h3>
        <p className="text-gray-600">Price: ${price}</p>
        <p className="text-gray-600">Sensor: {sensor}</p>
        <p className="text-gray-600">Amounts of buttons: {buttons}</p>
        <p className="text-gray-600">id: {id}</p>
        <p className="text-gray-600">color: {color}</p>
        <p className="text-gray-600">Sensor: {illumination}</p>
        <p className="text-gray-600">type: {type}</p>
        <p className="text-gray-600">ergonomic: {ergonomic}</p>
        <p className="text-gray-600">brand: {brand}</p>
        <p className="text-gray-600">model: {model}</p>
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">connectivity: {connectivity}</p>
      
      </div>
    </div>
  );
};

export default ProductInfo;
