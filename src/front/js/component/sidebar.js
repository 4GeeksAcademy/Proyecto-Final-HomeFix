import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineCollection } from "react-icons/hi";
import { GrUserWorker } from "react-icons/gr";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineHeart, AiOutlineMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TfiHome } from "react-icons/tfi";
import { IoMailOutline, IoKeyOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { BsQuestionCircle } from "react-icons/bs";
import logo from '@img/logo.png';

const Sidebar = () => {
    const menus = [
        { name: "Inicio", link: "/", icon: TfiHome },
        { name: "Publicaciones", link: "/", icon: HiOutlineCollection },
        { name: "Profesionales", link: "/", icon: GrUserWorker },
        { name: "MI PERFIL" },
        { name: "Mis publicaciones", link: "/", icon: TbReportAnalytics},
        { name: "Buzón", link: "/", icon: IoMailOutline },
        { name: "Favoritos", link: "/", icon: AiOutlineHeart },
        { name: "HOMEFIX" },
        { name: "¿Quiénes sómos?", link: "/about", icon: GoPeople},
        { name: "Preguntas Frecuentes", link: "/questions", icon: BsQuestionCircle },
        { name: "Politica de seguridad", link: "/", icon: IoKeyOutline },
        { name: "Contáctanos", link: "/", icon: AiOutlineMessage },
    ];
    const [open, setOpen] = useState(true);

    return (
        <section className="flex gap-6">
            <div
                className={`bg-white min-h-screen ${open ? "w-72" : "w-16"
                    } duration-500 text-black px-4`} 
            >
                <div className="py-1 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="mt-4 flex flex-col gap-2 relative">
                    {menus.map((menu, i) => (
                        menu.link ? (
                            <Link
                                to={menu.link}
                                key={i}
                                className={` ${menu.margin && "mt-2"
                                    } group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-gray-200 rounded-md text-black`}
                            >
                                <div>{menu.icon ? React.createElement(menu.icon, { size: "20" }) : null}</div>
                                <h2
                                    style={{ transitionDelay: `${i + 3}00ms` }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                                >
                                    {menu.name}
                                </h2>
                            </Link>
                        ) : (
                            <div
                                key={i}
                                className={` ${menu.margin && "mt-2"
                                    } group flex items-center text-sm gap-3.5 font-medium p-2 text-black`}
                            >
                                <h2
                                    style={{ transitionDelay: `${i + 3}00ms` }}
                                    className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
                                >
                                    {menu.name}
                                </h2>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sidebar;
