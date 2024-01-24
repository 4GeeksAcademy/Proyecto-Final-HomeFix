import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilePicture from "../../img/profile-picture.jpg";
import cityPicture from "../../img/ciudad.jpg";
import "../styles/lobby.css";
import Card from "./card";

const Lobby = () => {
  return (<>
    <div className="lobby-container">
      <div className="lobby">
        <h1><b>Profesiones</b></h1>
        <Carousel
          showArrows={true}
          emulateTouch={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={20}
          selectedItem={2}
        >
          <div>
            <img src={profilePicture} alt="Imagen 1" />
            <button className="legend-button">Fontanería</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 2" />
            <button className="legend-button">Electricidad</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 3" />
            <button className="legend-button">Limpieza</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 4" />
            <button className="legend-button">Reparación</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 5" />
            <button className="legend-button">Plomería</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 6" />
            <button className="legend-button">Computación</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 7" />
            <button className="legend-button">Cerrajería</button>
          </div>
          <div>
            <img src={profilePicture} alt="Imagen 8" />
            <button className="legend-button">Calefacción</button>
          </div>
        </Carousel>
      </div>
      <div className="lobby">
        <h1><b>Ciudades</b></h1>
        <Carousel
          showArrows={true}
          emulateTouch={true}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          centerMode={true}
          centerSlidePercentage={20}
          selectedItem={2}
        >
          <div>
            <img src={cityPicture} alt="Imagen 1" />
            <button className="legend-button">Alicante</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 2" />
            <button className="legend-button">Bilbao</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 3" />
            <button className="legend-button">Cordoba</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 4" />
            <button className="legend-button">Madrid</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 5" />
            <button className="legend-button">Sevilla</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 6" />
            <button className="legend-button">Malaga</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 7" />
            <button className="legend-button">Santander</button>
          </div>
          <div>
            <img src={cityPicture} alt="Imagen 8" />
            <button className="legend-button">Barcelona</button>
          </div>
        </Carousel>
      </div>
    </div>
  </>);
};

export default Lobby;