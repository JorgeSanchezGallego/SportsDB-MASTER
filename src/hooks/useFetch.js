import { useEffect, useState } from "react";

export function useFetch(url) {  //Custom hook para resolver la llamada a la api y posibles errores
    const [data, setData] = useState(null)  //Estados necesarios para el proceso de la llamada
    const [ loading, setLoading] = useState(true)
    const [ error, setError ] = useState(null)
    useEffect(() => {
        const abortController = new AbortController() // Controlamos posible error al cancelar una llamada a la api por otra acción
        setLoading(true)
        const fetchData = async () => { // Creamos función dentro de useEffect
            try {
                const response = await fetch(url, {signal: abortController.signal}) // Llamamos a la api y conectamos el abort
                if (!response.ok) { // Si no es OK, lanzamos error
                    throw new Error("Error al lanzar la petición");
                }
                const jsonData = await response.json() // Pasamos response a JSON para manejarlo
                setData(jsonData) //Seteamos data y le pasamos el json
                setError(null) // No ha habido errores, sigue en null
            } catch (error) {
                if (error.name === "AbortError") { // Si cancelamos la llamada a la api, controlamos el error
                    console.log("Petición cancelada");
                } else { // Cualquier otro error, por aqui
                    setError(error.message)
                }
            } finally { //Funcione o no, loading ha dejado de cargar por que ha terminado.
                setLoading(false)
            }
        }
        fetchData() // Llamamos a la funcion
        return () => abortController.abort() // Cortamos la conexión
    }, [url]) // Pasamos en la dependencia lo que queremos vigilar, que sera la url, para que no haga más llamadas a no ser que cambie la URL
    return {data, loading, error} //Devolvemos data, loading y error para tratarlos 

}