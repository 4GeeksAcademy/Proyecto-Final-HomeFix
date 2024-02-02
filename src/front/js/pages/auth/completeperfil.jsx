import React, { useContext, useState } from "react";
import sign from '@img/login.png';
import { Context } from '../../store/appContext';
import { useNavigate } from "react-router-dom";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



export function CompletePerfil() {

  const { store, actions } = useContext(Context);
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLastName] = useState('');
  const [address_line, setAddress_Line] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postal_code, setPostal_code] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();
  const email = localStorage.getItem('email');
  const mangoid = localStorage.getItem('idmango');
  const mangoidwallet = localStorage.getItem('wallet_id');
  const perfildone = true;
  const userbe_id = localStorage.getItem('userbe_id');

  const register = async () => {

    try {
      await actions.updateuserbe(first_name, last_name, address_line, city, region, postal_code, country, email);

      await update_userbe();

      setFirst_Name('');
      setLastName('');
      setRegion('');
      setCity('');
      setPostal_code('');
      setCountry('');
      setAddress_Line('');
      navigate("/dashboard/home");


    } catch (error) {
      console.error('Error en register:', error);
    }
  }

  const update_userbe = async () => {
    await actions.updateuserbe(userbe_id, mangoid, mangoidwallet, first_name, last_name, perfildone);
  }

 


  return (
    <section className="m-8 flex">
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src={sign}
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Completa tu Perfil</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Nombre"
              value={first_name}
              onChange={e => setFirst_Name(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Apellido"
              value={last_name}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Direccion"
              value={address_line}
              onChange={e => setAddress_Line(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Ciudad"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Provincia"
              value={region}
              onChange={e => setRegion(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Pais"
              value={country}
              onChange={e => setCountry(e.target.value)}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="text"
              label="Codigo Postal"
              value={postal_code}
              onChange={e => setPostal_code(e.target.value)}
            />
          </div>


          <Button className="mt-6" onClick={register} fullWidth>
            Completar</Button>


          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            ¿Quieres Completarlo en otro momento?{" "}
            <Link to="/dashboard/home" className="text-gray-900 ml-1">Continua al Home</Link>
          </Typography>
        </form>

      </div>
    </section>
  );
}

export default CompletePerfil;
