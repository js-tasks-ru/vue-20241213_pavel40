import { defineComponent, onUnmounted, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const date = ref(new Intl.DateTimeFormat(navigator.language, { timeStyle: 'medium' }).format(new Date()))

    const interval = setInterval(() => {
      date.value = new Intl.DateTimeFormat(navigator.language, { timeStyle: 'medium' }).format(new Date())
    }, 1000)

    onUnmounted(() => {
      clearInterval(interval)
    })

    return {
      date,
    }
  },

  template: `
    <div class="clock">{{ date }}</div>`,
})
