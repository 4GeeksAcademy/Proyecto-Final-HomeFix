import React from "react";
import { useLocation } from "react-router-dom";

const ProfileContent = () => {
  const location = useLocation();
  const professional = location.state?.professional;

  console.log("Professional data:", professional);
  console.log("Location state:", location.state);

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
      <h1 className="text-xl font-bold mb-4">Perfil del Profesional</h1>
      <div>
        <p><strong>Nombre:</strong> {professional.name}</p>
        <p><strong>Email:</strong> {professional.email}</p>
      </div>
    </div>
  );
};

export default ProfileContent;
