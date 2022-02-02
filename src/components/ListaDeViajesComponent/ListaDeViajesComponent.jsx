import './ListaDeViajesComponent.css'
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import MockMenu from '../../assets/MOCK_MENU.json';


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
        rows.push([index, e.calleo, e.alturao, e.localidado, e.provinciao, e.calle, e.altura, e.localidad, e.provincia])
    })

    return(
        <>
            <div className='lista-viajes-component-container'>
                <GrillaComponent columns={columns} rows={rows} size='sm'></GrillaComponent>
            </div>
            
        </>
    )
}

export default ListaDeViajesComponent;