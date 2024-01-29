import React, { useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { useState } from 'react';

const Cartera = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        const wallet_id = localStorage.getItem('wallet_id')
        await actions.walletDetails(wallet_id);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando datos...</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <div>
        <h1>Mi saldo</h1>
        <h1>Saldo: {store.wallet_details.wallet_balance}</h1>
      </div>
      <div>
        <h1>Mis Datos Bancarios</h1>
      </div>
    </div>
  );
};

export default Cartera;
