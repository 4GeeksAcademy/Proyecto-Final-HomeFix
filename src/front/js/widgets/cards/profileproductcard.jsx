import React, { useContext, useState } from "react";
import { Context } from '../../store/appContext';

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
  Input,
} from "@material-tailwind/react";


import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';
import { Carousel } from "@material-tailwind/react";
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { accelerate } from "@cloudinary/url-gen/actions/effect";

export function Profileproductcard({ images_urls, key, title, product_description, product_price, product_seller, product_seller_id, product_id, onDeleteProduct, categoria }) {
  const { actions } = useContext(Context);
  const [user_id, setUserId] = useState('');
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const viewProfile = () => {
    setShowConfirmation(true);
  }

  const deleteProductAndUpdateState = async () => {
    await actions.deleteProduct(product_id);
    onDeleteProduct(product_id);
  }

  const cancelDelete = () => {
    setPopoverOpen(false); 
  }

  const setuser = () => {
    setUserId(product_seller_id);
    console.log(user_id);
    navigate(`/dashboard/chathomefix/${product_seller_id}`);
  }

  return (
    <Card className="max-w-72">
      <CardHeader shadow={true} floated={false} className="h-52 mt-2 mx-2">
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
      <CardBody className='p-3 pt-1 pb-0'>
      <Button 
        color="white" className="border p-[3px] text-[8px] text-gray-500">{categoria}</Button>
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
        <div className="flex flex-row">
          <Typography
            variant="small"
            color="gray"
            className="font-normal text-xs opacity-75 mb-0 pb-1 pt-2"
          >
            {product_seller}
          </Typography>
          <div></div>
        </div>
      </CardBody>

      {showConfirmation && (
        <Popover
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <PopoverHandler>
            <Button>Popover</Button>
          </PopoverHandler>
          <PopoverContent>
            This is a very beautiful popover, show some love.
          </PopoverContent>
        </Popover>
      )}

      {/* {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg">
            <p>¿Estás seguro de que quieres eliminar esta publicación? Esta acción es irreversible.</p>
            <div className="mt-4 flex justify-center">
              <Button
                color="blue"
                onClick={deleteProductAndUpdateState}
                className="mr-4"
              >
                Confirmar
              </Button>
              <Button
                color="red"
                onClick={cancelDelete}
              >
                Cancelar
              </Button>
            </div>
          </div>
        </div>
      )} */}


      <CardFooter className="pt-0 pb-2 px-2 flex flex-row gap-3">
        {/* <Button
          onClick={setuser}
          ripple={false}
          fullWidth={true}
          className="bg-[#2A2A2A] text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[70%]"
        >
          Editar
        </Button> */}

        <Popover placement="top" >
          <PopoverHandler>
            <Button
              ripple={false}
              fullWidth={true}
              color="red"
              className="flex justify-center content-center align-center gap-3 center text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 w-[70%"
            >
              <p className="align-center text-center">Eliminar</p>
              <TrashIcon className="w-5 h-5 text-white" />
            </Button>
          </PopoverHandler>
          <PopoverContent className="w-96">
            <Typography color="blue-gray" className="font-medium pb-[10px]">
              ¿Estás seguro de que quieres eliminar esta publicación? Esta acción es irreversible.
            </Typography>
            <div className="flex flex-row justify-center gap-2">

              <Button onClick={deleteProductAndUpdateState} variant="gradient" color="red" className="flex-shrink-0 ">
                Confirmar
              </Button>

            </div>
          </PopoverContent>
        </Popover>






      </CardFooter>
    </Card>
  );
}

Profileproductcard.defaultProps = {
  color: "blue",
  footer: null,
};

Profileproductcard.propTypes = {
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

Profileproductcard.displayName = "/src/widgets/cards/profileproductcard.jsx";

export default Profileproductcard;