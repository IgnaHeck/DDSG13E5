import './ListaDeViajesComponent.css'
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import { Input, Button } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import ModalComponent from '../ModalComponent/ModalComponent';
import useStorage from '../../hooks/useStorage';

const ListaDeViajesComponent = () => {
    const columns = [
        'ID',
        'Calle O.',
        'Altura O.',
        'Localidad O.',
        'Provincia O.',
        'Calle D.',
        'Altura D.',
        'Localidad D.',
        'Provincia D.',
        'Estado',
        'Acciones'
    ];

    const rows = [[]]

    const { getViajeByConductorID } = useStorage();
    const [viajes, setViajes] = useState([]);
    // const viajeRef = useRef(null);

    useEffect(()=>{
        const conductorID = 1
        getViajeByConductorID(conductorID).then((viajes) =>{
            const viajesArray = []
            for (let i = 0; i < viajes.length; i++) {
                viajesArray[i] = viajes[i];
            }
            setViajes(viajesArray)
        })
    },[])

    const eliminarModalBody = "Esta seguro que desea eliminar este viaje?"

    viajes.forEach((viaje, index) =>{
        rows.push([
            viaje.id, 
            viaje.DireccionOrigen.calle, 
            viaje.DireccionOrigen.altura, 
            viaje.DireccionOrigen.Localidad.nombre, 
            viaje.DireccionOrigen.Localidad.Provincia.nombre, 
            viaje.DireccionDestino.calle, 
            viaje.DireccionDestino.altura, 
            viaje.DireccionDestino.Localidad.nombre, 
            viaje.DireccionDestino.Localidad.Provincia.nombre, 
            viaje.estado, 
            [<a href="/ver-viaje">Ver-</a>,
            <a href="/modificar-viaje">Edit-</a>,
            <ModalComponent title='Eliminar Viaje?' actionButton='Eliminar' modalBody={eliminarModalBody} text='Eliminar'/> ]])
    })

    return(
        <>
            <div className='lista-viajes-component-container'>
                <div className="busqueda-container">
                    <Input bg='white' placeholder="Buscar viaje..."></Input>
                    <a className="programar-viaje-mas-button" href="modificar-viaje">+</a>
                </div>
                <div className="etiquetas-container">
                    <p className="etiqueta1">Origen</p>
                    <div className="vl"></div>
                    <p className="etiqueta2">Destino</p>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={rows} size='sm'></GrillaComponent>
                </div>
                <div className='home-ref-button'>
                    <a className="" href="/"><Button>Home</Button></a>
                </div>
            </div>
            
        </>
    )
}

export default ListaDeViajesComponent;