import React from 'react'
import yoga from '../assets/yoga.png'
import swimming from '../assets/swimming.png'
import cycling from '../assets/cycling.png'
import bodybuilding from '../assets/bodybuilding.png'

const VerticalNavbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__icons">
        <img src={yoga} alt="Yoga" />
        <img src={swimming} alt="Swimming" />
        <img src={cycling} alt="Cycling" />
        <img src={bodybuilding} alt="Bodybuilding" />
      </div>
      <p>Copiryght, SportSee 2020</p>
    </div>
  )
}

export default VerticalNavbar
