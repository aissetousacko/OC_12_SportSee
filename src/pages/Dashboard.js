import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {
  getUserMainData,
  getUserActivity,
  getUserSessions,
  getUserPerformance,
} from '../services/fetch.js'

import VerticalNavbar from '../components/VerticalNavbar.js'
import Activity from '../components/Activity.js'
import Session from '../components/Session.js'
import Performance from '../components/Performance.js'
import Score from '../components/Score.js'
import Card from '../components/Card.js'

import calories from '../assets/calories.png'
import protein from '../assets/protein.png'
import carbonhydrates from '../assets/carbonhydrates.png'
import lipids from '../assets/lipids.png'

const Dashboard = () => {
  const { id } = useParams()

  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getData() {
      try {
        const userDatas = await getUserMainData(id)
        const userActivities = await getUserActivity(id)
        const userSessions = await getUserSessions(id)
        const userPerformance = await getUserPerformance(id)

        setData({
          userDatas,
          userActivities,
          userSessions,
          userPerformance,
        })

        setIsLoading(false)
      } catch (error) {
        console.log('=====error=====', error)
      }
    }
    getData()
  }, [id])

  if (!data) {
    return null
  }

  return (
    <>
      <VerticalNavbar />
      <div className="dashboard">
        {isLoading ? (
          'Loading... '
        ) : (
          <>
            <div className="dashboard__welcome">
              <div className="dashboard__welcome--user">
                <h1>Bonjour</h1>
                <h1 className="name">{data.userDatas.firstName}</h1>
                {console.log('data: ', data)}
              </div>
              <p className="dashboard__welcome--text">
                Félicitations ! Vous avez explosé vos objectifs hier 👏
              </p>
            </div>
            <div className="dashboard__content">
              <div className="dashboard__graphs">
                <div className="dashboard__activity">
                  <Activity activity={data.userActivities.sessions} />
                </div>
                <div className="dashboard__other-graph">
                  <Session sessions={data.userSessions.sessionsData} />
                  <Performance
                    performances={data.userPerformance.performData}
                  />
                  <Score score={data.userDatas.score[0].value} />
                </div>
              </div>

              <div className="dashboard__cards">
                <Card
                  img={calories}
                  data={data.userDatas.keyData.calorieCount}
                  unit="Kcal"
                  text="Calories"
                />
                <Card
                  img={protein}
                  data={data.userDatas.keyData.proteinCount}
                  unit="g"
                  text="Protéines"
                />
                <Card
                  img={carbonhydrates}
                  data={data.userDatas.keyData.carbohydrateCount}
                  unit="g"
                  text="Glucides"
                />
                <Card
                  img={lipids}
                  data={data.userDatas.keyData.lipidCount}
                  unit="g"
                  text="Lipides"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Dashboard
