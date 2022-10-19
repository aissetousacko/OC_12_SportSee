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

/**
 * Retrieve and format the user's data
 * @param {number} id
 * @returns {Object} An object with the information of the user
 */
export const getUserMainData = async (id) => {
  if (id === '13' || id === '19') {
    const data = USER_MAIN_DATA.find((elt) => elt.id.toString() === id)
    const userData = new UserMainData(data)
    return userData
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}`)
      .then((response) => {
        return response.data.data
      })
    const userData = new UserMainData(data)
    return userData
  }
}

/**
 * Retrieve and format the activities's data
 * @param {number} id
 * @returns {Object} An object with the information of the user's activity
 */
export const getUserActivity = async (id) => {
  if (id === '13' || id === '19') {
    const data = USER_ACTIVITY.find((elt) => elt.userId.toString() === id)
    const userActivity = new UserActivity(data, id)
    return userActivity
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/activity`)
      .then((response) => {
        return response.data.data
      })
    const userActivity = new UserActivity(data)
    return userActivity
  }
}

/**
 * Retrieve and format the average sessions's data
 * @param {*} id
 * @returns {Object} An object with the information of the user's average sessions
 */
export const getUserSessions = async (id) => {
  if (id === '13' || id === '19') {
    const data = USER_AVERAGE_SESSIONS.find(
      (elt) => elt.userId.toString() === id
    )
    const userSessions = new UserSessions(data, id)
    return userSessions
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => {
        return response.data.data
      })
    const userSessions = new UserSessions(data)
    return userSessions
  }
}

/**
 * Retrieve and format the performance's data
 * @param {*} id
 * @returns {Object} An object with the information of the user's performance
 */
export const getUserPerformance = async (id) => {
  if (id === '13' || id === '19') {
    const data = USER_PERFORMANCE.find((elt) => elt.userId.toString() === id)
    const userPerformance = new UserPerformance(data)
    return userPerformance
  } else {
    const data = await axios
      .get(`http://localhost:3000/user/${id}/performance`)
      .then((response) => {
        return response.data.data
      })
    const userPerformance = new UserPerformance(data)
    return userPerformance
  }
}
