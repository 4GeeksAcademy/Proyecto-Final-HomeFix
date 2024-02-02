import React, { useEffect, useContext, useState } from "react";
import logo from '@img/logo.png';
import { Productdetail } from "../../widgets/cards";
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { Context } from '../../store/appContext';



export function Test() {

  const location = useLocation();
  const product_id = location.state.productId;
  const { store, actions } = useContext(Context);

  const [products, setProducts] = useState([]);


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        await actions.getProductById(product_id);
        setProducts(store.productDetails);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (

    <div>
      {products.map((product) => (
        <Productdetail
          key={product.id}
          images_urls={product.images_urls}
          title={product.name}
          product_description={product.description}
          product_price={product.price}
          product_seller={product.seller.email}
          product_seller_id={product.seller.id}
        />
      ))}
    </div>

    // <Productdetail>

    // </Productdetail>

  );
}

export default Test;
