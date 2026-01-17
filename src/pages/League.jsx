import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'//Importamos nuestra llamada a la api

const League = () => {
    const {id} = useParams() //Recogemos el id por params
    const {data, loading, error} = useFetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id=${id}`) //Nuestra llamada a la api devuelve data, loading y error, le pasamos la url y el id
    if (loading) return <div className='loading-teams'>Cargando equipos...</div> //Si loading es true, muestra un mensaje amistoso de cargando equipos
    if (error) return <div>Error: {error}</div> //Si error es true, muestra por pantalla el error
    return (
    <div className='league-container'>
        <Link to="/" className='btn-back'>Home</Link> {/*Boton accesible para la navegacion*/}
        <h1 className='league-title'>
            {
                data?.teams ? data.teams[0].strLeague : 'Liga' //Si data existe, pintamos el nombre del equipo
            }
        </h1>
        <div className='teams-grid'>
            {data?.teams && data.teams.map((team) => ( //Si data existe, lo mapeamos y pintamos el escudo de todos los equipos disponibles
                <Link to={`/team/${team.idTeam}`} key={team.idTeam} className='team-link' state={{teamData: team}}> {/*Si clickamos, nos reedirige hacia la siguiente pagina  y le enviamos el team a la siguiente pagina para que no tenga que llamar a la api*/}
                    <article className='team-card'>
                        <img src={team.strBadge} alt={team.strTeam} className='team-badge' />
                        <h3 className='team-name'>{team.strTeam}</h3>
                    </article>
                </Link>
            ))}
        </div>
    </div>
    )
}

export default League