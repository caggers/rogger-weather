import axios from 'axios'

const API = 'http://api.weatherunlocked.com/api'
// const SNOW_API = 'api/snowreport/{resort_id}?app_id={APP_ID}&app_key={APP_KE'
const APP_ID = '6f661e4d'
const APP_KEY = '42b3357840783f5430f920578ca89d05'

const HEADERS = {
  'Accept': 'application/json'
}

export function getData(type, resort_id) {
  const URL = `${API}/${type}/${resort_id}?`
  return axios.get(URL, {
    headers: HEADERS, 
    params: {
      app_id: APP_ID,
      app_key: APP_KEY
    }
  })
}

export function getForecast(resort_id, num_days, interval) {
  const URL = `${API}/resortforecast/${resort_id}`
  return axios.get(URL, {
    headers: HEADERS,
    params: {
      num_of_days: num_days,
      app_id: APP_ID,
      app_key: APP_KEY,
    }
  })
}

export const OPTIONS = [
  {
    text: 'Westendorf',
    value: 'Westendorf'
  },
  {
    text: 'Kitzbuhl',
    value: 'Kitzbuhl'
  },{
    text: 'Ellmau',
    value: 'Ellmau'
  },
  {
    text: 'Jochberg',
    value: 'Jochberg'
  },
  {
    text: 'Saalbach',
    value: 'Saalbach'
  }
]
