import { supabase } from '../supabaseClient'

const useStorage = () => {
    const getVehiculos = async () => {
        const { data } = await supabase
        .from('Vehiculo')
        .select('*')
        return data
    }
    const getMarcas = async () => {
       const { data } = await supabase
       .from('Marca')
       .select('*')
       return data
    }

    const getModelos = async () => {
        const { data } = await supabase
        .from('Modelo')
        .select('*')
        return data
    }

    const getConductores = async () => {
        const { data } = await supabase
        .from('Conductor')
        .select('*')
        return data
    }

    const getPasajeros = async () => {
        const { data } = await supabase
        .from('Pasajero')
        .select('*')
        return data
    }

    const getPersonas = async () => {
        const { data } = await supabase
        .from('Persona')
        .select('*')
        return data
    }

    const getProvincias = async () => {
        const { data } = await supabase
        .from('Provincia')
        .select('*')
        return data
    }
    
    const getLocalidades = async (id) => {
        const { data } = await supabase
        .from('Localidad')
        .select('*')
        .eq('provinciaID', id)
        return data
    }

    const getDirecciones = async () => {
        const { data } = await supabase
        .from('Direccion')
        .select('*')
        return data
    }

    const getViaje = async (id) => {
        const { data } = await supabase
        .from('Viaje')
        .select('*')
        .eq('id', id)
        return data
    }

    const getViajes = async () => {
        const { data } = await supabase
        .from('Viaje')
        .select(`
        id,
        precio,
        observacion,
        estado,
        espacioDefinido,
        equipajePermitido,
        DireccionOrigen:origenID ( 
            altura, 
            calle, 
            Localidad:localidadID ( 
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        DireccionDestino:destinoID ( 
            altura, 
            calle, 
            Localidad:localidadID ( 
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        Vehiculo:vehiculoID (
            capacidadMaxima,
            color,
            equipaje,
            patente,
            Modelo:modeloID (
                name,
                Marca: marcaID ( name )
            )
        ),
        Conductor:conductorID (
            Persona:personaID ( 
                apellido,
                nombre,
                dni,
                edad,
                fotografia
            ),
            fotoRegistro
        )
        `)
        return data
    }

    const getViajeByConductorID = async (conductorID) => {
        const { data } = await supabase
        .from('Viaje')
        .select(`
        id,
        precio,
        observacion,
        estado,
        espacioDefinido,
        equipajePermitido,
        DireccionOrigen:origenID ( 
            altura, 
            calle, 
            Localidad:localidadID ( 
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        DireccionDestino:destinoID ( 
            altura, 
            calle, 
            Localidad:localidadID ( 
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        Vehiculo:vehiculoID (
            capacidadMaxima,
            color,
            equipaje,
            patente,
            Modelo:modeloID (
                name,
                Marca: marcaID ( name )
            )
        ),
        Conductor:conductorID (
            Persona:personaID ( 
                apellido,
                nombre,
                dni,
                edad,
                fotografia
            ),
            fotoRegistro
        )
        `)
        .eq('conductorID', conductorID)
        return data
    }

    const getVehiculo = async (id) => {
        const { data } = await supabase
        .from('Vehiculo')
        .select('*')
        .eq('id', id)
        return data
    }

    const insertDireccion = async (altura, calle, localidadID) => {
        const { data } = await supabase
        .from('Direccion')
        .insert([
            { altura: altura, calle: calle, localidadID: localidadID}
        ])
        return data
        }

    const insertViaje = async (precio, observacion, estado, espacioDefinido, equipajePermitido,  origenID, destinoID, vehiculoID, conductorID) => {
        const { data } = await supabase
        .from('Viaje')
        .insert([
            { precio: precio, observacion: observacion, estado: estado, espacioDefinido: espacioDefinido, equipajePermitido: equipajePermitido,  origenID: origenID, destinoID: destinoID, vehiculoID: vehiculoID, conductorID: conductorID},
        ])
        return data
    }

    return{
        getVehiculos,
        getMarcas,
        getModelos,
        getVehiculo,
        getConductores,
        getPasajeros,
        getPersonas,
        getDirecciones,
        getProvincias,
        getLocalidades,
        getViajes,
        getViaje,
        getViajeByConductorID,
        insertDireccion,
        insertViaje
    };
}

export default useStorage;