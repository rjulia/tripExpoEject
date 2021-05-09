/**
 * Trip model as defined in Strapi
 */

import {saveTrip} from '../controllers/trip-controller'

class TripModel {
  constructor(title, country, city, end, start, budget, user) {
    this.title = title
    this.country = country 
    this.city = city
    this.end = end
    this.start = start
    this.budget = budget
    this.user = user
  }
 
  async saveTrip() {
    const result = await saveTrip(this)
 
    if (!result) {
      throw new Error('Unable to save trip.')
    }
 
    return result
  }

}
 
export default TripModel