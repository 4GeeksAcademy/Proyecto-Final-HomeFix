import React, { useState } from "react";

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
import "../css/about.css"


export function About() {
  const teamMembers = [
    {
      name: "Eduardo Gutierrez",
      description: (
        <p>
          Eduardo, el maestro, aporta una perspectiva innovadora en el desarrollo de interfaces de usuario, garantizando que la experiencia de cada cliente sea intuitiva y amigable. Su pasión por la tecnología y su enfoque en el usuario final hacen que nuestra plataforma sea fácil de navegar.
        </p>
      ),
      github: "https://github.com/JamirGDC",
      linkedin: "https://www.linkedin.com/in/jamirgdc/",
      profilePic: "https://media.licdn.com/dms/image/D5635AQGXW0U7XhrOLA/profile-framedphoto-shrink_400_400/0/1660002772504?e=1707008400&v=beta&t=J8c8OWl339-3weTWYDWhBPk6Mf919AVK0epITOMwwno"
    },
    {
      name: "Nilson Marenco",
      description: (
        <p>
          Nilson, el arquitecto de software, es el cerebro detrás de nuestra robusta infraestructura. Con su amplia experiencia en sistemas y seguridad informática, Nilson asegura que la plataforma no solo sea eficiente, sino también segura y confiable.
        </p>
      ),
      github: "https://github.com/NilsonMarenco",
      linkedin: "https://www.linkedin.com/in/nilson-marenco-285bba290/",
      profilePic: "https://media.licdn.com/dms/image/D4E03AQHi0XQJQ8Nfzw/profile-displayphoto-shrink_800_800/0/1696945314312?e=1711584000&v=beta&t=QEV6oIyNy6ecmrddG1wijyPH1rOSaHuU2FQ6-7058k8"
    },
    {
      name: "Husseim Vargas",
      description: (
        <p>
          Husseim, el mago del backend, trabaja incansablemente para que todas las características funcionen a la perfección. Desde el sistema de chat hasta el algoritmo de calificación, Husseim se asegura de que cada componente funcione armoniosamente, ofreciendo una experiencia sin interrupciones para nuestros usuarios.
        </p>
      ),
      github: "https://github.com/husseimv",
      linkedin: "https://www.linkedin.com/in/husseim-vargas-a14b16146/",
      profilePic: "https://media.licdn.com/dms/image/D4E03AQHGhwaBQhKoFg/profile-displayphoto-shrink_400_400/0/1695539667838?e=1712188800&v=beta&t=qWhabAi8IZfXMRZIpQS6K3VDr_Lrtu9eyBW8Js2KPdY"
    },
  ];

  const [tooltipVisible, setTooltipVisible] = useState(null);

  return (
    <div className="about-container bg-blue-gray-50/50 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 p-10">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black-500 pb-4">Acerca de Nosotros</h1>
          <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: 'justify' }}>
            HomeFix es una plataforma revolucionaria diseñada para conectar a los clientes con profesionales de servicios básicos en un solo click. Nuestro objetivo es simplificar la búsqueda de expertos confiables en diversas áreas.
          </p>
          <p className="font-normal text-base leading-6 text-gray-600" style={{ textAlign: 'justify' }}>
            Entendemos la importancia de encontrar el profesional adecuado en el momento justo. Por ello, en HomeFix, facilitamos un entorno donde los clientes pueden explorar perfiles detallados de profesionales en su ciudad, leer reseñas y calificaciones, y contactarlos directamente a través de un chat integrado para solicitar sus servicios. Estamos comprometidos con la calidad y la confianza, asegurando que cada profesional en nuestra plataforma no solo sea competente, sino también recomendado por la comunidad.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-12/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black-500 pb-4">Equipo</h1>
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="mb-4 relative flex items-center justify-end"
              onMouseEnter={() => setTooltipVisible(index)}
              onMouseLeave={() => setTooltipVisible(null)}
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold mb-2">{member.name}</h2>
                <p className="font-normal text-base leading-6 text-gray-600 mb-4" style={{ textAlign: "justify-end" }}>
                  {member.description}
                </p>
              </div>
              <div className="flex items-start ml-4">
                <div className="circular-image-container">
                  <img src={member.profilePic} alt={member.name} className="circular-image" />
                </div>

                {tooltipVisible === index && (
                  <div className="flex flex-row tooltip bg-white border border-gray-300 p-3 rounded-lg absolute left-1/3 transform -translate-x-1/2 -top-0 opacity-100 transition-opacity duration-300 gap-3">
                    <p>
                      <a href={member.github} target="_blank" rel="noopener noreferrer">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4BoE0qpxWdx6TWAu8BgtWfSQKGn6hqPTOw&usqp=CAU" alt="GitHub" />
                      </a>
                    </p>
                    <p>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="data:image/png;base64,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" alt="LinkedIn" />
                      </a>
                    </p>
                  </div>


                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default About;
