import { useParams, Link, useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import MembershipForm from '../components/MembershipForm'

const Team = () => {
    const {id} =useParams() //Guardamos el id por params
    const location = useLocation() //Importamos el hook useLocation para importar el state de la pagina anterior
    const team = location.state?.teamData //Si el state existe, lo guardamos en team

    const { data: playersData, loading: loadingPlayers, error: errorPlayers} = useFetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${id}`) //LLamamos a la api para los jugadores
    



    if (!team) return ( //Si team es falso, pintamos que no tenemos datos del equipo
        <div className='error-container'>
        <p>No hay datos disponibles. Por favor, entra desde la página de la Liga.</p>
        <Link to="/" className='btn-back'>Ir al Inicio</Link> 
        </div>
    )
    return (
    <div className='team-page-container'>
        <Link to={`/league/${team.idLeague}`} className='btn-back'>Back</Link> {/*Boton accesible para la navegacion*/}
        <header className='team-header'>
            <img src={team.strBadge} alt={team.strTeam} className='team-detail-badge'/> {/*Usamos el objeto importado con useLocation*/}
            <div className='team-info'>
                <h1 className='team-detail-name'>{team.strTeam}</h1>
                <p className='team-year'>Founded in {team.intFormedYear}</p>
                <p className='team-stadium'>Stadium: {team.strStadium} || Capacity: {team.intStadiumCapacity} </p>
                {team.strWebsite && <a href={`https://${team.strWebsite}`} target='_blank' className='social-link'>Website</a>}
            </div>
        </header>
        <section className='team-description-section'>
            <div className='description-text'>
                <h2>History</h2>
                <p>{team.strDescriptionEN}</p>
            </div>
            <div className='team-jersey'>
                <h3>Home Kit</h3>
                <img src={team.strEquipment} alt={team.strTeam} className='jersey-img' />
            </div>
        </section>
        <section className='players-section'>
            <h2>Players</h2>
            <div className='players-grid'>
                {
                    loadingPlayers ? <p>Loading players</p> :  //Si loadingPlayers es true, pintamos los jugadores
                        playersData?.player ? ( //Si playersData es true, pintamos los jugadores
                            playersData.player.map((player) => ( //Mapeo de los jugadores
                                <article key={player.idPlayer} className='player-card'>
                                    <img src={player.strThumb} alt={player.strPlayer} className='player-img'/>
                                    <p className='player-name'>{player.strPlayer}</p>
                                    <p className='player-position'>{player.strPosition}</p>
                                </article>
                            ))
                        ) : <p>No hay datos disponibles</p> //Comprobacion de la segunda ternaria, si playersData es false, no hay datos
                }
            </div>
        </section>
        <MembershipForm id={id}/> {/*Cargamos el componente del formulario*/}
        
    </div>
    )
}

export default Team