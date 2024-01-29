import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";

export function Questions() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <div className="bg-blue-gray-50/50 shadow-lg" style={{ borderRadius: "10px", padding: "20px", maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>Preguntas Frecuentes</h1>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>¿Cómo puedo solicitar un servicio?</AccordionHeader>
        <AccordionBody>
        Puedes solicitar un servicio seleccionando la categoría y el profesional deseado, luego sigue los pasos para completar la solicitud y realizar el pago.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
        ¿Cómo puedo pagar por los servicios?
        </AccordionHeader>
        <AccordionBody>
        Puedes realizar el pago con tarjeta de crédito o débito para confirmar tu solicitud de servicio.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
        ¿Cómo califico a un profesional?
        </AccordionHeader>
        <AccordionBody>
        Después de completar el servicio, puedes calificar al profesional y dejar comentarios sobre tu experiencia. Tu retroalimentación es valiosa para nosotros y otros usuarios.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
        ¿Cómo puedo cambiar la ciudad para ver profesionales en otra área?
        </AccordionHeader>
        <AccordionBody>
        Puedes cambiar la ciudad en la configuración de tu perfil o en la página de inicio. Esto te permitirá ver profesionales disponibles en diferentes áreas geográficas.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Questions;
