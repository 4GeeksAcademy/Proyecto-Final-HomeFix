import React from "react";
import "../styles/politicaprivacidad.css";

const PoliticaPrivacidad = () => {
  return (
    
      <div className="max-w-2xl w-full bg-blue-gray-50/50 shadow-lg rounded-lg p-10"style={{ borderRadius: "10px", padding: "20px", maxWidth: "800px", margin: "auto", marginTop: "50px" }}>
        <h2 className="text-2xl font-bold mb-4 text-center">Política de Privacidad</h2>
        <p className="text-gray-600 mb-4 text-justify">
          Tu privacidad es importante para nosotros. Esta política de privacidad
          explica cómo recopilamos, almacenamos, usamos y divulgamos tu información
          cuando utilizas nuestro sitio web o servicios.
        </p>
        <p className="text-gray-600 mb-4 text-justify">
          Recopilamos información cuando te registras en nuestro sitio, inicias
          sesión en tu cuenta, participas en encuestas o interactúas con nuestras
          características.
        </p>
        <p className="text-gray-600 mb-4 text-justify">
          Utilizamos la información recopilada para personalizar tu experiencia,
          mejorar nuestro sitio y proporcionar contenido y publicidad relevantes.
        </p>
        <p className="text-gray-500">Última actualización: [Enero 2024]</p>
      </div>
   
  );
};

export default PoliticaPrivacidad;
