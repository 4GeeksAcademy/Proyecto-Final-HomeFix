import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import profilePicture from '../../img/profile-picture.jpg';
import '../styles/LastPublications.css';

const LastPublications = () => {
    const { store } = useContext(Context);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState(new Array(4).fill(false));

    useEffect(() => {
        if (store.products.length > 0) {
            setLoading(false);
        }
    }, [store.products]);

    const toggleFavorite = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
    };

    if (loading) {
        return <p>Cargando productos...</p>;    //Aquí debemos insertar el spinner (loader)
    }

    const latestProducts = store.products.slice(0, 4);
    return (<>
        <div className='w-[90%] m-auto'>
            <h1 className='mt-5 text-center'>Últimas Publicaciones</h1>
            <div className='card-container w-full flex justify-between flex-wrap'>
                {latestProducts.map((product, index) => (
                    <div className='card' key={product.id} style={{ width: '250px', margin: '10px' }}>
                        <img className='w-full h-40 object-cover' src={profilePicture} alt='' />
                        <div className='p-3 flex-col gap-3'>
                            <div className='flex items-center gap-2'>
                                <span className='badge'>fontaneriao</span>
                                <span className='badge'>Electricidad</span>
                            </div>

                            <h2 className='product-title' title='Best Headphone'>
                                {product.name}
                            </h2>

                            <div className='description'>
                                <span className='text-sm'>{product.description}</span>
                            </div>

                            <div className='location-info'>
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
                                <button className='custom-button'>Contactar</button>

                                <button className='button-icon'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        fill={favorites[index] ? 'red' : 'gray'}
                                        className="w-6 h-6 favorite-icon"
                                        onClick={() => toggleFavorite(index)}
                                    >
                                        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                </button>
                                <button className='button-icon'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>)
}

export default LastPublications;