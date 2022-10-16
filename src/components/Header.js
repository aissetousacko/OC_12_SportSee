import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>

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
