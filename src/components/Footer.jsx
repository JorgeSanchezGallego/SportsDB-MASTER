import React from 'react'
import logoImage from '../assets/logo-transparent.png'

const Footer = () => {
    return (
    <footer className='app-footer'>
        <div className='container-copyright'>
            <p>Proyecto ReactJS -TheSportsDB</p>
            <p>&copy; {new Date().getFullYear()} || Jorge Sánchez Gallego</p>
        </div>
        <div className='container-logo'>
            <img src={logoImage} alt="Jorge Sánchez" />
        </div>
    </footer>
    )
}

export default Footer