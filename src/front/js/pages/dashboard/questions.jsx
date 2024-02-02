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
    <div className="bg-white shadow-lg" style={{ borderRadius: "10px", padding: "20px", maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px", marginTop: "10px",fontSize: "24px", fontWeight: "bold" }}>Preguntas Frecuentes</h1>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          ¿Cómo encuentro un profesional en la aplicación?
        </AccordionHeader>
        <AccordionBody>
          Puedes buscar profesionales por categoría de servicio. Además, puedes explorar los perfiles de los profesionales disponibles en tu área.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          ¿Puedo ver información detallada sobre los profesionales antes de contratarlos?
        </AccordionHeader>
        <AccordionBody>
          Sí, cada perfil de profesional contiene detalles como su experiencia, áreas de especialización, servicios ofrecidos y disponibilidad. Esta información te ayuda a tomar una decisión informada sobre quién contratar.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          ¿Cómo solicito los servicios de un profesional?
        </AccordionHeader>
        <AccordionBody>
          Una vez que encuentres al profesional adecuado, simplemente selecciona su perfil y sigue las instrucciones para solicitar el servicio deseado. El profesional será notificado y se comunicará contigo para coordinar los detalles.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          ¿Puedo comunicarme directamente con el profesional antes de contratarlo?
        </AccordionHeader>
        <AccordionBody>
          Sí, la aplicación proporciona un sistema de mensajería integrado que te permite comunicarte directamente con los profesionales. Puedes hacer preguntas adicionales o discutir los detalles del servicio antes de comprometerte.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5}>
        <AccordionHeader onClick={() => handleOpen(5)}>
          ¿Qué debo hacer si tengo algún problema con el servicio recibido?
        </AccordionHeader>
        <AccordionBody>
          Si tienes algún problema con el servicio, te recomendamos que te comuniques con nuestro equipo de soporte al cliente. Estamos aquí para ayudarte a resolver cualquier problema y garantizar tu satisfacción con la experiencia de la aplicación.
        </AccordionBody>
      </Accordion>
    </div>
  );
}

export default Questions;
