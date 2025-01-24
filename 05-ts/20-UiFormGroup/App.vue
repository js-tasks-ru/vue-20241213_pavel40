<script lang="ts" setup>
import { ref } from 'vue'
import { UiButton, UiContainer, UiInput, UiStory, UiIcon, UiFlex, UiLink } from '@shgk/vue-course-ui'
import UiFormGroup from './UiFormGroup.vue'

const text = ref('')
</script>

<template>
  <UiContainer>
    <UiStory title="Простое использование">
      <UiFlex column gap="larger">
        <UiFormGroup :invalid="!text" for="password0" hint="Это поле обязательно для заполнения" label="Пароль">
          <UiInput id="password0" v-model="text" />
        </UiFormGroup>

        <UiFormGroup
          :invalid="!text"
          for="password1"
          hint="Это поле обязательно для заполнения"
          label="Повторите пароль"
        >
          <UiInput id="password1" v-model="text" />
        </UiFormGroup>

        <UiButton kind="primary">Зарегистрироваться</UiButton>
      </UiFlex>
    </UiStory>

    <UiStory title="С описанием и подсказкой">
      <UiFlex column gap="larger">
        <UiFormGroup
          description="Пароль важен для защиты вашего аккаунта"
          for="password2"
          hint="По возможности используйте сгенерированный пароль"
          label="Пароль"
          show-hint
        >
          <UiInput id="password2" v-model="text" />
        </UiFormGroup>
        <UiFormGroup
          description="Пароль важен для защиты вашего аккаунта"
          for="password3"
          hint="Требуется одна буква, цифра, иероглиф, постоянная планка"
          invalid
          label="Пароль"
        >
          <UiInput id="password3" v-model="text" />
        </UiFormGroup>
      </UiFlex>
    </UiStory>

    <UiStory title="Кастомный контент">
      <UiFlex column gap="larger">
        <UiFormGroup for="password4" invalid show-hint>
          <template #label>
            <UiFlex gap="small">
              <UiIcon icon="key" />
              Пароль
            </UiFlex>
          </template>
          <template #description>
            Ознакомьтесь с информацией о безопасности пароля в
            <UiLink href="https://en.wikipedia.org/wiki/Password" target="_blank">wiki</UiLink>
            .
          </template>
          <UiInput id="password4" v-model="text" />
        </UiFormGroup>
      </UiFlex>
    </UiStory>
  </UiContainer>
</template>
