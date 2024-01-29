import React, { useEffect, useContext, useState } from "react";
import { Context } from '../../store/appContext';
import img from "@img/profile-picture.jpg"
import { useParams } from "react-router-dom";

import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard } from "../../widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "../../data";



export function Profileuser() {
  const { store, actions } = useContext(Context);

  const { user_id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {

        await actions.getuserprofile(user_id);
        console.log(store.datauserprofile)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url('/img/background-image.png')] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4 border border-blue-gray-100">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between flex-wrap gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src={img}
                alt="bruce-mars"
                size="xl"
                variant="rounded"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  {store.datauserprofile.first_name} {store.datauserprofile.last_name}
                </Typography>
                {/* <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  CEO / Co-Founder
                </Typography> */}
              </div>
            </div>
            {/* <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    App
                  </Tab>
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div> */}
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">

            <ProfileInfoCard
              title="Perfil de Usuario"
              description=""
              details={{
                Nombre: store.datauserprofile.first_name,
                apellido: store.datauserprofile.last_name,
                email: store.datauserprofile.email,
                Ubicacion: store.datauserprofile.city,
                // social: (
                //   <div className="flex items-center gap-4">
                //     <i className="fa-brands fa-facebook text-blue-700" />
                //     <i className="fa-brands fa-twitter text-blue-400" />
                //     <i className="fa-brands fa-instagram text-purple-500" />
                //   </div>
                // ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />

          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Publicaciones
            </Typography>
            {/* <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Architects design houses
            </Typography> */}
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profileuser;
