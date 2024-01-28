import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Routes, Route } from 'react-router-dom';
import PerfilComponent from '../component/PerfilComponent';
import ChatComponent from '../component/ChatComponent';
import NuevaPublicacion from '../component/NuevaPublicacion';
import Cartera from '../component/cartera';

import ProfileContent from '../component/profilecontent'

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('perfil');

  useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (path.includes('chat')) {
      setActiveTab('chat');
    } else if (path.includes('publicaciones')) {
      setActiveTab('publicaciones');
    } else if (path.includes('nuevapublicacion')) {
      setActiveTab('nuevapublicacion');
    } else if (path.includes('perfil-profesional')) {
      setActiveTab('perfil-profesional');
    } else {
      setActiveTab('perfil');
    }
  }, [location]);

  const handleTabClick = (tab) => {
    navigate(`/profile/${tab.toLowerCase()}`);
    setActiveTab(tab);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-8">
      <div className="flex space-x-4">
        <button
          onClick={() => handleTabClick('perfil')}
          className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'perfil' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Perfil
        </button>
        <button
          onClick={() => handleTabClick('cartera')}
          className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'cartera' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Cartera
        </button>
        <button
          onClick={() => handleTabClick('chat')}
          className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'chat' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Chat
        </button>
        <button
          onClick={() => handleTabClick('publicaciones')}
          className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'publicaciones' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Mis Publicaciones
        </button>
        <button
          onClick={() => handleTabClick('nuevapublicacion')}
          className={`px-4 py-2 rounded focus:outline-none ${activeTab === 'nuevapublicacion' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Subir Publicación
        </button>
      </div>

      <div className="mt-4">
      <Routes>
          <Route path="/" element={<ProfileContent />} />
          <Route path="chat" element={<ChatComponent />} />

          <Route path="nuevapublicacion" element={<NuevaPublicacion />} />
        </Routes>
      </div>
    </div>
  );
};

export default Profile;