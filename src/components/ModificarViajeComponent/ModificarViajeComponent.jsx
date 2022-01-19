import './ModificarViajeComponent.css'
import ColoredLine from '../ColoredLine/ColoredLine';
import InputsComponent from './InputsComponent/InputsComponent';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react';

const ModificarViajeComponent = () => {

    return(
        <>
            <div className='modificar-viaje-container'>
                <span className='span-container'>Origen:</span>
                <InputsComponent/>
                <span className='span-container'>Destino:</span>
                <InputsComponent/>
                <ColoredLine color='gray' height='2px'/>
                <div className='segunda-parte'>
                    <p className='parrafo'>Maximo de pasajeros:</p>
                    <NumberInput className='input' size='sm' maxW={20} defaultValue={0} min={0}>
                        <NumberInputField />
                        <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    <p className='parrafo-2'>Vehiculo:</p>
                </div>
            </div>
        </>
    )
}

export default ModificarViajeComponent;