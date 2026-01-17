import { createContext, useContext, useState } from "react";

const MembershipContext = createContext() //Creamos el contexto de nuestro formulario

export const MembershipProvider = ({children}) => { // Componente que envolverá la app
    const [joinedTeams, setJoinedTeams] = useState([]) // Inicializamos un array vacio donde guardaremos los diferentes equipos de los que somos socios

    const joinTeam = (teamId) => { // Función para añadir equipos al array
        if (!joinedTeams.includes(teamId)) { //Si no lo incluye,  lo añadimos
            setJoinedTeams([...joinedTeams, teamId]) // A seteo de joinedTeams le pasamos todo el array de joinedTeams, y el nuevo id
        }
    }

    const isMemberOf = (teamId) => { //Funcion para comprobar si es socio o no
        return joinedTeams.includes(teamId) // Devuelve booleano
    }
    return (
        <MembershipContext.Provider value={{joinedTeams, joinTeam, isMemberOf}}> {/* El Provider devuelve a todos sus hijos joinTeam y isMemberOF*/}
            {children}
        </MembershipContext.Provider>
    )
}

export const useMembership = () => useContext(MembershipContext) //Creamos un custom hook para que cualquier componente pueda usar el contexto sin tener que importar useContext