import React, { useEffect, useContext } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Spinner,
} from "@material-tailwind/react";

import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

import {
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "../../widgets/cards";
import { StatisticsChart } from "../../widgets/charts";
import { CategoryCard } from "../../widgets/cards";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "../../data";
import { CheckCircleIcon, ClockIcon } from "@heroicons/react/24/solid";
import Categorycarddata from "../../data/categorycarddata"
import { useState } from 'react';
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";
import banner from '@img/Bannerhomefix.png';

export function Home() {

  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user_id, setUser_id] = useState('');

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
    return <Spinner />;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 8
    },
    desktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 6
    },
    predesktop: {
      breakpoint: { max: 1600, min: 1400 },
      items: 4
    },

    tablet: {
      breakpoint: { max: 1400, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()}> <FiChevronRight className="text-black text-2xl" /></button>
  };

  return (
    <div className="mt-12">

      <div className="mb-12 gap-y-10 gap-x-6">
        <img className=' w-full rounded-lg' src={banner} alt="" />
      </div>

      <Carousel
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        className="m-0 p-0 rounded-xl"
        show={5}

      >
        {Categorycarddata.map(({ img, text, id }) => (
          <CategoryCard
            images_urls={img}
            text={text}
            id={id}

          >
          </CategoryCard>

        ))}
      </Carousel>

      <hr className="my-2 border-blue-gray-50" />
      <h2>Ultimos Productos</h2>
      <div className="mb-12 mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5">

        {store.products.map((product) => (
          <StatisticsCard
            key={product.id}
            images_urls={product.images_urls}
            title={product.name}
            product_description={product.description}
            product_price={product.price}
            product_seller={product.seller.email}
            product_seller_id={product.seller.id}
            productId={product.id}
          />
        ))}

      </div>
    </div>
  );
}

export default Home;