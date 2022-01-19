import './InputsComponent.css'
import { Select, Input } from '@chakra-ui/react'

const InputsComponent = () => {

    return(
        <>
        <div className='inputs-container'>
            <div className='select-container'>
                <Select className='select-bar' bg='white' variant='filled' placeholder='--Provincia--'>
                <option value='option1'>Buenos Aires</option>
                <option value='option2'>La Pampa</option>
                <option value='option3'>Corrientes</option>
                </Select>
                <Select className='select-bar' bg='white' variant='filled' placeholder='--Localidad--' isDisabled>
                </Select>
            </div>
            <div className='input-container'>
                <Input placeholder='Calle' />
                <Input placeholder='Altura' />
            </div>
        </div>
        </>
    )
}

export default InputsComponent;