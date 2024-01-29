import React from 'react';

import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/solid";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          &copy; {year}, Hecho con{" "}
          <HeartIcon className="-mt-0.5 inline-block h-3.5 w-3.5 text-red-600" /> por{" "}
          <a
            href={brandLink}
            target="_blank"
            className="transition-colors hover:text-blue-500 font-bold"
          >
            {brandName}
          </a>{" "}
          para 4Geeks Academy
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Los Latin  K...",
  brandLink: "https://github.com/JamirGDC/ProyectoFinal4Geeks",
  routes: [
    { name: "Jamir G.", path: "https://www.linkedin.com/in/jamirgdc/" },
    { name: "Husseim V.", path: "https://www.linkedin.com/in/husseim-vargas-a14b16146/" },
    { name: "Nilson M.", path: "https://linkedin.com/in/nilson-marenco-285bba290/" },
    // { name: "Acerca de", path: "https://www.creative-tim.com/presentation" },
    // { name: "Preguntas", path: "https://www.creative-tim.com/blog" },
    // { name: "Contacto", path: "https://www.creative-tim.com/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
