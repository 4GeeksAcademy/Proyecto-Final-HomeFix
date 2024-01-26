import React from 'react';

const SearchBar = () => {
  const provinces = ["Álava", "Albacete", "Alicante", "Almería", "Ávila", "Badajoz", "Barcelona", "Burgos", "Cáceres", "Cádiz", /* ... y otras provincias de España */];
  const professions = ["Albañilería", "Carpintería", "Cerrajería", "Electricista", "Fontanería", "Jardinería", "Limpieza", "Manitas", "Pintor", "Mudanzas", "Pintura", "Reformas", "Refrigeración"];

  const handleApplyFilter = () => {
    // Implementa la lógica para aplicar el filtro aquí
    console.log("Filtro aplicado");
  };

  return (
    <div className="flex content-center justify-center h-[3rem]">
      <div className="max-w-full mx-auto flex flex-row">
        <input
          type="text"
          placeholder="Buscar..."
          className="w-full border pl-[20px] rounded-l-full focus:outline-none focus:ring focus:border-orange-300"
        />
        <div className="flex">
          <select className="w-105 border">
            <option value="">Ciudad</option>
            {provinces.map((province) => (
              <option key={province} value={province}>{province}</option>
            ))}
          </select>
          <select className="w-105 border">
            <option value="">Categorías</option>
            {professions.map((profession) => (
              <option key={profession} value={profession}>{profession}</option>
            ))}
          </select>
        </div>
        <button
          className="flex justify-center items-center w-16 px-4 py-2 rounded-r-full bg-[#2A2A2A] text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={handleApplyFilter}
        >
          Aplicar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
