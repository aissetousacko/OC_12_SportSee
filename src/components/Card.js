import React from 'react'

/**
 * Display cards with icon and calories, proteins, lipids or carbohydrates values
 * @component
 * @param {String} img - icon
 * @param {Number} data - quantity number
 * @param {String} unit
 * @param {Array} text
 * @returns {JSX.Element} Card component
 */
const Card = ({ img, data, unit, text }) => {
  return (
    <div className="card">
      <img src={img} alt="Icône" />
      <div className="card__text">
        <h1>
          {data} {unit}
        </h1>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Card
