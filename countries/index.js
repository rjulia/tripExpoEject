import _, { filter, map } from 'lodash'
import data from './data.json'
import cities from './cities.json'

const getCoutries = () => {

  const countries = _.map(data.countries, (val, key) => {
    return {
      id: key,
      label: val.name,
      value: key,
      name: val.name,
      emoji: val.emoji,
      emojiU: val.emojiU,
      phone: val.phone
    }
  })
  return countries
}

const getCities = (id) => {
  const city = _.flow(
    (cities) => filter(cities, city => city.country === id),
    (cities) => _.uniqBy(cities,'name'),
    (cities) => map(cities, (city) => {
      return {
        id: city.name,
        label: city.name,
        value: city.name,
        ...city
      }
    }),
    (cities) => _.orderBy(cities, ['name'], ['asc'])
  )(cities)
  return city
}

export {
  data,
  cities,
  getCoutries,
  getCities
}