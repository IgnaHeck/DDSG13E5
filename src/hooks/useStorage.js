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

    const getPasajerosXViaje = async (id) => {
        const { data } = await supabase
        .from('ViajeXPasajero')
        .select(`
            id, 
            Viaje:viajeID(
                id
            ),
            Pasajero:pasajeroID (
                id,
                Persona:personaID (
                    id,
                    apellido,
                    nombre,
                    dni,
                    edad,
                    fotografia
                )
            ),
            estado
        `)
        .eq('viajeID', id)
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
        .select(`
        id,
        precio,
        observacion,
        estado,
        espacioDefinido,
        equipajePermitido,
        DireccionOrigen:origenID ( 
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( 
                    id,
                    nombre )
            )
        ),
        DireccionDestino:destinoID ( 
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( 
                    id,
                    nombre )
            )
        ),
        Vehiculo:vehiculoID (
            id,
            capacidadMaxima,
            color,
            equipaje,
            patente,
            Modelo:modeloID (
                id,
                name,
                Marca: marcaID ( name )
            )
        ),
        Conductor:conductorID (
            Persona:personaID ( 
                id,
                apellido,
                nombre,
                dni,
                edad,
                fotografia
            ),
            fotoRegistro
        )
        `
            )
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
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        DireccionDestino:destinoID ( 
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        Vehiculo:vehiculoID (
            id,
            capacidadMaxima,
            color,
            equipaje,
            patente,
            Modelo:modeloID (
                id,
                name,
                Marca: marcaID ( name )
            )
        ),
        Conductor:conductorID (
            Persona:personaID ( 
                id,
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
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        DireccionDestino:destinoID ( 
            id,
            altura, 
            calle, 
            Localidad:localidadID ( 
                id,
                nombre,
                Provincia: provinciaID ( nombre )
            )
        ),
        Vehiculo:vehiculoID (
            id,
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
                id,
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
    
    const insertPersona = async (apellido, nombre, dni, edad, fotografia) => {
        const { data } = await supabase
        .from('Persona')
        .insert([
            { apellido: apellido, nombre: nombre, dni: dni, edad: edad, fotografia: fotografia}
        ])
        return data
    }

    const insertPasajero = async(personaID) => {
        const { data } = await supabase
        .from('Pasajero')
        .insert([
            {personaID: personaID}
        ])
        return data
    }

    const insertPasajeroXViaje = async(viajeID, pasajeroID, estado) => {
        const { data } = await supabase
        .from('ViajeXPasajero')
        .insert([
            { viajeID: viajeID, pasajeroID: pasajeroID, estado: estado}
        ])
        return data
    } 
  
    const updateViaje = async(
        id, 
        precio,
        observacion,
        estado,
        espacioDefinido,
        equipajePermitido,
        origenID,
        destinoID,
        vehiculoID, 
        conductorID) => {
        const { data } = await supabase
        .from('Viaje')
        .update([{
            precio: precio,
            observacion: observacion,
            estado: estado,
            espacioDefinido: espacioDefinido,
            equipajePermitido: equipajePermitido,
            origenID: origenID,
            destinoID: destinoID,
            vehiculoID: vehiculoID, 
            conductorID: conductorID
        }])
        .eq('id',id)
        return data
    }

    return{
        getVehiculos,
        getMarcas,
        getModelos,
        getVehiculo,
        getConductores,
        getPasajeros,
        getPasajerosXViaje,
        getPersonas,
        getDirecciones,
        getProvincias,
        getLocalidades,
        getViajes,
        getViaje,
        getViajeByConductorID,
        insertDireccion,
        insertViaje,
        insertPersona,
        insertPasajero,
        insertPasajeroXViaje,
        updateViaje
    };
}

export default useStorage;