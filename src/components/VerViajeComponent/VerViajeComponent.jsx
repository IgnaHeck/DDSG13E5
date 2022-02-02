import './VerViajeComponent.css';
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import MockData from '../../assets/MOCK_DATA.json';
import { Button } from '@chakra-ui/react';
import React from 'react';

const VerViajeComponent = () => {

    const columns = [
        'DNI',
        'Apellido',
        'Nombre',
        'Edad',
        'Fotografia',
        'Estado',
        'Acciones'
    ];
    
    const rows = [[]]

    MockData.forEach((e, index) =>{
        rows.push([e.DNI, e.apellido, e.nombre, e.edad, e.foto, e.estado, [<ModalComponent text="Aceptar"/>,<ModalComponent text="Rechazar"/>]])
    })

    return(
        <>
            <div className='ver-viaje-container'>
                <a className="home-ref" href="/"> Home </a>
                <GrillaComponent columns={columns} rows={rows}></GrillaComponent>
            </div>
        </>
    )
}

export default VerViajeComponent;