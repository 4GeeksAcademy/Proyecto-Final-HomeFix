import React from 'react';
import { useEffect, useState } from "react";
import { useRef } from "react";
import SubMenu from "./SubMenu";
import { motion } from "framer-motion";
import NavBar from "./navbar";
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

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
      open: {
        x: 0,
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        x: -250,
        width: 0,
        transition: {
          damping: 40,
          delay: 0.15,
        },
      },
    }
    : {
      open: {
        width: "16rem",
        transition: {
          damping: 40,
        },
      },
      closed: {
        width: "4rem",
        transition: {
          damping: 40,
        },
      },
    };

  const subMenusList = [
    {
      name: "build",
      icon: RiBuilding3Line,
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "events"],
    },
  ];

  return (
    
    <div>

      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${open ? "block" : "hidden"
          } `}
      ></div>
      
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className=" bg-white text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
            overflow-hidden md:relative fixed
         h-screen "
      >

        <div className=' max-w-[16rem] h-[4rem] w-[16rem]'>
          <div className="flex items-center font-medium h-[4rem] border-b py-2 border-slate-300 gap-3 mx-3">
            <img
              src={logo}
              width={45}
              alt=""
            />
            <span className="text-xl whitespace-pre">HomeFix</span>
          </div>
        </div>
        <motion.div
          onClick={() => {
            setOpen(!open);
          }}
          animate={
            open
              ? {
                x: 0,
                y: 0,
                rotate: 0,
              }
              : {
                x: 0,
                y: 0,
                rotate: 180,
              }
          }
          transition={{ duration: 0 }}
          className="w-full flex align-center justify-center md:flex z-50 hidden right-2 bottom-3  cursor-pointer"
        >
          <HiMenuAlt3 size={25} />
        </motion.div>


        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[90%] h-[90%]">
            <li>
              <NavLink to={"/home"} className="link">
                <TfiHome size={23} className="min-w-max" />
                Inicio
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={"/authentication"} className="link">
                <HiOutlineCollection size={23} className="min-w-max" />
                Publicaciones
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stroage"} className="link">
                <GrUserWorker size={23} className="min-w-max" />
                Profesionales
              </NavLink>
            </li> */}
            <li className='border-y py-3 border-slate-300'>
              {open && (
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Mi Perfil
                </small>
              )}
            </li>
            <li>
              <NavLink to={"/profile/publicaciones"} className="link">
                <TbReportAnalytics size={23} className="min-w-max" />
                Mis datos
              </NavLink>
            </li>
            <li>
              <NavLink to={"/profile/chat"} className="link">
                <IoMailOutline size={23} className="min-w-max" />
                Buzón
              </NavLink>
            </li>
            <li className='border-b py-3 border-slate-300'>
              {open && (
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  HomeFix
                </small>
              )}
              <NavLink to={"/about"} className="link">
                <GoPeople size={23} className="min-w-max" />
                ¿Quienes Somos?
              </NavLink>
              <NavLink to={"/questions"} className="link">
                <BsQuestionCircle size={23} className="min-w-max" />
                ¿Como Funciona?
              </NavLink>
              <NavLink to={"/politicaprivacidad"} className="link">
                <IoKeyOutline size={23} className="min-w-max" />
                Politica de Privacidad
              </NavLink>
              <NavLink to={"/contactanos"} className="link">
                <AiOutlineMessage size={23} className="min-w-max" />
                Contactanos
              </NavLink>
            </li>
          </ul>

          {open && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>

      </motion.div>
      <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;