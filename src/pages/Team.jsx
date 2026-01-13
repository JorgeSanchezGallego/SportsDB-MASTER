import React, { useState } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useForm } from 'react-hook-form'
import { useMembership } from '../context/MembershipContext'

const Team = () => {
    const {id} =useParams()
    const location = useLocation()
    const team = location.state?.teamData

    const { data: playersData, loading: loadingPlayers, error: errorPlayers} = useFetch(`https://www.thesportsdb.com/api/v1/json/3/lookup_all_players.php?id=${id}`)
    
    const { joinTeam, isMemberOf} =useMembership()

    const isAlreadyMember = isMemberOf(id)

    const {register, handleSubmit, formState: {errors}} =useForm()
    const [email, setEmail] = useState("")

    const onSubmit = (data) => {
        console.log(data);
        setEmail(data.email)
        joinTeam(id)
    }


    if (!team) return (
        <div className='error-container'>
        <p>No hay datos disponibles. Por favor, entra desde la página de la Liga.</p>
        <Link to="/" className='btn-back'>Ir al Inicio</Link>
        </div>
    )
    return (
    <div className='team-page-container'>
        <Link to={`/league/${team.idLeague}`} className='back-button'>Back</Link>
        <header className='team-header'>
            <img src={team.strBadge} alt={team.strTeam} className='team-detail-badge'/>
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
                <h3>Equipment</h3>
                <img src={team.strEquipment} alt={team.strTeam} className='jersey-img' />
            </div>
        </section>
        <section className='players-section'>
            <h2>Players</h2>
            <div className='players-grid'>
                {
                    loadingPlayers ? <p>Loading players</p> : 
                        playersData?.player ? (
                            playersData.player.map((player) => (
                                <article key={player.idPlayer} className='player-card'>
                                    <img src={player.strThumb} alt={player.strPlayer} className='player-img'/>
                                    <p className='player-name'>{player.strPlayer}</p>
                                    <p className='player-position'>{player.strPosition}</p>
                                </article>
                            ))
                        ) : <p>No hay datos disponibles</p>
                }
            </div>
        </section>

        <section className='membership-section'>
                <div className='form-container'>
                    <h2>Join Us!</h2>
                    <p>Support the team!</p>
                    {!isAlreadyMember ? (
                        <form onSubmit={handleSubmit(onSubmit)} className='membership-form'>
                            <div className='form-group'>
                                <label htmlFor="name">Name</label>
                                <input 
                                    type="text"
                                    id='name'
                                    className='form-input'
                                    {...register("name", {required: true})}
                                    />
                                    {errors.name && <span>Name required</span>}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email</label>
                                <input 
                                    type="text"
                                    id='email'
                                    className='form-input'
                                    {...register("email", {required: true})} 
                                />
                                {errors.email && <span>Email required</span>}
                            </div>
                            <button type='submit' className='btn-submit'>Join!</button>
                        </form>
                    ) : (
                        <div className='succes-message'>
                            <h3>Ya eres parte del equipo</h3>
                        </div>
                    )}
                </div>
        </section>
    </div>
  )
}

export default Team