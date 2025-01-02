import { defineComponent } from 'vue'
import WeatherAlert from './WeatherAlert.js'

export default defineComponent({
  name: 'WeatherCard',
  components: { WeatherAlert },
  props: {
    data: { type: Object, required: true },
    icons: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    function conversionToDegreesCelsius(data) {
      const num = data - 273.15
      return num.toFixed(1)
    }

    function conversionToMmHg(data) {
      return Math.round(data * 0.75)
    }

    function isNight({ dt, sunrise, sunset } = props.data.current) {
      return dt < sunrise && dt < sunset
    }

    return {
      isNight,
      conversionToDegreesCelsius,
      conversionToMmHg,
    }
  },

  template: `
    <li :class="{'weather-card--night': isNight()}" class="weather-card">
      <WeatherAlert v-if="data.alert">
        <template v-slot:name>{{ data.alert.sender_name }}</template>
        <template v-slot:description>{{ data.alert.description }}</template>
      </WeatherAlert>
      <div>
        <h2 class="weather-card__name">
          {{ data.geographic_name }}
        </h2>
        <div class="weather-card__time">
          {{ data.current.dt }}
        </div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="data.current.weather.description">
          {{ icons[data.current.weather.id] }}
        </div>
        <div class="weather-conditions__temp">{{ conversionToDegreesCelsius(data.current.temp) }} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">{{ conversionToMmHg(data.current.pressure) }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ data.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ data.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ data.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  `,
})
