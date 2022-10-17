/**
 * @class
 * @classdesc User main data's formater
 */
export default class UserMainData {
  /**
   * Assigns the values from an object to the properties of the class.
   * @param {Object} data - user's data
   */
  constructor(data) {
    this.id = data.id
    this.firstName = data.userInfos.firstName
    this.todayScore = data.todayScore || data.score
    this.score = this.formatScore(this.todayScore)
    this.keyData = data.keyData
  }

  formatScore() {
    return [{ value: this.todayScore * 100 }]
  }
}
