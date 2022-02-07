import './ListaDeViajesComponent.css'
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import MockMenu from '../../assets/MOCK_MENU.json';
import { Input, Button } from '@chakra-ui/react';


const ListaDeViajesComponent = () => {
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
        'Estado',
        'Acciones'
    ];

    const rows = [[]]

    MockMenu.forEach((e, index) =>{
        rows.push([index, e.calleo, e.alturao, e.localidado, e.provinciao, e.calle, e.altura, e.localidad, e.provincia, e.estado, [<a href="/ver-viaje">Ver-</a>,<a href="/modificar-viaje">Edit-</a>,<a href="/xd">Eliminar</a> ]])
    })

    return(
        <>
            <div className='lista-viajes-component-container'>
                <div className="busqueda-container">
                    <Input placeholder="Buscar viaje..."></Input>
                    <a className="programar-viaje-mas-button" href="modificar-viaje">+</a>
                </div>
                <div className="etiquetas-container">
                    <p className="etiqueta1">Origen</p>
                    <div className="vl"></div>
                    <p className="etiqueta2">Destino</p>
                </div>
                <div className="grilla-container">
                    <GrillaComponent columns={columns} rows={rows} size='sm'></GrillaComponent>
                </div>
                <div className='home-ref-button'>
                    <a className="" href="/"><Button>Home</Button></a>
                </div>
            </div>
            
        </>
    )
}

export default ListaDeViajesComponent;