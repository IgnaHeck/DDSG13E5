import { supabase } from '../supabaseClient'

const useStorage = () => {

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

    const getViajes = async () => {
        const { data } = await supabase
        .from('Viaje')
        .select('*')
        return data
    }

    const getVehiculo = async (id) => {
        const { data } = await supabase
        .from('Vehiculo')
        .select('*')
        .eq('id', id)
        return data
    }

    return{
        getMarcas,
        getModelos,
        getVehiculo,
        getConductores,
        getPasajeros,
        getPersonas,
        getProvincias,
        getLocalidades,
        getViajes
    };
}

export default useStorage;