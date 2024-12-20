import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',
  setup() {
    const weatherData = getWeatherData()

    const conversionToDegreesCelsius = function (data) {
      const num = data - 273.15
      return num.toFixed(1)
    }

    const conversionToMmHg = function (data) {
      return Math.round(data * 0.75)
    }

    const isNight = function({dt,sunrise,sunset} = data){
      const currentTime = Number(dt.slice(0,2))
      const currntSunrise = Number(sunrise.slice(0,2))
      const currntSunset = Number(sunset.slice(0,2))
      return currentTime < currntSunrise && currentTime < currntSunset
    }

    return {
      weatherData,
      WeatherConditionIcons,
      conversionToDegreesCelsius,
      conversionToMmHg,
      isNight
    }
  },
  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul v-for="data in weatherData" class="weather-list unstyled-list">
        <li :class="{'weather-card--night': isNight(data.current)}" class="weather-card">
          <div v-if="data.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{data.alert.sender_name}}: <br/> {{data.alert.description}}</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{data.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{data.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="data.current.weather.description">{{WeatherConditionIcons[data.current.weather.id]}}</div>
            <div class="weather-conditions__temp">{{conversionToDegreesCelsius(data.current.temp)}} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{conversionToMmHg(data.current.pressure)}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{data.current.humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{data.current.clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{data.current.wind_speed}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
