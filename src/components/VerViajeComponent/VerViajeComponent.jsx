import './VerViajeComponent.css';
import GrillaComponent from '../GrillaComponent/GrillaComponent';
import MockData from '../../assets/MOCK_DATA.json';

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

    MockData.forEach((e, index) =>{
        rows.push([e.DNI, e.apellido, e.nombre, e.edad, e.foto, e.estado])
    })

    return(
        <>
            <div className='ver-viaje-container'>
                <GrillaComponent columns={columns} rows={rows}></GrillaComponent>
            </div>
        </>
    )
}

export default VerViajeComponent;