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
import { Link, useNavigate } from "react-router-dom";

export function CategoryCard({ images_urls, text, id }) {
    return (

        <Link to={`/dashboard/filter/${id}`}>
            <Card className="mt-6 max-w-56">
                <CardBody className='flex content-center align-center justify-center items-center self-center p-2 m-0'>
                    <img className="h-12 w-12 text-gray-900" src={images_urls} alt="" />
                    <Typography variant="h5" color="blue-gray" className="ml-2 align-center">
                        {text}
                    </Typography>

                </CardBody>

            </Card>
        </Link>



    );
}

CategoryCard.defaultProps = {
    color: "blue",
    footer: null,
};

CategoryCard.propTypes = {
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
    title: PropTypes.node,
    images_urls: PropTypes.node,
    value: PropTypes.node,
    footer: PropTypes.node,
    id: PropTypes.node,
};

CategoryCard.displayName = "/src/widgets/cards/categorycard.jsx";

export default CategoryCard;
