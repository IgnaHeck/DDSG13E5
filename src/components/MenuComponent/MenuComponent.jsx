import './MenuComponent.css'
import { Button, Stack, Text, Input, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Portal
    } from '@chakra-ui/react'
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import MockMenu from '../../assets/MOCK_MENU.json';
import useStorage from '../../hooks/useStorage'
import { useEffect, useState } from 'react';

const MenuComponent = () => {
    const { getViajes } = useStorage();

    const [viajes, setViajes ] = useState([]);

    const columns = [
        'ID',
        'Calle',
        'Altura',
        'Localidad',
        'Provincia',
        'Calle',
        'Altura',
        'Localidad',
        'Provincia',
        'Conductor', 
        'Acciones'
    ];
    const rows = [[]]

    useEffect(()=>{
        getViajes().then((viaje) =>{
            const listaViajes = []
            for (let i = 0; i < viaje.length; i++) {
                listaViajes[i] = viaje[i];
            }
            setViajes(listaViajes)
        })

    },[]);

    console.log(viajes)

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
            [viaje.Conductor.Persona.nombre," ",viaje.Conductor.Persona.apellido], 
            [<a href="/error">Ver Viaje</a>]])
    })

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
                    <a href="/modificar-viaje"><Button>Programar Viaje</Button></a>
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
                    <Input bg='white' placeholder="Buscar viaje..."></Input>
                </div>
                <div className="origendestino-container">
                    <p className="origin">Origen</p>
                    <div className="line"></div>
                    <p className="destiny">Destino</p>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={rows}></GrillaComponent>    
                </div>
            </div>
        </>
    )
}

export default MenuComponent;