import './MenuComponent.css'
import { Button, Stack, Text } from '@chakra-ui/react'
import GrillaComponent from '../GrillaComponent/GrillaComponent';


const MenuComponent = () => {

    return(
        <>
            <div className='menu-component-container'>
            <Text
                bgGradient='linear(to-l, #aaa5ff, #00d4ff)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >"Subi que te llevo"</Text>
                <Stack spacing={3} direction='row' aling='center'>
                    <Button>Tus Viajes</Button>
                    <Button>Programar Viaje</Button>
                    <Button>Tus Vehiculos</Button>
                    <Button>Agregar Vehiculo</Button>
                </Stack>
                <GrillaComponent></GrillaComponent>
            </div>
        </>
    )
}

export default MenuComponent;