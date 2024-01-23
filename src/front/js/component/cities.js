import React from 'react';

import BarcelonaIMG from '../../img/Barcelona.png';
import BilbaoIMG from '../../img/Bilbao.png';
import CordobaIMG from '../../img/Cordoba.png';
import MadridIMG from '../../img/Madrid.png';
import MalagaIMG from '../../img/Malaga.png';
import PalmaIMG from '../../img/Palma.png';
import SantanderIMG from '../../img/Santander.png';
import SevillaIMG from '../../img/Sevilla.png';
import ValenciaIMG from '../../img/Valencia.png';
import ZaragozaIMG from '../../img/Zaragoza.png';

const Cities = () => {

    const cities = [
        { name: 'Barcelona', image: BarcelonaIMG },
        { name: 'Bilbao', image: BilbaoIMG },
        { name: 'Cordoba', image: CordobaIMG },
        { name: 'Madrid', image: MadridIMG },
        { name: 'Malaga', image: MalagaIMG },
        { name: 'Palma', image: PalmaIMG },
        { name: 'Santander', image: SantanderIMG },
        { name: 'Sevilla', image: SevillaIMG },
        { name: 'Valencia', image: ValenciaIMG },
        { name: 'Zaragoza', image: ZaragozaIMG },
    ];

    return (
        <>
            <div className='w-[90%] m-auto'>
                <h1 className='my-3'>Ciudades</h1>
                <p>Actualmente HomeFix se encuentra en las siguientes ciudades. ¡Pronto estaremos en nuevas!</p>
                <div className='cities-container'>
                    {cities.map((city, index) => (
                        <div key={index} className='city' style={{ width: '20%', float: 'left', marginRight: '2%' }}>
                            <img src={city.image} alt={city.name} style={{ width: '100%', height: 'auto' }} />
                            <p>{city.name}</p>
                        </div>
                    ))}
                </div>
                <div style={{ clear: 'both' }}></div>
            </div>
        </>
    );
};

export default Cities;
