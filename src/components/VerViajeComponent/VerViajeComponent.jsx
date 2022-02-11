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



const VerViajeComponent = () => {

    

    const columns = [
        'DNI',
        'Apellido',
        'Nombre',
        'Edad',
        'Fotografia',
        'Estado',
        'Acciones'
    ];
    const rows = [[]]
    
    const aceptarModalBody = "Esta seguro que desea aceptar al pasajero?"
    const rechazarModalBody = "Esta seguro que desea rechazar al pasajero?"

   

    MockData.forEach((e, index) =>{
        rows.push([
            e.DNI, 
            e.apellido, 
            e.nombre, 
            e.edad, 
            <img src={e.foto} alt="Profile image"></img>, 
            e.estado, 
            [
                <ModalComponent title="Aceptar?" actionButton="Aceptar" modalBody={aceptarModalBody} text="Aceptar"/>,
                <ModalComponent title="Rechazar?" actionButton="Rechazar" modalBody={rechazarModalBody} text="Rechazar"/>
            ]])
    })

    return(
        <>
            <div className='modificar-viaje-container'>
                <div className='header-container'>
                    <div className='title-container'>
                        <span className='span-container'>Viaje {aceptarModalBody}</span>
                    </div>
                    <div clasName='state-container'>
                        <span className='span-container'>Estado del Viaje:</span>
                        <Input bg='white' placeholder='Programado' isDisabled></Input>
                    </div>
                </div>
                <div className='direc-vehiculo'>
                    <div className='direc-container'>
                        <span className='span-container'>Origen:</span>
                        <DisabledInputsComponent/>
                        <span className='span-container'>Destino:</span>
                        <DisabledInputsComponent/>
                    </div>
                    <div className='vehiculo-container'>
                        <span className='span-container'>Vehiculo:</span>
                        <div className='data-conteiner'>
                            <div>
                                <span className='span-container'>Patente:</span>
                                <Input bg='white' isDisabled></Input>
                            </div>
                            <div>
                                <span className='span-container'>Color:</span>
                                <Input bg='white' isDisabled></Input>
                            </div>
                        </div>
                        <div className='data-conteiner'>
                            <div>
                                <span className='span-container'>Marca:</span>
                                <Select bg='white' isDisabled></Select>
                            </div>
                            <div>
                                <span className='span-container'>Modelo:</span>
                                <Select bg='white' isDisabled></Select>
                            </div>
                        </div>
                    </div>                  
                </div>    
                <ColoredLine color='gray' height='2px'/>
                <div className='segunda-parte'>
                    <p className='parrafo'>Maximo de pasajeros:</p>
                    <div>
                    <NumberInput className='input' bg='white' size='sm' maxW={20} defaultValue={0} min={0} max={4} isDisabled>
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
                            <Input type='number' placeholder='Precio' isDisabled></Input>
                        </InputGroup>
                    </div>
                    <div className='checkbox-container'>
                        <Checkbox defaultIsChecked isDisabled>Equipaje</Checkbox>
                    </div>    
                </div>
                <div className='textarea-conteiner'>
                    <span className='span-container'>Observaciones:</span>
                    <Textarea bg='white' className='textarea' placeholder='Escriba Aquí...' isDisabled></Textarea>
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