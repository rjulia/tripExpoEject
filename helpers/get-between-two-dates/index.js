
import moment from 'moment'

const getDaysBetweenDates = function(startDate, endDate) {
  let now = moment(startDate.clone()).add(1, 'day')
  let dates = []
  while (now.isSameOrBefore(endDate)) {
    dates.push(now.format('YYYY-MM-DD'))
    now.add(1, 'days')
  }
  
  return dates
}


export default getDaysBetweenDates

