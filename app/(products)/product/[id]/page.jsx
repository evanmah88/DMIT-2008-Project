import React from "react";

async function getProducts() {
  const res = await fetch(
    "https://dmit2008-15320-default-rtdb.firebaseio.com/mice.json"
  );
  return await res.json();
}

async function ProductDetails({ params }) {
  const id = params.id;
  const products = await getProducts();
  const singleItem = products.find((product) => product.id == id);
  console.log(singleItem);
  return (
    <>
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-start-2 row-span-2 ...">
          {" "}
          <h2>
            {singleItem.Brand} {singleItem.Model}
          </h2>
          <p>Brand: {singleItem.Brand}</p>
          <p>model: {singleItem.Model}</p>
          <p>Price: {singleItem.Price}</p>
          <p>ReleaseDate: {singleItem.ReleaseDate}</p>
        </div>
        <div class="row-end-3 row-span-2 ...">
          {" "}
          <h2>Physical Specs:</h2>
          <p>Type: {singleItem.Type}</p>
          <p>Weight: {singleItem.Weight}</p>
          <p>Dimensions: {singleItem.Dimensions}</p>
          <p>Shape: {singleItem.Shape}</p>
          <p>Buttons: {singleItem.Buttons}</p>
          <p>Color: {singleItem.Color}</p>
        </div>
        <div class="row-start-1 row-end-4 ...">
          <h2 className="bg-rose">Technical Specs:</h2>

          <p>Sensor: {singleItem.Sensor}</p>
          <p>MaximumDPI: {singleItem.MaximumDPI}</p>
          <p>PollingRate: {singleItem.PollingRate}</p>
        </div>
      </div>


    </>
  );
}

export default ProductDetails;
