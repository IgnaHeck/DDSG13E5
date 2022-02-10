import './ModificarViajeComponent.css'
import ColoredLine from '../ColoredLine/ColoredLine';
import InputsComponent from './InputsComponent/InputsComponent';
import useStorage from '../../hooks/useStorage'
import { useState, useRef, useEffect } from 'react'
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
    // Storage functions
    const { getVehiculo, getVehiculos, insertViaje, insertDireccion } = useStorage();
    // Ref declarations
    const provinciaORef = useRef();
    const provinciaDRef = useRef();
    const localidadORef = useRef();
    const localidadDRef = useRef();
    const calleORef = useRef();
    const calleDRef = useRef();
    const alturaORef = useRef();
    const alturaDRef =  useRef();

    const vehiculoRef = useRef();
    const capacidadMaximaRef = useRef();
    const precioRef = useRef();
    const equipajeRef = useRef();
    const observacionRef = useRef();
    const formRef = useRef(null);

    // useState declarations
    const [ isClicked, setClicked ] = useState(false);
    const [ vehiculoSelected, setVehiculoSelected ] = useState(null);
    const [ vehiculos, setVehiculos ] = useState([]);
    const [ isChecked, setChecked ] = useState(true);
    const [ vehicleCapacity, setCapacity ] = useState(1);
    const [ isDisabled, setDisabled ] = useState(true);
    const [ conductorID, setConductorID ] = useState(null);
    const [ origenID, setOrigenID ] = useState();
    const [ destinoID, setDestinoID ] = useState();

    const handleOnClick = () => {
        setClicked(!isClicked);
        setVehiculoSelected(vehiculoRef.current.value);
        if(vehiculoRef.current.value === ""){
            setCapacity(1);
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }

    useEffect(()=>{
        getVehiculos().then((vehiculo) => {
            const vehiculosArray = [];
            for (let i = 0; i < vehiculo.length; i++){
                vehiculosArray[i] = vehiculo[i];
            }
            setVehiculos(vehiculosArray)
        })

        getVehiculo(vehiculoSelected).then((vehiculoUnico) => {
            setChecked(vehiculoUnico[0].equipaje);
            setCapacity(vehiculoUnico[0].capacidadMaxima);
            setConductorID(vehiculoUnico[0].propietarioID)

        })   
    },[isClicked]);

    const optionsVehiculos = []
    for (let i = 0; i < vehiculos.length; i++) {
        optionsVehiculos[i] = <option key={i} value={vehiculos[i].id}>{vehiculos[i].patente}</option>
    };

    const handleSave = (e) => {
        e.preventDefault();
        if(isChecked){
            equipajeRef.current.checked = false
        }

        const localidadOrigen = localidadORef.current.value
        const localidadDestino = localidadDRef.current.value
        const calleOrigen = calleORef.current.value
        const calleDestino = calleDRef.current.value
        const alturaOrigen = alturaORef.current.value
        const alturaDestino = alturaDRef.current.value
        const vehiculoID = parseInt(vehiculoRef.current.value)
        const capacidadMaxima = parseInt(capacidadMaximaRef.current.value)
        const precioDefinido = parseFloat(precioRef.current.value)
        var equipaje = 0
        if (equipajeRef.current.checked){
            equipaje = 1
        } else {
            equipaje = 0
        }
        const observacion = observacionRef.current.value
        
        insertDireccion(alturaOrigen, calleOrigen, localidadOrigen).then(data => setOrigenID(data[0].id))
        insertDireccion(alturaDestino, calleDestino, localidadDestino).then(data => setDestinoID(data[0].id))

        console.log(origenID, destinoID)

        insertViaje(precioDefinido, observacion, 'Programado', capacidadMaxima, equipaje, origenID, destinoID, vehiculoID, conductorID)
        formRef.current.reset()
    }

    return(
        <>
            <form ref={formRef} onSubmit={handleSave} className='modificar-viaje-container'>
                <span className='span-container'>Origen:</span>
                <InputsComponent provinciaRef={provinciaORef} localidadRef={localidadORef} calleRef={calleORef} alturaRef={alturaORef}/>
                <span className='span-container'>Destino:</span>
                <InputsComponent provinciaRef={provinciaDRef} localidadRef={localidadDRef} calleRef={calleDRef} alturaRef={alturaDRef}/>
                <ColoredLine color='gray' height='2px'/>
                <div className='segunda-parte'>
                    <p className='parrafo-2'>Vehiculo:</p>
                    <div className='slect-container'>
                        <Select ref={vehiculoRef} className='select' placeholder='Seleccione un vehiculo' bg='white' variant='filled' onClick={handleOnClick}>
                            { optionsVehiculos }
                        </Select>
                    </div>
                    <p className='parrafo'>Maximo de pasajeros:</p>
                    <div>
                    <NumberInput isDisabled={isDisabled} bg='white' className='input' size='sm' maxW={20} defaultValue={1} min={1} max={vehicleCapacity}>
                        <NumberInputField type='number' ref={capacidadMaximaRef}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    </div>
                    <div className='input-precio'>
                        <InputGroup>
                            <InputLeftAddon children='$' />
                            <Input required={true} ref={precioRef} isDisabled={isDisabled} type='number' placeholder='Precio' />
                        </InputGroup>
                    </div>
                    <div className='checkbox-container'>
                        <Checkbox ref={equipajeRef} isDisabled={isChecked} isDefaultDisabled={true} isDefaultChecked={false}>Equipaje</Checkbox>
                    </div>    
                </div>
                <div className='textarea-conteiner'>
                    <span className='span-container'>Observaciones:</span>
                    <Textarea ref={observacionRef} bg='white' className='textarea' placeholder='Escriba Aquí...' />
                </div>
                <div className='footer'>
                    <Button type="submit" isDisabled={isDisabled}>Guardar</Button>
                    <a href="/viajes"> <Button>Volver</Button> </a>
                    <a href="/"><Button>Home</Button></a>
                </div>
            </form>
        </>
    )
}

export default ModificarViajeComponent;