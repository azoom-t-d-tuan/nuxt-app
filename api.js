import ky from 'ky-universal'

const api = ky.create({
  prefixUrl: "https://api.openweathermap.org",
  credentials: 'same-origin'
})

export default api
