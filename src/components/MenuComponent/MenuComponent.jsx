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

const MenuComponent = () => {
    const {getMarcas,
        getModelos,
        getVehiculo,
        getConductores,
        getPasajeros,
        getPersonas,
        getProvincias,
        getLocalidades,
        getViajes
    } = useStorage();

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

    MockMenu.forEach((e, index) =>{
        rows.push([index, e.calleo, e.alturao, e.localidado, e.provinciao, e.calle, e.altura, e.localidad, e.provincia, e.estado, [<a href="/ver-viaje">Ver Viaje</a>]])
    })

    const handleOnClick = () => {
        console.log("click!")
        getLocalidades("1").then((resp) => {
            console.log(resp)
        })
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
                    <a href="/modificar-viaje"><Button>Programar Viaje</Button></a>
                    <a href="/vehiculos"><Button>Tus Vehiculos</Button></a>
                    <a href="/nuevo-vehiculo"><Button>Agregar Vehiculo</Button></a>
                    <Button onClick={handleOnClick}>DB</Button>
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
                    <Input placeholder="Buscar viaje..."></Input>
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