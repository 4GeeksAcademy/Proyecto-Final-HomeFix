import React from "react";
import logo from '@img/logo.png';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";

export function Contactanos() {
  <div className="politica-container max-w-2xl w-full bg-white shadow-lg rounded-lg p-10 lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4" style={{ borderRadius: "10px", padding: "20px", maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
    <h2 className="text-2xl font-bold mb-4 text-center">¡Contáctanos!</h2>
    <p className="text-gray-600 mb-4 text-justify">
      ¿Tienes preguntas o comentarios? ¡Estamos aquí para ayudarte! Ponte en
      contacto con nosotros a través del siguiente correo electrónico:
    </p>
    <p className="text-gray-600 font-semibold mb-4 text-center">
      <a href="mailto:info@homefix.es">info@homefix.es</a>
    </p>
    <div className="flex items-center justify-center mt-8">
      <img className="w-14 h-16" src={logo} alt="logo" />
      <p className="text-4xl mt-3 ml-2">HomeFix</p>
    </div>
  </div>
}

export default Contactanos;
