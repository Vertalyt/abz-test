<template>
  <div class="flex flex-col items-center justify-center my-10">

    <h2 class="text-4xl mb-5 text-center">Working with GET request</h2>

    <Form
      v-slot="{ meta }"
      :initial-values="initialValues"
      class="space-y-10"
      @submit="onSubmit"
      :validation-schema="schema"
    >
      <div v-for="{ name, placeholder, autocomplete } in listsItems" :key="name" class="flex flex-col">
        <Field :name="name" :type="name" v-slot="{ field, errorMessage }">
          <input
            v-bind="field"
            :class="{ 'border-red-400 focus:ring-red-400': errorMessage }"
            class="w-80 md:w-96 rounded-md pl-10 text-sm py-5 my-3 border border-gray-200 focus:outline-none focus:ring focus:ring-gray-300"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
          />
          <span v-if="errorMessage">⛔️ {{ errorMessage }}</span>
        </Field>
      </div>

      <div class="flex flex-col gap-3 pt-4 mb-40">

        <h3>Select your position</h3>
        <div v-for="{ name, id } in positions" :key="id" class="flex gap-3">
          <Field
            name="position_id"
            :id="name"
            type="radio"
            class="w-5 h-5 text-blue-600 bg-gray-100 border rounded-full border-gray-300 focus:ring-blue-500"
            :value="id"
          />
          <label :for="name" class="text-sm font-medium text-gray-900">{{ name }}</label>
        </div>
      </div>

      <div
        class="w-80 md:w-96 relative flex flex-col justify-center h-16 rounded-md border border-gray-300 text-sm py-3 file:hidden pl-28"
      >
        <Field
          name="avatar"
          type="file"
          :rules="{ mimes: ['image/jpeg'] }"
          v-slot="{ field, errorMessage }"
        >
          <input
            type="file"
            id="avatar"
            ref="fileInput"
            accept="image/jpeg"
            :title="fileName"
            v-bind="field"
            class="hidden"
            @change="updateFileName($event)"
          />
          <label for="avatar" class="custom-file-upload">
            <i
              class="absolute left-0 top-0 h-full flex items-center justify-center w-24 border border-gray-700 rounded-l-lg bg-gray-100 hover:bg-gray-200"
            >
              Upload
            </i>
          </label>
          <div @click="activeTriggerClick" class="justify-center">{{ fileName }}</div>
          <span v-if="errorMessage">⛔️ {{ errorMessage }}</span>
        </Field>
      </div>
      <div class="flex justify-center">
        <ButtonItem :isDisabled="!meta.valid" isType="submit" text="Sigh up" />
      </div>
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Form, Field } from 'vee-validate'

import { schema } from '@/functions'

import ButtonItem from './el/ButtonItem.vue'
import { addUser } from '@/api/index'


const emit = defineEmits({
'addUser': null
})

defineProps({
  positions: {
    required: true,
    type: Array
  }
})


const listsItems = [
  { name: 'name', placeholder: 'Your name', autocomplete:"name" },
  { name: 'email', placeholder: 'Your email', autocomplete:"email" },
  { name: 'phone', placeholder: 'Your phone', autocomplete:"phone" }
]


const initialValues = {
  phone: '+380'
}


// вызываю открытие окна загрузки при нажатии по инпуту
const fileInput = ref('')
const activeTriggerClick = () => {
  fileInput.value.click() // Вызываем клик на элементе input[type="file"]
}

// меняю на кастомное название описание загрузки
const fileName = ref('Upload your photo')
const updateFileName = (event) => {
  const fileInput = event.target
  if (fileInput.files.length > 0) {
    fileName.value = fileInput.files[0].name
  } else {
    fileName.value = 'Upload your photo'
  }
}

async function onSubmit(values, actions) {
  const result = await addUser(values)
  if(result.success) {
    emit('addUser')
  }
  fileName.value = 'Upload your photo'
  actions.resetForm()
}
</script>

<script>
export default {
  name: 'SendForm'
}
</script>
