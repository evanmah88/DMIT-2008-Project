import React from 'react';
import Link from 'next/link';
import ProductCard from '../../components/card/ProductCard'


async function getProducts (){
  const res = await fetch('https://dmit2008-15320-default-rtdb.firebaseio.com/mice.json')
  return await res.json()

}




async function ProductsPage ({children}) {
  const products = await getProducts()
  console.log(products)

   // Map through products and render ProductCard for each product
   const renderedProducts = products.map((product) => (
    <ProductCard key={product.id} brand={product.brand} model={product.model} price={product.price} sensor={product.sensor} buttons={product.buttons} />
  ));

  return (
    <div>
      <h1>Products</h1>
      {renderedProducts}
    </div>
  );
  
  }
  



  export default ProductsPage

