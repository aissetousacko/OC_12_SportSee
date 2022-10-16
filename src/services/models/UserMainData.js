export default class UserMainData {
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
