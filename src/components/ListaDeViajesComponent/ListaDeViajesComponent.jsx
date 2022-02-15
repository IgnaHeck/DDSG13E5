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

    // const rows = [[]]
    const inputRef = useRef('');
    const { getViajeByConductorID } = useStorage();
    const [viajes, setViajes] = useState([]);
    const [filteredRows, setFilteredRows]= useState([]);
    const [rows, setRows] = useState([]);
    // const viajeRef = useRef(null);

    useEffect(()=>{
        const conductorID = 1
        getViajeByConductorID(conductorID).then((viajes) =>{
            const viajesArray = []
            for (let i = 0; i < viajes.length; i++) {
                viajesArray[i] = viajes[i];
            }
            setViajes(viajesArray)
            cargarViajes(viajesArray)
        })
        const eliminarModalBody = "Esta seguro que desea eliminar este viaje?"
        var rowsList = []
        const cargarViajes = (viajesArray) => {
            for (let i = 0; i < viajesArray.length; i++) {
                rowsList[i] = [
                    viajesArray[i].id, 
                    viajesArray[i].DireccionOrigen.calle, 
                    viajesArray[i].DireccionOrigen.altura, 
                    viajesArray[i].DireccionOrigen.Localidad.nombre, 
                    viajesArray[i].DireccionOrigen.Localidad.Provincia.nombre, 
                    viajesArray[i].DireccionDestino.calle, 
                    viajesArray[i].DireccionDestino.altura, 
                    viajesArray[i].DireccionDestino.Localidad.nombre, 
                    viajesArray[i].DireccionDestino.Localidad.Provincia.nombre, 
                    viajesArray[i].estado, 
                    <div className="acciones-btn"><a href={`/ver-viaje/${viajesArray[i].id}`}><Button>Ver</Button></a>
                        <a href="/modificar-viaje"><Button mx={1}>Edit</Button></a>
                        <ModalComponent m={0} display="flex" title='Eliminar Viaje?' actionButton='Eliminar' aceptarButton="red" cancelButton="Cancelar" modalBody={eliminarModalBody} text='Eliminar'/>
                    </div>]
            }
            setRows(rowsList)
            setFilteredRows(rowsList)
        }
    },[])



    const buscarViaje = () => {
        var listaFiltrada = []
        if (inputRef.current.value !== '') {
            for (let i = 0; i < rows.length; i++) {
                if (
                    rows[i][1].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][2].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][3].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][4].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][5].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][6].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][7].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][8].toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
                    rows[i][9].toLowerCase().includes(inputRef.current.value.toLowerCase()) 
                    ) {
                    listaFiltrada[i] = rows[i]
                }
            }
            setFilteredRows(listaFiltrada)
        } else {
            setFilteredRows(rows)
        }
    }

    return(
        <>
            <div className='lista-viajes-component-container'>
                <div className="busqueda-container">
                    <Input ref={inputRef} bg='white' placeholder="Buscar viaje..." onChange={buscarViaje}></Input>
                    <a className="programar-viaje-mas-button" href="modificar-viaje">+</a>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={filteredRows} size='sm'></GrillaComponent>
                </div>
                <div className='home-ref-button'>
                    <a className="" href="/"><Button>Home</Button></a>
                </div>
            </div> 
        </>
    )
}

export default ListaDeViajesComponent;