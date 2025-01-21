import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WeatherAlert',

  template: `
  <div class="weather-alert">
     <span class="weather-alert__icon">⚠️</span>
     <span class="weather-alert__description">
     <slot name="name" ></slot>:
     <br>
     <slot name="description" ></slot>
     </span>
  </div>
  `,
})
