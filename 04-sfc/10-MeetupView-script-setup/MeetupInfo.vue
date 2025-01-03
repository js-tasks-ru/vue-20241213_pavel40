<script setup>
import { computed } from 'vue'
import { UiIcon } from '@shgk/vue-course-ui'

const props = defineProps({
  organizer: {
    type: String,
  },

  place: {
    type: String,
  },

  date: {
    type: Number,
  },
})
const isoDate = computed(() => new Date(props.date).toISOString().slice(0, 10))
const localDate = computed(() =>
  new Date(props.date).toLocaleString(navigator.language, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }),
)
</script>

<template>
  <ul class="meetup-info">
    <li>
      <UiIcon class="meetup-info__icon" icon="user" />
      {{ organizer }}
    </li>
    <li>
      <UiIcon class="meetup-info__icon" icon="map" />
      {{ place }}
    </li>
    <li>
      <UiIcon class="meetup-info__icon" icon="cal-lg" />
      <time :datetime="isoDate">{{ localDate }}</time>
    </li>
  </ul>
</template>

<style scoped>
.meetup-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-small);
}

.meetup-info li {
  position: relative;
  display: flex;
  gap: var(--spacing-small);
}

.meetup-info__icon {
  width: var(--control-size-small);
  height: var(--control-size-small);
}
</style>
