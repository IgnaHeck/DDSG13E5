import './MenuComponent.css'
import { Button, Stack, Text, Input, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
    } from '@chakra-ui/react'
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import useStorage from '../../hooks/useStorage'
import { useEffect, useState, useRef } from 'react';

const MenuComponent = () => {
    const { getViajes } = useStorage();
    const [rows, setRows] = useState([]);
    const [filteredRows, setFilteredRows]= useState([]);
    const inputRef = useRef('')

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
        'Conductor', 
        'Acciones'
    ];

    useEffect(()=>{
        getViajes().then((viaje) =>{
            const listaViajes = []
            for (let i = 0; i < viaje.length; i++) {
                listaViajes[i] = [
                    viaje[i].id,
                    viaje[i].DireccionOrigen.calle, 
                    viaje[i].DireccionOrigen.altura, 
                    viaje[i].DireccionOrigen.Localidad.nombre, 
                    viaje[i].DireccionOrigen.Localidad.Provincia.nombre, 
                    viaje[i].DireccionDestino.calle, 
                    viaje[i].DireccionDestino.altura, 
                    viaje[i].DireccionDestino.Localidad.nombre, 
                    viaje[i].DireccionDestino.Localidad.Provincia.nombre,
                    [viaje[i].Conductor.Persona.nombre," ",viaje[i].Conductor.Persona.apellido], 
                    [<a href="/error">Ver Viaje</a>]
                ]
            }
            setRows(listaViajes)
            setFilteredRows(listaViajes)
        })

    },[]);

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
                    rows[i][9][0].concat(rows[i][9][1]).concat(rows[i][9][2]).toLowerCase().includes(inputRef.current.value.toLowerCase()) 
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
            <div className='menu-component-container'>
            <Text
                bgGradient='linear(to-l, #aaa5ff, #00d4ff)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >'Subi que te llevo'</Text>
                <Stack spacing={3} direction='row' aling='center'>
                    <a href="/viajes"><Button>Tus Viajes</Button></a>
                    <a href="/crear-viaje"><Button>Programar Viaje</Button></a>
                    <a href="/vehiculos"><Button>Tus Vehiculos</Button></a>
                    <a href="/nuevo-vehiculo"><Button>Agregar Vehiculo</Button></a>
                    <Menu>
                        <MenuButton><Button>≡</Button></MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem>Tu perfil</MenuItem>
                                <MenuItem>Registrarse como conductor</MenuItem>
                                <MenuItem>Log out</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Stack>
                <div className="busqueda-container">
                    <Input ref={inputRef} bg='white' placeholder="Buscar viaje..." onChange={buscarViaje}></Input>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={filteredRows}></GrillaComponent>    
                </div>
            </div>
        </>
    )
}

export default MenuComponent;