import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../assets/lv.webp'

const Home = () => {
    const premierLeague = {
            name: 'Premier League',
            id: '4328',
            logo: 'https://r2.thesportsdb.com/images/media/league/badge/gasy9d1737743125.png'
        }
    
    return (
    <div className='home-container'>
        <div className='hero-container'>
            <h1 className='hero-title'>The Premier League Hub</h1>
            <img src={bgImage} alt="Fondo de Fútbol" className='hero-bg-image' />
        </div>

        <div className='leagues-container'>
            <h2 className='leagues-title'>Available Leagues</h2>
            <div className='leagues'>
                        <Link to={`/league/${premierLeague.id}`} key={premierLeague.id} className='league-link'>
                            <article className='league-card'>
                                <img src={premierLeague.logo} alt={premierLeague.name} className='league-logo' />
                                <h3 className='league-name'>{premierLeague.name}</h3>
                            </article>
                        </Link>
            </div>

        </div>
        
    </div>
  )
}

export default Home