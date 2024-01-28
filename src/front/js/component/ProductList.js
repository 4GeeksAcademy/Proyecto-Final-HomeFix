import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useParams } from 'react-router-dom';

const ProductList = () => {
    const { store, actions } = useContext(Context);
    const { filteredProducts } = store;
    const { categoryName } = useParams();

    console.log(categoryName);

    useEffect(() => {
        actions.getProductsByCategory(categoryName);
    }, []);

    if (!filteredProducts) {
        return <p>Cargando...</p>;
    }

    return (
        <div>
            {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                    <div key={product.id}>
                        <h2>{product.name}</h2>
                        <p>Descripción: {product.description}</p>
                        <p>Categoría: {product.category}</p>
                        <p>Precio: {product.price}</p>
                        <p>Provincia: {product.province}</p>
                        <p>Email: {product.seller.email}</p>
                    </div>
                ))
            ) : (
                <p>No se encontraron productos para esta categoría.</p>
            )}
        </div>
    );
};

export default ProductList;