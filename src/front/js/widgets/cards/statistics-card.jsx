import React, { useContext, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";


import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Carousel } from "@material-tailwind/react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function StatisticsCard({ images_urls, key, title, product_description, product_seller, product_seller_id, producto_id, categoria, province }) {

  const [user_id, setUserId] = useState('');
  const [product_id, setProductid] = useState('');
  const navigate = useNavigate();


  const viewProfile = () => {
    setUserId(product_seller_id);
    navigate(`/dashboard/chathomefix/${product_seller_id}`, { state: { userId: user_id } });
  }

  const viewProduct = () => {
    setProductid(producto_id);
    navigate(`/dashboard/test/${producto_id}`, { state: { productId: producto_id } });
  }
  
  return (

    
    <Card className="max-w-72 border border-black ">
      <CardHeader shadow={true} floated={false} className="h-52 mt-2 mx-2">
        <Carousel className='className="rounded-xl'>
          {/* <img
            src={images_urls}
            alt={`image-0`}

            className="h-52 w-full object-cover"
          /> */}
          {images_urls && images_urls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`image-${index}`}
              className="h-52 object-cover"
            />
          ))}
        </Carousel>
      </CardHeader>
      <CardBody className='p-3 pt-1 pb-0'>
        <Button
          color="green" className="border p-[3px] text-[8px] mr-2 text-black" >{categoria}</Button>
          <Button 
        color="orange" className="border p-[3px] text-[8px] text-black">{province}</Button>
        <div className="mb-2 flex items-center justify-between">
          <Typography color="blue-gray" className="font-medium">
            {title}
          </Typography>

        </div>
        <Typography
          variant="small"
          color="gray"
          className="font-normal opacity-75"
        >
          {product_description}
        </Typography>
        <div className="flex">

          <Typography
            variant="small"
            color="gray"
            className="font-normal text-xs opacity-75 mb-0 pb-1 pt-2"
          >
            {product_seller}
          </Typography>

          <div>

          </div>
        </div>
      </CardBody>
      <CardFooter className="pb-2 pt-0 px-2 flex flex-row gap-1">


        <Button
          onClick={viewProfile}
          ripple={false}
          fullWidth={true}
          className="bg-[#2A2A2A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[70%]"
        >
          Contactar
        </Button>



        <Button
          ripple={false}
          fullWidth={true}
          onClick={viewProduct}
          className="bg-blue-gray-900/10 text-blue-gray-900 h-full shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[30%] p-0 flex flex-row justify-center content-center items-center"
        >
          <MagnifyingGlassIcon className="w-5 h-5 text-blue-gray-900" />
        </Button>
      </CardFooter>
    </Card>
  );
}

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node,
  title: PropTypes.node.isRequired,
  images_urls: PropTypes.node,
  value: PropTypes.node,
  footer: PropTypes.node,
};

StatisticsCard.displayName = "/src/widgets/cards/statistics-card.jsx";

export default StatisticsCard;
