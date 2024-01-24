import React, { useContext, useState } from "react";
import "../styles/sign.css";
import { Context } from '../store/appContext';
import { useNavigate } from "react-router-dom";
import logo from '@img/logo.png';

const Sign = () => {
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const sign = async () => {      
        setEmail('');
        setConfirmEmail
        setPassword('');
        setConfirmPassword('');     
        navigate("/lobby");
    }

    return (
        <>
            <div className="flex flex-row justify-center items-center h-full p-16">
                <div className="flex flex-col justify-start align-stretch gap-y-2 w-[29rem] p-16 bg-gray-100 rounded-3xl">
                    <div className="flex flex-row justify-center align-stretch gap-y-2">
                        <img className="w-14 h-16" src={logo} alt="logo" />
                        <p className="text-4xl mt-3">HomeFix</p>
                    </div>
                    <span className="text-4xl">Registro</span>
                    <span className="mb-4 text-gray-500">Crea tu cuenta</span>
                    <span className="text-sm">Correo Electrónico</span>
                    <input
                        className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10"
                        type="text"
                        placeholder="ejemplo.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="text-sm">Confirmar Correo Electrónico</span>
                    <input
                        className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10"
                        type="text"
                        placeholder="ejemplo.com"
                        value={confirmEmail}
                        onChange={(e) => setConfirmEmail(e.target.value)}
                    />
                    <span className="text-sm">Contraseña</span>
                    <input
                        className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="text-sm">Confirmar Contraseña</span>
                    <input
                        className="border-slate-300 placeholder:italic placeholder:text-slate-400 border focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm py-2 pl-4 pr-3 shadow-sm rounded-md h-10"
                        type="password"
                        placeholder="********"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button
                        className="bg-[#3b3c3a] text-sm hover:bg-[#d77733] text-white py-2 px-4 rounded-md"
                        onClick={sign}
                    >
                        Registrarse
                    </button>
                    <div className="flex mt-4 justify-center items-center">
                        <span className="text-sm">
                            ¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sign;
