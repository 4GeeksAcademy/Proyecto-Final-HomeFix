import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilePicture from "../../img/profile-picture.jpg";
import "../styles/card.css";

const Card = () => {
  return (<>
    <div className="card ">
      <img className="w-full h-full object-cover" src={profilePicture} alt="" />
      <div className="p-3 flex-col gap-3">

        <div className="flex items-center gap-2">
          <span className="badge">Fontaneria</span>
          <span className="badge">Electricidad</span>
        </div>

        <h2 className="product-title" title="Best Headphone">
          Electricista Fontanero
        </h2>

        <div>
          <span className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum soluta inventore ullam. Voluptatem culpa.
          </span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm line  opacity-50">
              A Coruña
            </span>
            <span className="discount-percent">
              A 20km de ti
            </span>
          </div>
        </div>
        <span className="flex items-center mt-1">
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>
          <span>⭐️</span>

          <span className="text-xs ml-2 text-gray-500">

            50 comentarios
          </span>
        </span>

        <div className="mt-3 flex gap-2">
          <button className="button-primary">
            Contactar
          </button>

          <button className="button-icon">
            <span className="opacity-50">♥️</span>

          </button>
          <button className="button-icon">
            <span className="opacity-50">👁️</span>

          </button>
        </div>
      </div>

    </div>
  </>);
};

export default Card;