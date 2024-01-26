import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/profilecontent.css";
import profilePicture from '../../img/profile-picture.jpg';

const ProfileContent = () => {
  const location = useLocation();
  const professional = location.state?.professional;

  if (!professional) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4">Perfil del Profesional</h1>
        <p>No se han proporcionado datos del profesional</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Perfil del Profesional{professional.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div>
          <p className="mb-1"><strong>Nombre:</strong> Luis Jimenez{professional.name}</p>
          <p className="mb-1"><strong>Email:</strong> {professional.email}</p>
          <p className="mb-1"><strong>Ubicación:</strong> Madrid</p>
          <p className="mb-1"><strong>Habilidades:</strong> Electricista, pintor.</p>
          <p className="mb-1"><strong>Número de teléfono:</strong> +34 634 589 822</p>
          <p className="mb-1"><strong>Información adicional:</strong> Loren ipsum, Loren ipsum, Loren ipsum</p>
        </div>

        <div>
          <div className="image-container">
            <img 
              src={professional.profilePicture || 'profile-picture.jpg'}
              alt="Perfil"
              className="profile-image"
            />
          </div>
          <p className="text-xs">Miembro desde el 2024</p>
        </div>

        <div className="col-span-2">
          <h2 className="text-lg font-semibold">Trabajos Realizados</h2>
        </div>

      </div>
    </div>
  );
};

export default ProfileContent;
