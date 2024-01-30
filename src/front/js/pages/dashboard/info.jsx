import React, { useEffect, useContext } from "react";
import { Context } from '../../store/appContext';
import { useParams } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

export function Info() {
  const { store, actions } = useContext(Context);
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      console.log("Producto ID obtenido:", productId);
      actions.getProductById(productId);
    }
  }, []);

  if (!store.productDetails) {
    return <Spinner />;
  }

  const { name, description } = store.productDetails;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Info;