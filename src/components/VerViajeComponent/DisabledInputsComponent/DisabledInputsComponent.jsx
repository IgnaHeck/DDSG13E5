import './DisabledInputsComponent.css'
import { Select, Input } from '@chakra-ui/react'

const DisabledInputsComponent = () => {

    return(
        <>
        <div className='disabled-inputs-container'>
            <div className='disabled-select-container'>
                <Select className='select-bar' bg='white' variant='filled' placeholder='--Provincia--' isDisabled>
                <option value='option1'>Buenos Aires</option>
                <option value='option2'>La Pampa</option>
                <option value='option3'>Corrientes</option>
                </Select>
                <Select className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled>
                </Select>
            </div>
            <div className='disabled-input-container'>
                <Input placeholder='Calle' isDisabled></Input>
                <Input placeholder='Altura' isDisabled></Input>
            </div>
        </div>
        </>
    )
}

export default DisabledInputsComponent;