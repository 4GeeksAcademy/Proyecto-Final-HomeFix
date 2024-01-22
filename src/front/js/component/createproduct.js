import React, { useContext, useState } from "react";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";
import logo from '@img/logo.png';



const CreateProduct = () => {
  
  const [name, setProductName] = useState('');
    const [price, setProductPrice] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleCreateProduct = async () => {
        await actions.createProduct(name, price);
        setProductName('');
        setProductPrice('');
        navigate("/home");
    }

  return (
    <div className="flex flex-row justify-center items-center h-full p-16">
            <div className="flex flex-col justify-start align-stretch gap-y-2 w-[29rem] p-16 bg-gray-100 rounded-3xl" >
                <div className="flex flex-row justify-center align-stretch gap-y-2">
                    <img className="w-14 h-16" src={logo} alt="logo" />
                    <p className="text-4xl mt-3">HomeFix</p>

                </div>
                <span className="text-4xl">Registro</span>
                <span className="mb-4 text-gray-500">Ingresa tus datos</span>
                <span className="text-sm">Usuario</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="n" value={name} onChange={e => setProductName(e.target.value)} />
                <span className="text-sm">Contraseña</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="********" value={price} onChange={e => setProductPrice(e.target.value)} />
                {/* <div className="mb-5 flex justify-between items-center">
                    <label htmlFor="recordar" className="flex items-center">
                        <input type="checkbox" id="recordar" className="mr-2" />
                        <span className="text-sm">Recordar</span>
                    </label>
                    <span className="text-sm ml-2"><a href="">¿Olvidaste la contraseña?</a></span>
                </div> */}

                <button className="bg-[#3b3c3a] text-sm hover:bg-[#d77733] text-white py-2 px-4 rounded-md" onClick={handleCreateProduct}>Registrarse</button>
                
                
            </div>
        </div>
  );
};

export default CreateProduct;
