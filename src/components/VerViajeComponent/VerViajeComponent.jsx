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
    
    const aceptarModalBody = "Esta seguro que desea aceptar al pasajero?"
    const rechazarModalBody = "Esta seguro que desea rechazar al pasajero?"

    MockData.forEach((e, index) =>{
        rows.push([
            e.DNI, 
            e.apellido, 
            e.nombre, 
            e.edad, 
            <img src={e.foto} alt="Profile image"></img>, 
            e.estado, 
            [
                <ModalComponent title="Aceptar?" actionButton="Aceptar pasajero" modalBody={aceptarModalBody} text="Aceptar"/>,
                <ModalComponent title="Rechazar?" actionButton="Rechazar pasajero" modalBody={rechazarModalBody} text="Rechazar"/>
            ]])
    })

    return(
        <>
            <div className='ver-viaje-container'>
                <GrillaComponent columns={columns} rows={rows}></GrillaComponent>
                <a href="/viajes"> <Button>Volver</Button> </a>
                <a href="/"><Button>Home</Button></a>
            </div>
        </>
    )
}

export default VerViajeComponent;