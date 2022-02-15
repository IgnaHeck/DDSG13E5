import './VerViajeComponent.css';
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import ModalComponent from '../ModalComponent/ModalComponent';
import MockData from '../../assets/MOCK_DATA.json';
import ColoredLine from '../ColoredLine/ColoredLine';
import DisabledInputsComponent from './DisabledInputsComponent/DisabledInputsComponent';
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
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import useStorage from '../../hooks/useStorage';


const VerViajeComponent = () => {
    
    const estadoRef = useRef()
    const inputOrigenProvinciaRef = useRef()
    const inputOrigenLocalidadRef = useRef()
    const inputDestinoProvinciaRef = useRef()
    const inputDestinoLocalidadRef = useRef()
    const inputCalleOrigenRef = useRef()
    const inputCalleDestinoRef = useRef()
    const inputAlturaOrigenRef = useRef()
    const inputAlturaDestinoRef = useRef()
    const patenteRef = useRef()
    const colorRef = useRef()
    const marcaRef = useRef()
    const modeloRef = useRef()
    const maxPasajerosRef = useRef()
    const precioRef = useRef()
    const equipajeRef = useRef()
    const observacionesRef = useRef()
    
    const { getViaje, getPasajerosXViaje, insertPasajero, insertPersona, insertPasajeroXViaje } = useStorage(); 
    const { id } = useParams();
    const [isChecked, setChecked] = useState(false);
    const [rows, setRows] = useState([]);

    const columns = [
        'DNI',
        'Apellido',
        'Nombre',
        'Edad',
        'Fotografia',
        'Estado',
        'Acciones'
    ];
    
    const aceptarModalBody = "Esta seguro que desea aceptar al pasajero?"
    const rechazarModalBody = "Esta seguro que desea rechazar al pasajero?"

    const aceptarPasajero = (data) => {
        insertPersona(data.apellido, data.nombre, data.dni, data.edad, data.fotografia)
        .then((persona) =>{
            insertPasajero(persona[0].id).then((pasajero) => {
                insertPasajeroXViaje(id, pasajero[0].id, "Aceptado")
            })
        })
    }

    const rechazarPasajero = (data) => {
        insertPersona(data.apellido, data.nombre, data.dni, data.edad, data.fotografia)
        .then((persona) =>{
            insertPasajero(persona[0].id).then((pasajero) => {
                insertPasajeroXViaje(id, pasajero[0].id, "Rechazado")
            })
        })
    }


    useEffect(() =>{
        getViaje(id).then((viaje)=> {
            estadoRef.current.value = viaje[0].estado
            inputOrigenProvinciaRef.current[0].text = viaje[0].DireccionOrigen.Localidad.Provincia.nombre
            inputDestinoProvinciaRef.current[0].text = viaje[0].DireccionDestino.Localidad.Provincia.nombre
            inputOrigenLocalidadRef.current[0].text = viaje[0].DireccionOrigen.Localidad.nombre
            inputDestinoLocalidadRef.current[0].text = viaje[0].DireccionDestino.Localidad.nombre
            inputCalleOrigenRef.current.attributes[0].value = viaje[0].DireccionOrigen.calle
            inputCalleDestinoRef.current.attributes[0].value = viaje[0].DireccionDestino.calle
            inputAlturaOrigenRef.current.attributes[0].value = viaje[0].DireccionOrigen.altura
            inputAlturaDestinoRef.current.attributes[0].value = viaje[0].DireccionDestino.altura
            patenteRef.current.value = viaje[0].Vehiculo.patente
            colorRef.current.value = viaje[0].Vehiculo.color
            marcaRef.current.value = viaje[0].Vehiculo.Modelo.Marca.name
            modeloRef.current.value = viaje[0].Vehiculo.Modelo.name
            maxPasajerosRef.current.value = viaje[0].espacioDefinido
            precioRef.current.value = viaje[0].precio
            setChecked((viaje[0].equipajePermitido) ? true : false)
            observacionesRef.current.value = viaje[0].observacion
            })
        

            
        getPasajerosXViaje(id).then((pasajeroXViaje) => {

            
            var rowsArray = []
            for (let i = 0; i < pasajeroXViaje.length; i++) {
                rowsArray[i] = [
                    pasajeroXViaje[i].Pasajero.Persona.dni, 
                    pasajeroXViaje[i].Pasajero.Persona.apellido, 
                    pasajeroXViaje[i].Pasajero.Persona.nombre, 
                    pasajeroXViaje[i].Pasajero.Persona.edad, 
                    <img src={pasajeroXViaje[i].Pasajero.Persona.fotografia} alt="Profile pic"></img>, 
                    pasajeroXViaje[i].estado,
                    [
                        //NO ES ACA
                        <ModalComponent 
                            title="Aceptar?" 
                            isDisabled={pasajeroXViaje[i].estado === 'Aceptado' ||  pasajeroXViaje[i].estado === 'Rechazado' ? true : false}
                            actionButton="Aceptar"
                            aceptarButton="green"
                            cancelButton="Cancelar"
                            modalBody={aceptarModalBody} 
                            text="Aceptar"/>,
                        <ModalComponent 
                            title="Rechazar?" 
                            isDisabled={pasajeroXViaje[i].estado === 'Aceptado' ||  pasajeroXViaje[i].estado === 'Rechazado' ? true : false} 
                            actionButton="Rechazar"  
                            aceptarButton="red" 
                            cancelButton="Cancelar"
                            modalBody={rechazarModalBody} 
                            text="Rechazar"/>
                    ]
                ]
                
            }

            var randomRows = []
            for (let j = 0; j < 7; j++) {
                var randomPerson = MockData[Math.floor(Math.random() * MockData.length)]
               randomRows[j] = [
                    randomPerson.dni,
                    randomPerson.apellido,
                    randomPerson.nombre,
                    randomPerson.edad,
                    <img src={randomPerson.fotografia} alt="Profile pic"></img>, 
                    randomPerson.estado,
                   [
                    <ModalComponent 
                        title="Aceptar?" 
                        actionButton="Aceptar" 
                        aceptarButton="green" 
                        cancelButton="Cancelar"
                        data={randomPerson}
                        onActionClick={aceptarPasajero}
                        modalBody={aceptarModalBody} 
                        text="Aceptar"/>,
                    <ModalComponent 
                        title="Rechazar?" 
                        actionButton="Rechazar" 
                        aceptarButton="red" 
                        cancelButton="Cancelar"
                        data={randomPerson}
                        onActionClick={rechazarPasajero}
                        modalBody={rechazarModalBody} 
                        text="Rechazar"/>
                ]                
            ]
                
            }
            const newArray = rowsArray.concat(randomRows)
            setRows(newArray)
        })
        
    },[])
   
    return(
        <>
            <div className='modificar-viaje-container'>
                <div className='header-container'>
                    <div className='title-container'>
                        <span className='span-container'>Viaje numero: {id}</span>
                    </div>
                    <div className='state-container'>
                        <span className='span-container'>Estado del Viaje:</span>
                        <Input ref={estadoRef} bg='white' placeholder='Programado' isDisabled></Input>
                    </div>
                </div>
                <div className='direc-vehiculo'>
                    <div className='direc-container'>
                        <span className='span-container'>Origen:</span>
                        <DisabledInputsComponent refAltura={inputAlturaOrigenRef} refCalle={inputCalleOrigenRef} refProvincia={inputOrigenProvinciaRef} refLocalidad={inputOrigenLocalidadRef}/>
                        <span className='span-container'>Destino:</span>
                        <DisabledInputsComponent refAltura={inputAlturaDestinoRef} refCalle={inputCalleDestinoRef} refProvincia={inputDestinoProvinciaRef} refLocalidad={inputDestinoLocalidadRef}/>
                    </div>
                    <div className='vehiculo-container'>
                        <span className='span-container'>Vehiculo:</span>
                        <div className='data-conteiner'>
                            <div>
                                <span className='span-container'>Patente:</span>
                                <Input ref={patenteRef} bg='white' isDisabled></Input>
                            </div>
                            <div>
                                <span className='span-container'>Color:</span>
                                <Input ref={colorRef} bg='white' isDisabled></Input>
                            </div>
                        </div>
                        <div className='data-conteiner'>
                            <div>
                                <span className='span-container'>Marca:</span>
                                <Input ref={marcaRef} bg='white' isDisabled></Input>
                            </div>
                            <div>
                                <span className='span-container'>Modelo:</span>
                                <Input ref={modeloRef} bg='white' isDisabled></Input>
                            </div>
                        </div>
                    </div>                  
                </div>    
                <ColoredLine color='gray' height='2px'/>
                <div className='segunda-parte'>
                    <p className='parrafo'>Maximo de pasajeros:</p>
                    <div>
                    <NumberInput className='input' bg='white' size='sm' maxW={20} defaultValue={0} min={0} max={4} isDisabled>
                        <NumberInputField ref={maxPasajerosRef}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                    </div>
                    <div className='input-precio'>
                        <InputGroup>
                            <InputLeftAddon children='$' />
                            <Input ref={precioRef} type='number' placeholder='Precio' isDisabled></Input>
                        </InputGroup>
                    </div>
                    <div className='checkbox-container'>
                        <Checkbox ref={equipajeRef} isChecked={isChecked} isDisabled>Equipaje</Checkbox>
                    </div>    
                </div>
                <div className='textarea-conteiner'>
                    <span className='span-container'>Observaciones:</span>
                    <Textarea ref={observacionesRef} bg='white' className='textarea' placeholder='Escriba Aquí...' isDisabled></Textarea>
                </div>
            <div className="busqueda-container">
                <Input bg='white' placeholder="Buscar Pasajero..."></Input>
            </div>
        </div>
            <div className='ver-viaje-container'>
                <GrillaComponent columns={columns} rows={rows}></GrillaComponent>
            </div>
            <div className="footer">
                <a href="/viajes"> <Button>Volver</Button> </a>
                <a href="/"><Button>Home</Button></a>
            </div>
        </>
    )
}

export default VerViajeComponent;