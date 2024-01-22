import React, { useEffect, useContext } from 'react';

import { useState } from 'react';

import { Context } from '../store/appContext';
import profilePicture from '../../img/profile-picture.jpg';

const Home = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getAllProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
  
  const latestProducts = store.products.slice(0, 4);

  if (loading) {
    return <p>Cargando productos...</p>;
  }
  
  return (
    <div className='w-[90%] m-auto'>
      <h2 className='my-3'>Últimas Publicaciones</h2>
      <div className='card-container w-full flex justify-between flex-wrap'>
        {latestProducts.map((product) => (
          <div className='card' key={product.id}>
            <img className='w-full h-full object-cover' src={profilePicture} alt='' />
            <div className='p-3 flex-col gap-3'>
              <div className='flex items-center gap-2'>
                <span className='badge'>fontaneriao</span>
                <span className='badge'>Electricidad</span>
              </div>

              <h2 className='product-title' title='Best Headphone'>
                {product.name}
              </h2>

              <div>
                <span className='text-sm'>{product.description}</span>
                <div className='flex items-center gap-2 mt-1'>
                  <span className='text-sm line opacity-50'>A Coruña</span>
                  <span className='discount-percent'>A 20km de ti</span>
                </div>
              </div>
              <span className='flex items-center mt-1'>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>
                <span>⭐️</span>

                <span className='text-xs ml-2 text-gray-500'>50 comentarios</span>
              </span>

              <div className='mt-3 flex gap-2'>
                <button className='button-primary'>Contactar</button>

                <button className='button-icon'>
                  <span className='opacity-50'>♥️</span>
                </button>
                <button className='button-icon'>
                  <span className='opacity-50'>👁️</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
