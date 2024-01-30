import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { cloudinaryConfig } from '../config';
import { Image, Transformation } from 'cloudinary-react';
import { AdvancedImage } from '@cloudinary/react';
import { sepia } from "@cloudinary/url-gen/actions/effect";

const NuevaPublicacion = () => {

  const { store, actions } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    imageFiles: [],
    province: '',
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

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async e => {
    console.log('Cloudinary Config:', cloudinaryConfig);

    const files = e.target.files;

    const uploadedImages = await Promise.all(
      Array.from(files).map(async file => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default');

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
    const { name, description, price, imageFiles } = formData;

    actions.createProduct(name, description, parseFloat(price), imageFiles);

    setFormData({ name: '', description: '', price: '', imageFiles: [] });
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Crear Nueva Publicación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripción:
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Precio:
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Provincia:
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>Seleccione una provincia</option>
              {Array.isArray(store.provinces) && store.provinces.map((province) => (
                <option key={province.id} value={province.name}>{province.name}</option>
              ))}

             
            </select>
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subir Imágenes:
            <input
              type="file"
              name="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
            />
          </label>

          <div className="flex flex-wrap mt-2">
            {formData.imageFiles.map((imageUrl, index) => (
              <div key={index} className="m-2">
                <img src={imageUrl} alt={`Thumbnail ${index}`} className="w-16 h-16 object-cover" />
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear Publicación
        </button>
      </form>
    </div>
  );
};

export default NuevaPublicacion;