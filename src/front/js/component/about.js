import React, { useState } from "react";
import Avatar from "react-avatar";
import "../styles/about.css";

const About = () => {
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
    },
  ];

  const [tooltipVisible, setTooltipVisible] = useState(null);

  return (
    <div className="about-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-black-500 pb-4">Acerca de Nosotros</h1>
          <p className="font-normal text-base leading-6 text-gray-700 mb-4" style={{ textAlign: 'justify' }}>
            HomeFix es una plataforma revolucionaria diseñada para conectar a los clientes con profesionales de servicios básicos en un solo click. Nuestro objetivo es simplificar la búsqueda de expertos confiables en diversas áreas.
          </p>
          <p className="font-normal text-base leading-6 text-gray-700" style={{ textAlign: 'justify' }}>
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
                <p className="font-normal text-base leading-6 text-gray-700 mb-4" style={{ textAlign: "justify-end" }}>
                  {member.description}
                </p>
              </div>
              <div className="flex items-end ml-4"> 
                <Avatar name={member.name} size="80" round={true} />
                {tooltipVisible === index && (
                  <div className="tooltip bg-white border border-gray-300 p-4 rounded-lg absolute left-1/2 transform -translate-x-1/2 top-1/3 opacity-100 transition-opacity duration-300 w-72">
                    <p>
                      GitHub: <a href={member.github}>GitHub</a>
                    </p>
                    <p>
                      LinkedIn: <a href={member.linkedin}>LinkedIn</a>
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