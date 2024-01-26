import React, { useContext, useState } from "react";
import "../styles/login.css";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";
import logo from '@img/logo.png';

const CompletePerfil = () => {

    const { store, actions } = useContext(Context);
    const [first_name, setFirst_Name] = useState('');
    const [last_name, setLastName] = useState(''); 
    const [address_line, setAddress_Line] = useState('');
    const [city, setCity] = useState('');
    const [region, setRegion] = useState('');
    const [postal_code, setPostal_code] = useState('');
    const [country, setCountry] = useState('');
    const navigate = useNavigate();
    const email = localStorage.getItem('email')

    const register = async () => {
        try {
            // Llama a completeperfil() y espera a que se complete
            await actions.completeperfil(first_name, last_name, address_line, city, region, postal_code, country, email);
            

            // Si completeperfil() se completa sin errores, llama a createWallet()
            createWallet();
    
            // Restablece los valores de los campos de entrada
            setFirst_Name('');
            setLastName('');
            setRegion('');
            setCity('');
            setPostal_code('');
            setCountry('');
            setAddress_Line('');
        } catch (error) {
            // Maneja cualquier error que ocurra durante la ejecución de completeperfil()
            console.error('Error en register:', error);
        }
    }

    const createWallet = async () => {
        console.log(localStorage.user_id)
        await actions.crear_wallet(localStorage.idmango);
        navigate("/profile");
    }

    return (<>
        <div className="flex flex-row justify-center items-center h-full p-16">
            <div className="flex flex-col justify-start align-stretch gap-y-2 w-[29rem] p-16 bg-gray-100 rounded-3xl" >
                <div className="flex flex-row justify-center align-stretch gap-y-2">
                    <img className="w-14 h-16" src={logo} alt="logo" />
                    <p className="text-4xl mt-3">HomeFix</p>

                </div>
                <span className="text-4xl">Completa tus datos</span>
                <span className="text-sm">Nombre</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={first_name} onChange={e => setFirst_Name(e.target.value)}  />


                <span className="text-sm">Apellido</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={last_name} onChange={e => setLastName(e.target.value) } />


                <span className="text-sm">Dirección</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={address_line} onChange={e => setAddress_Line(e.target.value) } />


                <span className="text-sm">Ciudad</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={city} onChange={e => setCity(e.target.value) } />


                <span className="text-sm">Provincia</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={region} onChange={e => setRegion(e.target.value) } />


                <span className="text-sm">Pais</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={country} onChange={e => setCountry(e.target.value) } />


                <span className="text-sm">Codigo Postal</span>
                <input className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10" type="text" placeholder="" value={postal_code} onChange={e => setPostal_code(e.target.value) } />
               
                <button className="bg-[#3b3c3a] text-sm hover:bg-[#d77733] text-white py-2 px-4 rounded-md" onClick={() => { register()}}>Completar</button>
            </div>
        </div>
    </>)
}

export default CompletePerfil;
