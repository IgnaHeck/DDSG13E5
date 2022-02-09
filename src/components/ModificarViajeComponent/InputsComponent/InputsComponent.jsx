import './InputsComponent.css'
import { Select, Input } from '@chakra-ui/react'
import useStorage from '../../../hooks/useStorage'
import { useEffect, useState, useRef } from 'react';

const InputsComponent = () => {
    const { getProvincias, getLocalidades } = useStorage();
    const provinciaRef = useRef()
    const localidadRef = useRef()
    const [isDisabled, setDisabled] = useState(true);
    const [provincias, setProvincias] = useState([]);
    const [localidades, setLocalidades] = useState([]);
    const [isClicked, setClicked] = useState(false);
    const [provinciaSelected, setProvinciaSelected] = useState('1');

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
                    <Select ref={provinciaRef} className='select-bar' bg='white' variant='filled' placeholder='--Provincia--' onClick={handleOnClick}>
                        { optionsProvincia }
                    </Select>
                </div>
                <div className='select-inner'>
                    <Select ref={localidadRef} className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled={isDisabled}>
                        { optionsLocalidad }
                    </Select>
                </div>
            </div>
            <div className='input-container'>
                <div className='input-inner'><Input type="text" name="street" bg='white' placeholder='Calle' /></div>
                <div className='input-inner'><Input type="text" name="number" bg='white' placeholder='Altura' /></div>
            </div>
        </div>
        </>
    )
}

export default InputsComponent;