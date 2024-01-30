import React, { useEffect, useContext, useState } from "react";
import { Context } from '../../store/appContext';
import { useParams } from "react-router-dom";
import { Spinner, Card, CardHeader, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { useNavigate } from "react-router-dom";

export function Info() {
  const { store, actions } = useContext(Context);
  const { productId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      actions.getProductById(productId);
    }
  }, []);

  if (!store.productDetails) {
    return <Spinner />;
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const { name, description, price, email, images_urls, province, seller, categories } = store.productDetails;

  return (
    <Card className="mt-5 w-11/12">
      <CardHeader color="blue-gray" className="relative">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          {images_urls && images_urls.map((url, index) => (
            <img key={index} src={url} alt={`Imagen del producto ${index + 1}`} className="w-full h-full object-cover" />
          ))}
        </Carousel>
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-4">
          Más datos del profesional
        </Typography>
        <Typography color="gray" className="mt-1">
          <span className="font-bold">Nombre/Empresa:</span> {name}
        </Typography>
        <Typography color="gray" className="mt-1">
          <span className="font-bold">Categoría:</span> {categories && categories.length > 0 ? categories[0].name : 'No disponible'}
        </Typography>
        <Typography color="gray" className="mt-1">
          <span className="font-bold">Descripción:</span> {description}
        </Typography>
        <Typography color="gray" className="mt-1">
          <span className="font-bold">Correo electrónico:</span> {seller.email}
        </Typography>
        <Typography color="gray" className="mt-1">
          <span className="font-bold">Provincia:</span> {province}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 mt-2">
        <Button color="lightBlue" onClick={() => navigate('/contact-route')}>
          Contactar
        </Button>
      </CardFooter>
    </Card>
  );
}

export default Info;
