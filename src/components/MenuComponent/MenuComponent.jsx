import './MenuComponent.css'
import { Button, Stack, Text, Input, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ChevronDownIcon,Portal} from '@chakra-ui/react'
import GrillaComponent from '../GrillaComponent/GrillaComponent';


const MenuComponent = () => {

const columns = [
    'ID',
    'Calle',
    'Altura',
    'Localidad',
    'Provincia',
    'Calle',
    'Altura',
    'Localidad',
    'Provincia',
    'Conductor', 
    'Acciones'
];

const rows=[];

    return(
        <>
            <div className='menu-component-container'>
            <Text
                bgGradient='linear(to-l, #aaa5ff, #00d4ff)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >'Subi que te llevo'</Text>
                <Stack spacing={3} direction='row' aling='center'>
                    <a href="/viajes"><Button>Tus Viajes</Button></a>
                    <a href="/modificar-viaje"><Button>Programar Viaje</Button></a>
                    <a href="/vehiculos"><Button>Tus Vehiculos</Button></a>
                    <a href="/nuevo-vehiculo"><Button>Agregar Vehiculo</Button></a>
                    <Menu>
                        <MenuButton><Button>≡</Button></MenuButton>
                        <Portal>
                            <MenuList>
                                <MenuItem>Tu perfil</MenuItem>
                                <MenuItem>Registrarse como conductor</MenuItem>
                                <MenuItem>Log out</MenuItem>
                            </MenuList>
                        </Portal>
                    </Menu>
                </Stack>
                <div className="busqueda-container">
                    <Input placeholder="Buscar viaje..."></Input>
                </div>
                <div className="etiquetas-container">
                    <p className="etiqueta1">Origen</p>
                    <div className="vl"></div>
                    <p className="etiqueta2">Destino</p>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={rows}></GrillaComponent>    
                </div>
            </div>
        </>
    )
}

export default MenuComponent;