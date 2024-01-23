import React from 'react';
import "../styles/professions.css";

import AlbanileriaICO from '../../img/icono_albanileria.png';
import CarpineriaICO from '../../img/icono_carpinteria.png';
import CerrajeriaICO from '../../img/icono_cerrajeria.png';
import ElectricistaICO from '../../img/icono_electricista.png';
import FontaneriaICO from '../../img/icono_fontaneria.png';
import JardineriaICO from '../../img/icono_jardineria.png';
import LimpiezaICO from '../../img/icono_limpieza.png';
import ManitasICO from '../../img/icono_manitas.png';
import MudanzasICO from '../../img/icono_mudanzas.png';
import PinturaICO from '../../img/icono_pintura.png';
import ReformasICO from '../../img/icono_reformas.png';
import RefrigeracionICO from '../../img/icono_refrigeracion.png';

const Professions = () => {

    const categories = [
        { name: 'Albañilería', image: AlbanileriaICO },
        { name: 'Carpintería', image: CarpineriaICO },
        { name: 'Cerrajería', image: CerrajeriaICO },
        { name: 'Electricista', image: ElectricistaICO },
        { name: 'Fontanería', image: FontaneriaICO },
        { name: 'Jardinería', image: JardineriaICO },
        { name: 'Limpieza', image: LimpiezaICO },
        { name: 'Manitas', image: ManitasICO },
        { name: 'Mudanzas', image: MudanzasICO },
        { name: 'Pintura', image: PinturaICO },
        { name: 'Reformas', image: ReformasICO },
        { name: 'Refrigeración', image: RefrigeracionICO },
    ];

    return (
        <>
            <div className='w-[90%] mx-auto my-5 flex flex-col justify-center'>
                <h1 className='mb-3 text-center'>Categorías</h1>
                <div className='categories-container flex flex-wrap justify-center gap-4'>
                    {categories.map((category, index) => (
                        <div key={index} className='category-item flex flex-col items-center' style={{ width: '16.66%', padding: '10px' }}>
                            <img src={category.image} alt={category.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    maxWidth: '100px',
                                    maxHeight: '100px',
                                    filter: 'grayscale(100%)'
                                }}
                            />
                            <p className='text-center' style={{ marginTop: '10px' }}>{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Professions;
