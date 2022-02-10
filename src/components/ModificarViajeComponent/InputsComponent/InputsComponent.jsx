import './InputsComponent.css'
import { Select, Input } from '@chakra-ui/react'
import useStorage from '../../../hooks/useStorage'
import { useEffect, useState, useRef } from 'react';

const InputsComponent = (props) => {
    const { getProvincias, getLocalidades } = useStorage();
    const provinciaRef = props.provinciaRef
    const localidadRef = props.localidadRef
    const calleRef = props.calleRef
    const alturaRef = props.alturaRef
    const [ isDisabled, setDisabled ] = useState(true);
    const [ provincias, setProvincias ] = useState([]);
    const [ localidades, setLocalidades ] = useState([]);
    const [ isClicked, setClicked ] = useState(false);
    const [ provinciaSelected, setProvinciaSelected ] = useState(null);

    const handleOnClick = () => {
        setClicked(!isClicked);
        setProvinciaSelected(provinciaRef.current.value)
        if(provinciaRef.current.value !== ""){
            setDisabled(false)
        } else {
            setDisabled(true)
            localidadRef.current.value = ""
        }
    }

    useEffect(()=>{
            getProvincias().then((provincia) => {
                const provinciasArray = []
                for (let i = 0; i < provincia.length; i++){
                    provinciasArray[i] = provincia[i]
                }
                setProvincias(provinciasArray)
            })
            getLocalidades(provinciaSelected).then((localidad) => {
                const localidadesArray = []
                for (let i = 0; i < localidad.length; i++){
                    localidadesArray[i] = localidad[i]
                }
                setLocalidades(localidadesArray)
            })
    },[isClicked]);

    const optionsProvincia = []
    for (let i = 0; i < provincias.length; i++) {
        optionsProvincia[i] = <option key={i} value={provincias[i].id}>{provincias[i].nombre}</option>
    }

    const optionsLocalidad = []
    for (let j = 0; j < localidades.length; j++) {
        optionsLocalidad[j] = <option key={j} value={localidades[j].id}>{localidades[j].nombre}</option>
    }

    return(
        <>
        <div className='inputs-component-container'>
            <div className='select-container'>
                <div className='select-inner'>
                    <Select ref={provinciaRef} required={true} className='select-bar' bg='white' variant='filled' placeholder='--Provincia--' onClick={handleOnClick}>
                        { optionsProvincia }
                    </Select>
                </div>
                <div className='select-inner'>
                    <Select ref={localidadRef} required={true} className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled={isDisabled}>
                        { optionsLocalidad }
                    </Select>
                </div>
            </div>
            <div className='input-container'>
                <div className='input-inner'><Input required={true} ref={calleRef} type="text" name="street" bg='white' placeholder='Calle' /></div>
                <div className='input-inner'><Input required={true} ref={alturaRef} type="number" name="number" bg='white' placeholder='Altura' /></div>
            </div>
        </div>
        </>
    )
}

export default InputsComponent;