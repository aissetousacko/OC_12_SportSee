// import axios from 'axios'
import UserMainData from '../services/models/UserMainData.js'
import UserActivity from '../services/models/UserActivity.js'
import UserPerformance from '../services/models/UserPerformance.js'
import UserSessions from '../services/models/UserSessions.js'
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../datas/mocked-data.js'
// console.log(USER_MAIN_DATA)
// console.log(USER_ACTIVITY)
// console.log(USER_AVERAGE_SESSIONS)
// console.log(USER_PERFORMANCE)

// * FETCH MOCKS

export const getUserMainData = async (id) => {
  const data = USER_MAIN_DATA.find((elt) => elt.id.toString() === id)
  // console.log('data: ', data)
  const userData = new UserMainData(data)
  // console.log('userData: ', userData)
  return userData
}
export const getUserActivity = async (id) => {
  const data = USER_ACTIVITY.find((elt) => elt.userId.toString() === id)
  // console.log('data: ', data)
  const userActivity = new UserActivity(data, id)
  // console.log('userActivity: ', userActivity)
  return userActivity
}
export const getUserSessions = async (id) => {
  const data = USER_AVERAGE_SESSIONS.find((elt) => elt.userId.toString() === id)
  // console.log('data: ', data)
  const userSessions = new UserSessions(data, id)
  // console.log('userSessions: ', userSessions)
  return userSessions
}
export const getUserPerformance = async (id) => {
  const data = USER_PERFORMANCE.find((elt) => elt.userId.toString() === id)
  // console.log('data: ', data)
  const userPerformance = new UserPerformance(data)
  // console.log('userPerformance: ', userPerformance)
  return userPerformance
}

// const mockedData = true

// export const getUserMainData = async (id) => {
//   let url = `http://localhost:3000/user/${id}`
//   try {
//     if (mockedData) {
//       // url = `http://localhost:3000/user/${id}`
//       // console.log(id)
//       let userMainData = USER_MAIN_DATA.find((elt) => {
//         console.log(elt)
//         // console.log(elt.id === 12)
//         if (elt.id === id) return elt
//       })
//       console.log('userMainData: ', userMainData)
//       return userMainData
//     }
//     // let userMainData = await axios.get(url).then((response) => {
//     //   console.log(response)
//     //   return response.data.user
//     // })
//     // console.log('userMainData: ', userMainData)
//   } catch (error) {
//     console.log('=====error=====', error)
//   }
// }

// export const getUserActivities = async (id) => {
//   let url = `http://localhost:3000/user/${id}`
//   try {
//     if (id === 13) {
//       url = '/mocked-data.json'
//     }
//     let userActivities = await axios.get(url).then((response) => {
//       // console.log(response.data.session)
//       return response.data.session
//     })
//     console.log('userActivities: ', userActivities)
//     return userActivities
//   } catch (error) {
//     console.log('=====error=====', error)
//   }
// }

// * FETCH API
