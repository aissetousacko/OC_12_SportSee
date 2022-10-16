import axios from 'axios'
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

let mocked = true

export const getUserMainData = async (id) => {
  if (mocked) {
    const data = USER_MAIN_DATA.find((elt) => elt.id.toString() === id)
    // console.log('data: ', data)
    const userData = new UserMainData(data)
    // console.log('userData: ', userData)
    return userData
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => {
        return response.data.data
      })
    // console.log('data: ', data)
    const userData = new UserMainData(data)
    // console.log('userData: ', userData)
    return userData
  }
}
export const getUserActivity = async (id) => {
  if (mocked) {
    const data = USER_ACTIVITY.find((elt) => elt.userId.toString() === id)
    // console.log('data: ', data)
    const userActivity = new UserActivity(data, id)
    // console.log('userActivity: ', userActivity)
    return userActivity
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((response) => {
        return response.data.data
      })
    // console.log('data: ', data)
    const userActivity = new UserActivity(data)
    // console.log('userActivity: ', userActivity)
    return userActivity
  }
}
export const getUserSessions = async (id) => {
  if (mocked) {
    const data = USER_AVERAGE_SESSIONS.find(
      (elt) => elt.userId.toString() === id
    )
    // console.log('data: ', data)
    const userSessions = new UserSessions(data, id)
    // console.log('userSessions: ', userSessions)
    return userSessions
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => {
        return response.data.data
      })
    // console.log('data: ', data)
    const userSessions = new UserSessions(data)
    // console.log('userSessions: ', userSessions)
    return userSessions
  }
}
export const getUserPerformance = async (id) => {
  if (mocked) {
    const data = USER_PERFORMANCE.find((elt) => elt.userId.toString() === id)
    // console.log('data: ', data)
    const userPerformance = new UserPerformance(data)
    // console.log('userPerformance: ', userPerformance)
    return userPerformance
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/performance`)
      .then((response) => {
        return response.data.data
      })
    // console.log('data: ', data)
    const userPerformance = new UserPerformance(data)
    // console.log('userPerformance: ', userPerformance)
    return userPerformance
  }
}
