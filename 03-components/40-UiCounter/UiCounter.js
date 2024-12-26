import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: Infinity,
    },

    count: {
      type: Number,
      required: true,
    },
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    function counter(sign) {
      if (sign === '+') {
        emit('update:count', props.count + 1)
      } else {
        emit('update:count', props.count - 1)
      }
    }

    return {
      counter,
    }
    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
  },

  template: `
    <div class="counter">
      <UiButton @click="counter('-')" aria-label="Decrement" :disabled="min === count">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton @click="counter('+')" aria-label="Increment" :disabled="max === count">➕</UiButton>
    </div>
  `,
})
