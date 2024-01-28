import React, { useContext, useState } from "react";
import { useEffect } from "react";
import SearchBar from './searchbar';
import { useNavigate } from "react-router-dom";

import { Context} from '../../store/appContext';

import { NavLink, useLocation, useRoutes } from "react-router-dom";



const NavBar = () => {
    const { actions, store } = useContext(Context);
    const token = localStorage.getItem('token');

    const [isLoggedIn, setLoggedIn] = useState(!!token);
    const navigate = useNavigate();

    const handleLogin = () => {
        !token ? navigate("/login") : setLoggedIn(true);
        console.log('dentro del login')
    };

    const handleLogout = async() => {
        setLoggedIn(false);
        await actions.clearToken();
        console.log('dentro del logout')
    };

    console.log(isLoggedIn, '----------------')

    useEffect(()=>{
        isLoggedIn ? navigate("/home") : navigate("/login");
    },[isLoggedIn])



    return (


        <div className='flex bg-white h-[4rem] w-full z-[999]'>

            <div className='w-full flex content-center justify-center mt-[8px]'><SearchBar /></div>

            <div className='flex justify-end '>
                <div className='flex mx-3 justify-center items-center'>
                    {token ? (
                        <div>
                            {/* <img className='w-[2rem] h-[2rem]' src={logo} alt="Imagen de perfil" /> */}
                            <button className="text-white bg-black hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Salir</button>
                        </div>
                    ) : (
                        <div>
                                <button type="button" onClick={handleLogin} className="text-white bg-[#2A2A2A] hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Ingresar</button>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default NavBar;