import React from 'react'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <ul className="navigation">
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglages</li>
        <li>Communauté</li>
      </ul>
    </div>
  )
}

export default Header
