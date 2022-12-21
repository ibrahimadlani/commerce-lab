import { commerce } from './lib/commerce';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [products, setProducts] = useState([]);


  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)
  if (products.length) {
    return (
      <>
        <h1>Commerce Lab</h1>
        
        <p>Commerce : { JSON.stringify(products[0]) }</p>
      </>
    );
  }else{
    return(
      <p>loading ...</p>
    )
  }
  
}
