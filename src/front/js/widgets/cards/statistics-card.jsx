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
import { Carousel } from 'react-responsive-carousel';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export function StatisticsCard({ images_urls, key, title, product_description, product_price, product_seller, product_seller_id, productId }) {

  const [user_id, setUserId] = useState('');
  const navigate = useNavigate();

  const handleLupaClick = () => {
    console.log("ID del producto a buscar:", productId);
    navigate(`/dashboard/info/${productId}`);
  };

  const viewProfile = () => {
    setUserId(product_seller_id);
    navigate(`/info/${product_seller_id}`);
  }

  const setuser = () => {
    setUserId(product_seller_id);
    console.log(user_id);
    navigate(`/dashboard/chathomefix/${product_seller_id}`);
  }

  return (
    <Card className="max-w-72">
      <CardHeader shadow={true} floated={false} className="h-52 mt-3 mx-3">
        <Carousel className='className="rounded-xl h-52'>

          {images_urls && images_urls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`image-${index}`}
              className="h-52 w-full object-cover"
            />
          ))}
        </Carousel>
      </CardHeader>
      <CardBody className='p-3 pb-0'>
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
        <Typography
          variant="small"
          color="gray"
          className="font-normal text-xs opacity-75 mb-0 pb-1 pt-2"
        >
          {product_seller}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 px-3 flex flex-row gap-3">

        <Button
          onClick={setuser}
          ripple={false}
          fullWidth={true}
          className="bg-[#2A2A2A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[70%]"
        >
          Contactar
        </Button>

        <Button
          ripple={false}
          fullWidth={true}
          onClick={handleLupaClick} // Modificado para llamar a handleLupaClick
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
