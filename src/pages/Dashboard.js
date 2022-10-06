import React from 'react'
import VerticalNavbar from '../components/VerticalNavbar.js'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <VerticalNavbar />

      <div className="dashboard__content">
        <div className="dashboard__welcome">
          <div className="dashboard__welcome--user">
            <h1>Bonjour</h1>
            <h1 className="name">Thomas</h1>
          </div>
          <p className="dashboard__welcome--text">
            Félicitations ! Vous avez explosé vos objectifs hier 👏
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
