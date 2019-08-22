<template>
  <v-container>
    <h1 class="display-1 text-center">Weather App</h1>
      <v-flex xs12>
        <v-card  color="blue-gray darken-2" dark>
          <v-card-text>
            <v-layout justify-center>
            <v-flex class="text-center">
              <h4>Temp</h4>
              <h1 class="display-1">{{ weather.name }}</h1>
              <p>
                <span class="display-1">{{ temp() }} &#176;C</span>
              </p>
            </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
          <v-flex xs12 class="mt-4">
            <v-form @submit.prevent="getWeatherInfo">
              <v-text-field v-model="city"
                label="Enter City Name "
                solo
              ></v-text-field>
            </v-form>
          </v-flex>
  </v-container>
</template>
<script>
import api from '../api'
export default {
  data() {
    return {
      city: "London",
      weather: {}
    }
  },
  created() {
    this.getWeatherInfo()
  },
  methods: {
    // use ky-universal
    async getWeatherInfo() {
      const res = await api.get(`data/2.5/weather?q=${
          this.city
        }&appid=4f02159a0c1097df24bfbe384d967e49`)
      .json().then((res) => {
        this.weather = res
      })
    },
    // use axios
    // getWeatherInfo() {
    //   this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${
    //     this.city
    //   }&appid=4f02159a0c1097df24bfbe384d967e49`)
    //   .then(res => {
    //     (this.weather = res),
    //     console.log(res)})
    //   },
    temp() {
      return this.weather.main ? Math.round(this.weather.main.temp - 273) : ''
    }
  }
}
</script>