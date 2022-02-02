import './MenuComponent.css'
import { Button, Stack, Text } from '@chakra-ui/react'
import GrillaComponent from '../GrillaComponent/GrillaComponent';


const MenuComponent = () => {

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
                </Stack>
                {/* <GrillaComponent columns={columns}></GrillaComponent> */}
            </div>
        </>
    )
}

export default MenuComponent;