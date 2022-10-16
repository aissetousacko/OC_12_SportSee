import React from 'react'

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
