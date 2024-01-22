// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import profilePicture from "../../img/profile-picture.jpg";
// import cityPicture from "../../img/ciudad.jpg";
// import "../styles/lobby.css";
// import Card from "./card";

// const Lobby = () => {
//   return (<>
//     <div className="">
//       <div className="mt-10">
//         <h1><b>Profesiones</b></h1>
//         <Carousel
//           showArrows={true}
//           emulateTouch={true}
//           showThumbs={false}
//           infiniteLoop={true}
//           showStatus={false}
//           showIndicators={false}
//           centerMode={true}
//           centerSlidePercentage={20}
//           selectedItem={2}
//          >
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>
//             <Card/>

//         </Carousel>
//       </div>
//       <div className="lobby">
//         <h1><b>Ciudades</b></h1>
//         <Carousel
//           showArrows={true}
//           emulateTouch={true}
//           showThumbs={false}
//           infiniteLoop={true}
//           showStatus={false}
//           showIndicators={false}
//           centerMode={true}
//           centerSlidePercentage={20}
//           selectedItem={2}
//         >
//           <div>
//             <img src={cityPicture} alt="Imagen 1" />
//             <button className="legend-button">Alicante</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 2" />
//             <button className="legend-button">Bilbao</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 3" />
//             <button className="legend-button">Cordoba</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 4" />
//             <button className="legend-button">Madrid</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 5" />
//             <button className="legend-button">Sevilla</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 6" />
//             <button className="legend-button">Malaga</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 7" />
//             <button className="legend-button">Santander</button>
//           </div>
//           <div>
//             <img src={cityPicture} alt="Imagen 8" />
//             <button className="legend-button">Barcelona</button>
//           </div>
//         </Carousel>
//       </div>
//     </div>
//   </>);
// };

// export default Lobby;



import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import profilePicture from "../../img/profile-picture.jpg";
import cityPicture from "../../img/ciudad.jpg";
import "../styles/lobby.css";
import Card from "./card";

const Lobby = () => {
  return (<>
    <div class="w-[100vw] min-h-screen bg-gray-100 flex flex-column justify-center items-center">
      <div classname="">


        <div class="w-[100%] flex content-center justify-center mt-[2rem] text-3xl font-bold">
          <h1>¿En que te podemos Ayudar?</h1>
          </div>

        <div class="mt-[2rem] max-w-screen flex items-center p-2 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
          <div class="flex items-center bg-gray-100 p-2  space-x-4 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex items-center h-4 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input class="bg-gray-100 outline-none" type="text" placeholder="Article name or keyword..." />
          </div>
          <div class="flex py-2 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
            <span>¿Que estas Buscando?</span>

            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div class="bg-black py-2 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
            <span>Buscar</span>
          </div>
        </div>




      </div>
      <div className="w-[100%]flex justify-items-start mt-[3rem]">
        <h2>Ultimas Publicaciones en tu zona...</h2>
      </div>

      <div class="w-[100%] flex justify-between flex-row scale-50">
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>

      </div>

      <div class="w-[100%] mt-[2rem] flex justify-between flex-row scale-50">
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>
        <div><Card /></div>

      </div>

      <div>
        
      </div>
    </div>
  </>);
};

export default Lobby;



