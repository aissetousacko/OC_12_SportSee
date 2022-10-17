/**
 * @class
 * @classdesc User average sessions data's formater
 */
export default class UserSessions {
  /**
   * Assigns the values from an object to the properties of the class.
   * @param {Object} sessions - user sessions data
   * @param {Object} id - user id
   */
  constructor({ sessions, userId }) {
    this.id = userId
    this.sessions = this.SessionDay(sessions.day)
    this.sessionsData = sessions.map((session, index) => ({
      ...session,
      sessionLength: session.sessionLength,
      day: this.sessions[index],
    }))
  }

  SessionDay() {
    const formatDay = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return formatDay
  }
}
