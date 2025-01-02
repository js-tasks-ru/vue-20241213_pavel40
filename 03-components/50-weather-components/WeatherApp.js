import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import './WeatherApp.css'
import WeatherList from './WeatherList.js'
import WeatherCard from './WeatherCard.js'

export default defineComponent({
  name: 'WeatherApp',
  components: { WeatherCard, WeatherList },
  setup() {
    const weatherData = getWeatherData()
    const weatherIcons = WeatherConditionIcons
    return {
      weatherData,
      weatherIcons,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList>
        <WeatherCard :icons="weatherIcons" :data="data" v-for="data in weatherData" />
      </WeatherList>
    </div>
  `,
})
