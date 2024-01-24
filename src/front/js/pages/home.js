import React, { useEffect, useContext } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Professions from '../component/professions';
import SearchBar from '../layouts/sidebar/searchbar';

import { useState } from 'react';
import { Context } from '../store/appContext';
import profilePicture from '../../img/profile-picture.jpg';
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
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

  const contactar =  () => {

    navigate("/profile/chat");
}

  return (
    
    <div className='w-[90%] m-auto z-[0]' style={{ backgroundColor: 'white' }}>
      
      <h1 className='m-5 text-center'>Últimas publicaciones</h1>
      <div className='card-container w-full flex justify-between flex-wrap gap-y-16 z-[0]'>
        {store.products.map((product) => (
          <div className='card p-1' key={product.id}>
            <Slider {...settings}>
              {product.images_urls && product.images_urls.length > 0 ? (
                product.images_urls.map((image, index) => (
                  <img className='w-full h-[200px] object-cover' src={image} alt='' key={index} />
                ))
              ) : (
                <img className='w-full h-[200px] object-cover' src={profilePicture} alt='' />
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
                  <span className='text-sm line opacity-50'>{product.seller.email}</span>
                  {/* <span className='discount-percent'>A 20km de ti</span> */}
                </div>
              </div>
              <span className='flex items-center mt-1'>
                {/* <span>⭐️</span> */}
                <span className='text-xs ml-2 text-gray-500'>{product.seller.email}</span>
              </span>

              <div className='mt-3 flex gap-2'>
                 <button className='button-primary bg-[#2A2A2A]' onClick={contactar}>Contactar</button>

                {/* <button className='button-icon'>
                  <span className='opacity-50'>♥️</span>
                </button> */}
                <button className='button-icon'>
                  <span className='opacity-50'>🔍</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5'>
        <Professions />
      </div>
    </div>
  );
};

export default Home;

