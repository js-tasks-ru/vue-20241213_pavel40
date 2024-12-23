import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0)

    const counter = computed(() => {
      return {
        minus: count.value > 0 ? false : true,
        plus: count.value > 4 ? true : false,
      }
    })
    return {
      count,
      counter,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="counter.minus"
        @click="count--"
      >➖</button>

      <span class="count" data-testid="count">{{count}}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="counter.plus"
        @click="count++"
      >➕</button>
    </div>
  `,
})
