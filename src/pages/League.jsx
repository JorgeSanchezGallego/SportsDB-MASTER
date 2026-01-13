import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const League = () => {
    const {id} = useParams()
    const {data, loading, error} = useFetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id=${id}`)
    if (loading) return <div className='loading-teams'>Cargando equipos...</div>
    if (error) return <div>Error: {error}</div>
    return (
    <div className='league-container'>
        <Link to="/" className='back-button'>Home</Link>
        <h1 className='league-title'>
            {
                data?.teams ? data.teams[0].strLeague : 'Liga'
            }
        </h1>
        <div className='teams-grid'>
            {data?.teams && data.teams.map((team) => (
                <Link to={`/team/${team.idTeam}`} key={team.idTeam} className='team-link' state={{teamData: team}}>
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