import './InputsComponent.css';
import { Select, Input } from '@chakra-ui/react';
import useStorage from '../../../hooks/useStorage';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const InputsComponent = (props) => {
    const { id } = useParams();

    const { getProvincias, getLocalidades, getViaje } = useStorage();
    const provinciaRef = props.provinciaRef;
    const localidadRef = props.localidadRef;
    const canSave = props.canSave;
    const calleRef = props.calleRef;
    const alturaRef = props.alturaRef;
    const sentido = props.sentido || '';
    const provinciaSelectedID = props.provinciaSelectedID;
    const [ isDisabled, setDisabled ] = useState(true);
    const [ isProvinciaSelected, setProvinciaSelectedBoolean ] = useState(true);
    const [ isLocalidadSelected, setLocalidadSelectedBoolean ] = useState(true);
    const [ provincias, setProvincias ] = useState([]);
    const [ localidades, setLocalidades ] = useState([]);
    const [ isClicked, setClicked ] = useState(false);
    const [ provinciaSelected, setProvinciaSelected ] = useState(null);
    
    const handleOnClick = () => {
        setClicked(!isClicked);
        setProvinciaSelected(provinciaRef.current.selectedIndex)
        if(provinciaRef.current.selectedIndex === 0 || calleRef.current.value === '' || alturaRef.current.value === ''){
            setDisabled(true)
        } else {
            setDisabled(false)
        }
        if(provinciaRef.current.selectedIndex !== 0){
            setProvinciaSelectedBoolean(false);
        } else {
            setProvinciaSelectedBoolean(true);
            localidadRef.current.selectedIndex = 0
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
    },[]);

    useEffect(()=>{
        getViaje(id).then((viaje)=> {
            const getProvinciaID = ()=>{
                var answer = '';
                switch(sentido){
                    case 'Origen':
                        answer =  viaje[0].DireccionOrigen.Localidad.Provincia.id
                        break;
                    case 'Destino':
                        answer =  viaje[0].DireccionDestino.Localidad.Provincia.id
                        break;
                    default:
                        answer = 0;
                }
                return answer;
            }
            const getLocalidad = ()=>{ 
                var answer = '';
                switch(sentido){
                    case 'Origen':
                        answer = viaje[0].DireccionOrigen.Localidad.nombre
                        break;
                    case 'Destino':
                        answer = viaje[0].DireccionDestino.Localidad.nombre
                        break;
                    default:
                        answer = 0;
                }
                return answer;
            }

            getLocalidades(getProvinciaID()).then((localidad) => {
                const localidadesArray = []
                for (let i = 0; i < localidad.length; i++){
                    localidadesArray[i] = localidad[i]
                }
                setLocalidades(localidadesArray)
                setTimeout(()=> {
                    const b = () => {
                        localidades.forEach((localidad, index) => {
                            if (localidad.nombre === getLocalidad()){
                                localidadRef.current.selectedIndex = index+1
                            }
                        })
                        // localidadRef.current.selectedIndex = getLocalidadID()
                        if(localidadRef.current.selectedIndex !== 0){
                            setLocalidadSelectedBoolean(false);
                        } else {
                            setLocalidadSelectedBoolean(true);
                        }
                        if(provinciaRef.current.selectedIndex !== 0){
                            setProvinciaSelectedBoolean(false);
                        } else {
                            setProvinciaSelectedBoolean(true);
                            localidadRef.current.selectedIndex = 0
                        }
                    }
                    const a = () => {
                        provinciaRef.current.selectedIndex = getProvinciaID()
                        setTimeout(b(), 100)
                    }
                    a()
                }, 20)
            })
        })
    },[])

    useEffect(()=>{
        getLocalidades(provinciaRef.current.selectedIndex).then((localidad)=>{
            const localidadesArray = []
                for (let i = 0; i < localidad.length; i++){
                    localidadesArray[i] = localidad[i]
                }
                setLocalidades(localidadesArray)
        })
    }, [isClicked, isLocalidadSelected])

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
                    <Select ref={localidadRef} required={true} className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled={isProvinciaSelected} onClick={handleOnClick}>
                        { optionsLocalidad }
                    </Select>
                </div>
            </div>
            <div className='input-container'>
                <div className='input-inner'><Input isDisabled={isLocalidadSelected} required={true} ref={calleRef} type="text" name="street" bg='white' placeholder='Calle' /></div>
                <div className='input-inner'><Input isDisabled={isLocalidadSelected} required={true} ref={alturaRef} type="number" name="number" bg='white' placeholder='Altura' /></div>
            </div>
        </div>
        </>
    )
}

export default InputsComponent;