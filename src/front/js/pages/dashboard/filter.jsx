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
} from "@material-tailwind/react";

import { useParams } from "react-router-dom";

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



export function Filter() {

  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user_id, setUser_id] = useState('');

  const { category_id } = useParams();


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        await actions.getcategory(category_id);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category_id]);

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
  const responsive = {
    superLargeDesktop: {
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
    return <button onClick={() => onClick()}> <FiChevronRight className="text-black text-2xl" /></button>
  };

  return (
    <div className="mt-12">

      <Carousel
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        className="mb-[3em] p-0 rounded-xl"
        show={5}

      >
        {Categorycarddata.map(({ img, text, id }) => (
          <CategoryCard
            images_urls={img}
            text={text}
            id = {id}

          >

          </CategoryCard>

        ))}
      </Carousel>

      <hr className="my-2 border-blue-gray-50" />
      {store.category.map((named) => (
        <div key={named.id}>
          {named.categories.map((category) => (
            <h2 
            className='text-2xl font-bold text-blue-gray-700 mb-4'
            key={category.id}>
              {category.name}
            </h2>
          ))}
        </div>
      ))}
      <div className="mb-12 mt-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-5">

        {store.category.map((product) => (
          <StatisticsCard
            key={product.id}
            images_urls={product.images_urls}
            title={product.name}
            product_description={product.description}
            product_price={product.price}
            product_seller={product.seller.email}
            product_seller_id={product.seller.id}
            province = {product.province}
            categoria={product.categories.length > 0 ? product.categories[0].name : ""}
          />
        ))}

        {/* {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
          />
        ))} */}

      </div>
      {/* jamirrrrr@gmail.com */}
      {/* <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-2 border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckCircleIcon strokeWidth={3} className="h-4 w-4 text-blue-gray-200" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                      }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${key === 0 ? "" : "-ml-2.5"
                                  }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
        <Card className="border border-blue-gray-100 shadow-sm">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${key === ordersOverviewData.length - 1
                      ? "after:h-0"
                      : "after:h-4/6"
                      }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
}

export default Filter;
