import React from "react";

async function getProducts() {
  const res = await fetch(
    "https://dmit2008-15320-default-rtdb.firebaseio.com/mice.json"
  );
  return await res.json();
}

async function ProductDetails ({params}) {
  const id = params.id
  const products = await getProducts()
 const singleItem = products.find(product => product.id == id)
  console.log(singleItem)
  return (
    <>
    <h1>{singleItem.brand} {singleItem.model}</h1>
    <p>brand: {singleItem.brand}</p>
    <p>model: {singleItem.model}</p>
    <p>Color: {singleItem.color}</p>
    <p>Buttons: {singleItem.buttons}</p>
    <p>Sensor: {singleItem.sensor}</p>

    <p>type: {singleItem.type}</p>
    <p>Ergonomic: {singleItem.ergonomic}</p>




    <p>Illumination: {singleItem.illumination}</p>


    </>
  )
}

export default ProductDetails;
