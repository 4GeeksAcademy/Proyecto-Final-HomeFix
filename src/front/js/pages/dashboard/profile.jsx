import React, { useEffect, useContext, useState } from "react";
import { Context } from '../../store/appContext';
import img from "@img/profile-picture.jpg"

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
  Spinner
} from "@material-tailwind/react";
import {
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard, MessageCard, StatisticsCard } from "../../widgets/cards";

export function Profile() {
  const [loading, setLoading] = useState(true)
  const { store, actions } = useContext(Context);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Fetching products...");
        const user_be = localStorage.getItem('userbe_id')
        await actions.getuser(user_be);
        console.log(store.datauser)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, []);

  useEffect(() => {
    if (store.user.email) {
      actions.getProductsByUser();
    }
  }, [store.user.email, actions]);

  if (loading) {
    return <Spinner />
  }

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
                  {store.datauser.first_name} {store.datauser.last_name}
                </Typography>
              </div>
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">

            <ProfileInfoCard
              title="Perfil de Usuario"
              description=""
              details={{
                Nombre: store.datauser.first_name,
                apellidoxxx: store.datauser.last_name,
                email: store.datauser.email,
                Ubicacion: store.datauser.city,
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />

          </div>

          <Typography variant="h6" color="blue-gray" className="mb-2">
            Publicaciones
          </Typography>
          <div className="px-4 pb-4 flex flex-row justify-start w-full overflow-auto">
            {store.userProducts.map((product) => (
              <StatisticsCard
                key={product.id}
                images_urls={product.images_urls}
                title={product.name}
                product_description={product.description}
                product_price={product.price}
                product_seller={product.seller.email}
                product_seller_id={product.seller.id}
              />
            ))}

            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">

            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
