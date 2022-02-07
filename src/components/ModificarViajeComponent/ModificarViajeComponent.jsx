import './ModificarViajeComponent.css'
import ColoredLine from '../ColoredLine/ColoredLine';
import InputsComponent from './InputsComponent/InputsComponent';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Select,
    Button,
    Checkbox,
    Input, InputGroup, InputLeftAddon,
    Textarea,
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
                    <p className='parrafo-2'>Vehiculo:</p>
                    <div className='slect-container'>
                        <Select className='select' placeholder='Seleccione un vehiculo'>
                            <option value='option1'>Corsa</option>
                            <option value='option2'>Corsa 2</option>
                            <option value='option3'>Corsa 3</option>
                        </Select>
                    </div>
                    <p className='parrafo'>Maximo de pasajeros:</p>
                    <div>
                    <NumberInput className='input' size='sm' maxW={20} defaultValue={0} min={0} max={4}>
                        <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    </div>
                    <div className='input-precio'>
                        <InputGroup>
                            <InputLeftAddon children='$' />
                            <Input type='number' placeholder='Precio' />
                        </InputGroup>
                    </div>
                    <div className='checkbox-container'>
                        <Checkbox defaultIsChecked>Equipaje</Checkbox>
                    </div>    
                </div>
                <div className='textarea-conteiner'>
                    <span className='span-container'>Observaciones:</span>
                    <Textarea className='textarea' placeholder='Escriba Aquí...' />
                </div>
                <div>
                    <a href="/viajes"> <Button>Volver</Button> </a>
                    <a href="/"><Button>Home</Button></a>
                </div>
            </div>
        </>
    )
}

export default ModificarViajeComponent;