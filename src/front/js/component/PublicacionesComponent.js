import React, { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SearchBar from '../layouts/sidebar/searchbar';

import { useState } from 'react';
import { Context } from '../store/appContext';
import profilePicture from '../../img/profile-picture.jpg';

const PublicacionesComponent = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  
  // Verificar si store.productsbyuser es un array antes de mapear
  const products = Array.isArray(store.productsbyuser) ? store.productsbyuser : [];
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getUserProducts();
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);

  if (loading) {
    return <p>Cargando productos...</p>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='w-[90%] m-auto'>
      <h2 className='my-3'>Últimas Publicaciones</h2>
      <div className='card-container w-full flex justify-between flex-wrap'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <Slider {...settings}>
              {product.images_urls && product.images_urls.length > 0 ? (
                product.images_urls.map((image, index) => (
                  <img className='w-full h-[200px] object-cover' src={image} alt='' key={index} />
                ))
              ) : (
                <p>No images available</p>
              )}
            </Slider>
            <div className='p-3 flex-col gap-3'>
              <div className='flex items-center gap-2'>
              </div>

              <h2 className='product-title' title={product.name}>
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

export default PublicacionesComponent;
