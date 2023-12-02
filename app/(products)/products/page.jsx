import React from "react";
import ProductCard from "@/components/card/ProductCard";

async function getProducts() {
  const res = await fetch(
    "https://dmit2008-15320-default-rtdb.firebaseio.com/mice.json"
  );
  return await res.json();
}

async function ProductsPage({ children }) {
  const products = await getProducts();
  console.log(products);

  const renderedProducts = products.map((product) => (
    <ProductCard
      key={product.id} 
      id={product.id}   
      Brand={product.Brand}
      Model={product.Model}
      Price={product.Price}
      Sensor={product.Sensor}
      Buttons={product.Buttons}

    />
  ));
  

  return (
    <div>
      <h1>Products</h1>

      {renderedProducts}
    </div>
  );
}

export default ProductsPage;
