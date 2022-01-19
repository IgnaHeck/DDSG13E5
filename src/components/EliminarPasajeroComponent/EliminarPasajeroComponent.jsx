import './EliminarPasajeroComponent.css'
import { Button, Stack } from '@chakra-ui/react'

const EliminarPasajeroComponent = () => {
    //Javascript

    return(
        <>
            {/* Codigo JSX (Que es parecido a HTML pero NO ES HTML)*/}
            <div className='eliminar-pasajero-component-container'>
                ¿Seguro desea eliminar este pasajero?
                <Stack spacing={10} direction='row' aling='center'>
                    <Button className='btn-opcion'>Eliminar</Button>
                    <Button className='btn-opcion'>Cancelar</Button>
                </Stack>
            </div>
        </>
    )
};

export default EliminarPasajeroComponent;