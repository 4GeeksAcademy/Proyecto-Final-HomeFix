import React from 'react';

const Contactanos = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contáctanos</h1>

      <p className="mb-4">
        ¿Tienes preguntas o comentarios? ¡Estamos aquí para ayudarte! Ponte en
        contacto con nosotros a través del siguiente correo electrónico:
      </p>

      <a
        href="mailto:info@homefix.es"
        className="text-blue-500 hover:underline font-bold"
      >
        info@homefix.es
      </a>
    </div>
  );
};

export default Contactanos;
