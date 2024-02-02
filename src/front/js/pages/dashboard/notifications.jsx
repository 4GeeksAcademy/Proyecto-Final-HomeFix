import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../store/appContext';
import { cloudinaryConfig } from './config';
import { Image, Transformation } from 'cloudinary-react';
import { AdvancedImage } from '@cloudinary/react';
import { sepia } from "@cloudinary/url-gen/actions/effect";

import {
  Typography,
  Alert,
  Card,
  CardHeader,
  Checkbox,
  Input,
  Button,  
  Spinner,
  CardBody,
  Icon,
  Select,
  Option,
  Form,
  Popover,
  PopoverContent,
  PopoverHandler,
  
  
} from "@material-tailwind/react";
import { InformationCircleIcon, CloudArrowUpIcon } from "@heroicons/react/24/outline";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";





export function Notifications() {
  const [showSuccessPopover, setShowSuccessPopover] = useState(false); // Estado para controlar la visibilidad del popover de éxito

  const { store, actions } = useContext(Context);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageFiles: [],
    province: '',
    category: [],
  });


  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        console.log("Fetching products...");
        await actions.getAllProvinces();
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProvinces();
  }, []);




  useEffect(() => {
    if (showSuccessPopover) {
      setTimeout(() => {
        setShowSuccessPopover(false);
        navigate("/dashboard/profile");
      }, 1500); // Puedes ajustar el tiempo según tus necesidades
    }
  }, [showSuccessPopover]);


  useEffect(() => {
    const getcategories = async () => {
      try {
        console.log("Fetching products...");
        await actions.getallcategories();
        console.log("Categories:", store.categories)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getcategories();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    if (name === 'category') {
      // Si la categoría es un array, agrega o elimina la selección actual
      setFormData(prevState => ({
        ...prevState,
        [name]: prevState[name].includes(value)
          ? prevState[name].filter(item => item !== value)
          : [...prevState[name], value],
      }));
    } else {
      // Si no es una categoría, actualiza normalmente
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleImageUpload = async e => {
    console.log('Cloudinary Config:', cloudinaryConfig); // Asegúrate de que la configuración sea correcta

    const files = e.target.files;

    // Realiza la carga de cada imagen y actualiza el estado con las URLs
    const uploadedImages = await Promise.all(
      Array.from(files).map(async file => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default'); // Reemplaza con tu upload preset de Cloudinary

        try {
          const response = await fetch('https://api.cloudinary.com/v1_1/dpxcrz59c/image/upload', {
            method: 'POST',
            body: formData,
          });

          const data = await response.json();
          console.log('Image upload response:', data);

          return data.url;
        } catch (error) {
          console.error('Error uploading image to Cloudinary:', error);
          return null;
        }
      })
    );

    setFormData({ ...formData, imageFiles: uploadedImages });
    console.log('Image URLs:', uploadedImages.filter(url => url !== null));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, description, price, imageFiles, province, category } = formData;

    actions.createProduct(name, description, parseFloat(price), imageFiles, province, category);
    setShowSuccessPopover(true);
    setFormData({ name: '', description: '', price: '', imageFiles: [], province: '', category: [] });
  };




  const [showAlerts, setShowAlerts] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = React.useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["gray", "green", "orange", "red"];

  return (
    <div className="flex justify-center mt-12">
      <Card color="white" className='p-4' shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Crear una Nueva publicacion
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Cuentanos que quieres publicar
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit} >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Titulo de tu Publicación
            </Typography>
            <Input
              size="lg"
              placeholder=""
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              labelProps={{
                className: "before:content-none after:content-none",
              }}

            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Escribe una descripcion de lo que haces
            </Typography>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              class="peer h-full min-h-[100px] w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=" "></textarea>


            {/* <Typography variant="h6" color="blue-gray" className="-mb-3">
              ¿Quieres Añadirle un precio a lo que haces?
            </Typography> */}
            {/* <Input
              size="lg"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            /> */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Selecciona una categoria
            </Typography>

            {/* <Select
              label="Select Version"
              className="text-sm" 
              animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
              }}
            >
              <Option>Material Tailwind HTML</Option>
              <Option>Material Tailwind React</Option>
              <Option>Material Tailwind Vue</Option>
              <Option>Material Tailwind Angular</Option>
              <Option>Material Tailwind Svelte</Option>
            </Select> */}



            <div className="min-w-[200px]">
              <select
                className="shadow appearance-none border min-w-[200px] w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>Seleccione una categoria</option>
                {Array.isArray(store.categories) && store.categories.map((category) => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}


              </select>
            </div>

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              ¿En que provincia te encuentras?
            </Typography>

            <div className="min-w-[200px]">
              <select
                className="shadow appearance-none border rounded min-w-[200px] w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="province"
                value={formData.province}
                onChange={handleInputChange}
                required
              >
                <option value={formData.category} >Seleccione una provincia</option>
                {Array.isArray(store.provinces) && store.provinces.map((province) => (
                  <option key={province.id} value={province.id}>{province.name}</option>
                ))}


              </select>
            </div>

            <div>
              <label htmlFor="fileUpload" className="block mb-2 text-lg font-medium text-gray-700">
                Subir imágenes:
              </label>
              <input
                id="fileUpload"
                type="file"
                name="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />
              <label htmlFor="fileUpload" className="flex justify-center px-4 py-2 bg-black text-white rounded-lg cursor-pointer hover:bg-blue-600">
                <CloudArrowUpIcon className="w-5 h-5 mr-2" />
                Seleccionar imágenes
              </label>

              <div className="flex flex-wrap mt-4">
                {formData.imageFiles.map((imageUrl, index) => (
                  <div key={index} className="m-2">
                    <img
                      src={imageUrl}
                      alt={`Thumbnail ${index}`}
                      className="w-24 h-24 object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </div>
            </div>






            {/* <Input
              type="file"
              name="file"
              accept="image/*"
              multiple
              capture="Select Images"
              onChange={handleImageUpload}
            />


            <div className="flex flex-wrap mt-2">
              {formData.imageFiles.map((imageUrl, index) => (
                <div key={index} className="m-2">
                  <img src={imageUrl} alt={`Thumbnail ${index}`} className="w-16 h-16 object-cover" />
                </div>
              ))}
            </div> */}


          </div>

          <Popover
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}>
            <PopoverHandler type="submit">
              <Button className="mt-6" fullWidth>
                Crear Publicación
              </Button>
            </PopoverHandler>
            {showSuccessPopover && (
              <PopoverContent className='flex justify-center gap-1'>
                <Spinner className="h-4 w-4" />Tu publicación se ha creado con éxito
              </PopoverContent>
            )}
          </Popover>

          {/* <Popover
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <PopoverHandler>
              <Button className="mt-6" type="submit" fullWidth>
                Crear Publicación
              </Button>
            </PopoverHandler>
            <PopoverContent>
              This is a very beautiful popover, show some love.
            </PopoverContent>
          </Popover> */}

        </form>
      </Card>
    </div>
  );
}

export default Notifications;
