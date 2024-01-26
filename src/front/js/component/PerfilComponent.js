// ProfileContent.js
import React from "react";
import profilePicture from "../../img/profile-picture.jpg";

const PerfilComponent = () => {
  const handleChangePhoto = () => {
    // Agrega aquí la lógica para cambiar la foto, por ejemplo, abrir un diálogo para seleccionar una nueva foto.
    console.log("Cambiar foto");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg p-6 mb-6">
      <img
        className="w-32 h-32 object-cover mx-auto rounded-full"
        src={profilePicture}
        alt="Imagen de perfil"
      />
      
      <div className="mt-4 text-center">
        <p className="text-lg font-semibold">nombre</p>
        <p className="text-gray-500 text-sm">uuu</p>
      </div>

      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleChangePhoto}
      >
        Cambiar Foto
      </button>
    </div>
  );
};

export default PerfilComponent;
