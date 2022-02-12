import './DisabledInputsComponent.css'
import { Select, Input } from '@chakra-ui/react'

const DisabledInputsComponent = (props) => {
    const inputProvinciaRef = props.refProvincia
    const inputLocalidadRef = props.refLocalidad
    const inputAlturaRef = props.refAltura
    const inputCalleRef = props.refCalle
    
    return(
        <>
        <div className='disabled-inputs-container'>
            <div className='disabled-select-container'>
                <Select ref={inputProvinciaRef} className='select-bar' bg='white' variant='filled' placeholder='--Provincia--' isDisabled>
                <option value='option1'>Buenos Aires</option>
                <option value='option2'>La Pampa</option>
                <option value='option3'>Corrientes</option>
                </Select>
                <Select ref={inputLocalidadRef} className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled>
                <option value='option1'>Text</option>
                </Select>
            </div>
            <div className='disabled-input-container'>
                <Input ref={inputCalleRef} bg='white' placeholder='Calle' isDisabled></Input>
                <Input ref={inputAlturaRef} bg='white' placeholder='Altura' isDisabled></Input>
            </div>
        </div>
        </>
    )
}

export default DisabledInputsComponent;