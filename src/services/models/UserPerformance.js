/**
 * @class
 * @classdesc User performance data's formater
 */
export default class UserPerformance {
  /**
   * Assigns the values from an object to the properties of the class.
   * @param {Object} performances - user performances data
   * @param {Object} kind - user kind of performance
   */
  constructor(performances, kind) {
    this.id = performances.userId
    this.kindOfPerform = this.KindOfPerformance(kind)
    this.formatPerformData = performances.data.map((performance, kind) => ({
      ...performance,
      kind: this.kindOfPerform[kind],
      value: performance.value,
    }))
    this.performData = this.formatPerformData.reverse()
  }

  KindOfPerformance() {
    const formatPerform = [
      'Cardio',
      'Energie',
      'Endurance',
      'Force',
      'Vitesse',
      'Intensité',
    ]
    return formatPerform
  }
}
