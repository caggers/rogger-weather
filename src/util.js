import axios from 'axios'

const API = 'http://api.weatherunlocked.com/api'
// const SNOW_API = 'api/snowreport/{resort_id}?app_id={APP_ID}&app_key={APP_KE'
const APP_ID = '6f661e4d'
const APP_KEY = '42b3357840783f5430f920578ca89d05'

const HEADERS = {
  'Accept': 'application/json'
}

export function getData(type, resort_id) {
  const URL = `${API}/${type}/${resort_id}?app_id=${APP_ID}&app_key=${APP_KEY}`
  return axios.get(URL, {
    headers: HEADERS
  })
}
