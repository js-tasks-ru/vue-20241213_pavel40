import { defineComponent } from 'vue'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherList',

  template: `
    <ul class="weather-list unstyled-list">
        <slot></slot>
    </ul>
  `,
})
