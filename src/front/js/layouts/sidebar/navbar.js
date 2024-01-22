import React from 'react';
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { HiMenuAlt3, HiOutlineCollection } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { TfiHome } from "react-icons/tfi";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import logo from '@img/logo.png';

import { NavLink, useLocation, useRoutes } from "react-router-dom";



const NavBar = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (


        <div className='flex bg-white h-[4rem] w-full'>
            
            <div className='w-[100%] flex justify-end '>
                <div className='flex mx-3 justify-center items-center'>
                    {isLoggedIn ? (
                        <div>
                            {/* <img className='w-[2rem] h-[2rem]' src={logo} alt="Imagen de perfil" /> */}
                            <button className="text-white bg-black hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}>Salir</button>
                        </div>
                    ) : (


                        <div>
                            <NavLink to={"/login"} className="link">
                                <button type="button" onClick={handleLogin} className="text-white bg-black hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-700 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Ingresar</button>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>


        </div>
    );
};

export default NavBar;