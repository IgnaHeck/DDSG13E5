import './EliminarViajeComponent.css'
import { Button, Stack } from '@chakra-ui/react'

const EliminarViajeComponent = () => {

    return(
        <>
            <div className='eliminar-viaje-component-container'>
                <h2 className='titulo'>¿Seguro desea eliminar este viaje?</h2>
                <Stack spacing={10} direction='row' aling='center'>
                    <Button>Eliminar</Button>
                    <Button>Cancelar</Button>
                </Stack>
            </div>
        </>
    )
}

export default EliminarViajeComponent;