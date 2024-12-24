import { computed, defineComponent, ref } from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
  name: 'MarkedEmailsApp',

  setup() {
    const search = ref(null)
    const email = ref(emails)

    const emailMarked = computed(() => {
      return email.value.map((mail) => {
        if (mail.indexOf(search.value) !== -1 && search.value !== "") {
          return {
            mail: mail,
            marked: true,
          }
        }
        return {
          mail: mail
        }
      })
    })

    return {
      search,
      emailMarked,
      email
    }
  },

  template: `
    <div>
      <div class="form-group">
        <input v-model="search" type="search" aria-label="Search" />
      </div>
      <ul aria-label="Emails">
        <li :class="{'marked': mail.marked}" v-for="mail in emailMarked" >
          {{ mail.mail }}
        </li>
      </ul>
    </div>
  `,
})
