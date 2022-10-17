/**
 * @class
 * @classdesc User activities data's formater
 */
export default class UserActivity {
  /**
   * Assigns the values from an object to the properties of the class.
   * @param {Object} sessions - user sessions data
   * @param {Object} id - user id
   */
  constructor({ sessions, userId }) {
    this.id = userId
    this.sessions = sessions.map((session, index) => ({
      ...session,
      kilogram: session.kilogram,
      calories: session.calories,
      day: (index + 1).toString(),
    }))
  }
}
