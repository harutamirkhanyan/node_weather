import axios from 'axios'
import { getKeyValue, TOKEN_DICTIONARY } from './storage.service.js'

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token)
  if (!token) {
    throw new Error('No API key, Enter API key with comand -t [API_KEY]')
  }

  const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
    params: {
      q: city,
      appid: token,
      lang: 'ru',
      units: 'matric'
    }
  })
  return data
}

export { getWeather }