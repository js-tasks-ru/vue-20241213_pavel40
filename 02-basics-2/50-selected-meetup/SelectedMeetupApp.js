import { defineComponent, ref, watchEffect } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    const metupId = ref(1)
    const meetup = ref({})
    watchEffect(async () => {
      await getMeetup(metupId.value).then((data) => {
        meetup.value = data
      })
    })


    return {
      meetup,
      metupId
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button @click="metupId--" class="button button--secondary" type="button" :disabled="metupId < 2">Предыдущий</button>

        <div class="radio-group" role="radiogroup">
          <div v-for="id in 5" class="radio-group__button">
            <input
              :id="\`meetup-id-\${id}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="id"
              v-model="metupId"
            />
            <label :for="\`meetup-id-\${id}\`" class="radio-group__label">{{id}}</label>
          </div>

        </div>

        <button @click="metupId++" :disabled="metupId > 4" class="button button--secondary" type="button">Следующий</button>
      </div>

      <div class="meetup-selector__cover">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{meetup.title}}</h1>
        </div>
      </div>

    </div>
  `,
})
