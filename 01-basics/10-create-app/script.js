import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'app',
  setup() {
    const date = new Date().toLocaleDateString('en-EN', { dateStyle: 'long' })
    return {
      date,
    }
  },
  template: '<div>Сегодня {{ date }}</div>',
})

const app = createApp(App)

app.mount('#app')
