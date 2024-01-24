// src/components/SearchBar.js
import React from 'react';

const SearchBar = () => {
  const provinces = ["Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", /* ... y otras provincias de España */];
  const professions = ["Fontanero", "Electricista", "Albañil", "Carpintero", "Arquitecto", "Diseñador de interiores", "Plomero", "Jardinero", "Pintor", "Ingeniero civil", "Mecánico", "Diseñador de paisajes", "Técnico en climatización", "Instalador de sistemas de seguridad", "Instalador de sistemas eléctricos", /* ... y otras profesiones */];

  const handleApplyFilter = () => {
    // Implementa la lógica para aplicar el filtro aquí
    console.log("Filtro aplicado");
  };

  return (
    <div className="flex content-center justify-center h-[3rem]">
      <div className="max-w-xl mx-auto flex flex-row">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border pl-[20px] rounded-l-full focus:outline-none focus:ring focus:border-orange-300"
        />
        <div className="flex">
          {/* Filtro de Provincias */}
          <select className="w-1/2 border">
            <option value="">provincia</option>
            {provinces.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>

          {/* Filtro de Profesiones */}
          <select className="w-1/2 border">
            <option value="">profesion</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </select>
        </div>

        {/* Botón Aplicar */}
        <button
          className="px-4 py-2 rounded-r-full bg-[#2A2A2A] text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleApplyFilter}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
