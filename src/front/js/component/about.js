import React, { useState } from "react";
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
    <div className="about-container 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 p-10">
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
              <div className="flex items-start ml-4">
                <div className="circular-image-container">
                  <img src={member.profilePic} alt={member.name} className="circular-image" />
                </div>

                {tooltipVisible === index && (
                  <div className="flex flex-row tooltip bg-white border border-gray-300 p-2 rounded-lg absolute left-1/3 transform -translate-x-1/2 top-1/1 opacity-100 transition-opacity duration-300 max-w-30">
                  <p>
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <img src="data:image/png;base64,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" alt="GitHub" />
                    </a>
                  </p>
                  <p>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEUKZsL///8AXsCmvOIAZMGrxOYpdMcAY8LL3vG/1e4Zb8UAYMBLic/q8vr3+/16o9miwebh6/Zij9AAWr6oyOkAWL5Lg8yXveTc5POxyugTbMVSh813p9xomNQEacNDfsqCrd4xesrE2e/U5PRXldRwn9gYdMiKs+DP3PDn7/nX6PY+hs9bi89Be8mswOOfv+TU3GciAAAGgElEQVR4nO3da0OqMBgHcFiTARMKCRUTE808aeX3/3YHTPMS8jxYp22c5/+uFyC/xmXshmW3PdbxH+HKSzumJ/VW4QXhfe8hH1nC8HDLf3voeRXCyI+l4JxbpqcwCJnk0Zkw3IyE6kP70Qi/cyoct6DwTiMm42PhOGkbsDhbk+lBmE7aByyIk3QvDJx2XYP7iDzYCbtS9bH8o7DsQxjFqo/knyUJtsJxW4vQsuR0K3xt51VYRvSDQhg+tFdo+bNCGPTbK+RW2nKhxW4K4Txv4+N+l63Q80locEhofkhofkhofkhofkhofkhYHZOa/hsLuWTM958nMZNmKJsJuWBykQ6jIsPBE49NQDYSCqs7OO6X8zJHf2MDIZe5d9LxWMTNhO5EvJCzcWR/SdixNG/jQQuFn371lQlyvYlYoci9aqBtRz2tiUghH10EFkStSxEpZBdO0d3FqHPnI07IFnVA2041ruOghMKpuIueFGKmb+cVRsh5px5YPBcdbQsRIxSPASS0F9oWIkYopyDQdpPfOuKmwQhj4Crc5lnX0xQhFGsE0B6wXzvmZkEI5RIjHOp6miKEDLyTlol0PU0RwvgPSqhrWw9GOMQIXx41rZz+mNDkMqyvdX8KDb4OkfdSXSs1mOdhFyNMDX4ecokRalsxxdTakjlC+FsH3Diomjfw/lvG03b8Jur98A2ueuv7Cox6x5cbCDjT9WmIFPIRcCWGPW2LENkSJYEHxkBfILY1Mb6rA660PUUtfIswryGutJ7KgG3V55OLxLne42/RPTMXS1HvEmzWu5atvvqCpdQb2KgPWPqds4bTMO0yne8yZRr1cnP+OD2u3gy6unePWs1HKki2HsyGRdJxnjDtu7ita8bTCBaXYbpff/vQmCjzQ0LzQ0LzQ0LzQ0I14eXaHeUiJD8wGFk7YVn15RPHyfv9N8dxJhNZ1A+/c3h6CbmMR+vFeyd13XkQRK7rpun7zaI7Yde/pOGEHF70pvlW59sUPP6URsH5KF07DKLZ8vnaNxlce6n/2qvNa9WQKP5Wv9Hj6TYyX9QPD7x/vWrMNW5cW/fL//UstxUNpuy9fpuT/jjOehVtJGdxb56bn61IITDsK6wU3tRvdH8QcjbawCPLikRL2bQctRAKf4zhffxUNmn26q2DkHVnaGCRNG/Uh6BeKJMMdYIeEuVNVnxSLeRygelhPks6whMVC7lAjOysyBI/LkKxUE6h59CF4K9FtUJ2eyXQDtbYO6pSoXy80lfEw16KKoXxyL1eaI+Rl6JSIWrA3MUgX4gUCu/A2m59kOPMFApnjWoyFT+KG8OjUPjteKjpViYLwy7miWGyEDcDwmihjXkfNlv4hLjXmC30ENNYzBZipkCYLaz83VYJ7bvWC2d+24WIVTs1Es7TwXg6nS7vmzTcwKsdaCIM58tRwpgswljC1h62+W0JXoh6CL1beVw94UKuawclHwK/QmkhzEZfmuqFWKCKcQ4+8zUQzvOq6iVnfbirpogBQte5cCnJPqYNAF7SQ7nwEtCyYsy0QLBVUbmw5vVg92WD+oBz5lQLa786ITP4PAUfF4qFQW1DBJfwFOQN9LhQLLyvvxXKJ3APf6BpgYqFwH0CMX0VXMtBrTCEDi8G21SHep+lYDcgvHAMOEterRB8MxA9UAiucaVSGIDNLOX3N0wWImYFOlAHXAStUKVU2IEnBfo1K+FtU/9EVS28AV/u4Iqb1kJMW6CEdqK3ENEBCO5EayF4cBY8wFFzIWLEiITGo2gtxCzaY7gQMZqChCQkIQlJSEISkpCEJCQhCUlIQhKSkIQkJCEJSUhCEpKQhCQkIQlJSEISkpCEJCQhCUlIQhKSkIQkJCEJSUjC/1N41WrX9gtqNgKwk58R8nxwV5tN1c+IrH6juyVigU7R3dTvZJD/xOw8i0tWn8r/owA2Qq3M/e2d4IQmh4Tmh4Tmh4Tmh4Tmh4Tmh4Tmh4Tm5z8RutAqNiZnK0SsVWtuWi/kPC2E4UOLhY5bCO3X9gpFPyyF40ZfMjMq5Zp2hTC4/iOYmoezYCu0F/ivfJkVVraZl8KV084rUTjRTli/Fqyx4aPtgnZbob1BfAzDuMQf655/CO1p3LZSFPvFpHdCO7287rSJ4TLfr0i4F9pur7oPycgI2fv8xsKn0A7TPCm/gm16hGTJ2jt0Hh+ERaJBtv3it8l562eDl2PUibDsNy6/+G1yovM++XNh+/IXC1XY2O8rZJcAAAAASUVORK5CYII=" alt="LinkedIn" />
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
