
<template>
  <div class="flex flex-col justify-center">

    <HeaderItem />

    <!-- Загрузка компонента ListsCardUsers ленивым способом -->
    <component
      v-if="users"
      :is="listsCardUsersComponent"
      :users="users"
      @showOthers="showMore"
    />

      <TheLoader 
      v-if="isLoading" 
      class="mt-5" 
      />

   <!-- Загрузка компонента SendForm ленивым способом -->
      <component
      v-if="positions"
      :is="sendFormComponent"
      :positions="positions"
      @addUser="updateListUsers"
    />


      <SuccessfullyRegistered 
      v-if="isSuccessfully"
      />
  </div>
</template>


<script setup>
import { onMounted, ref, shallowRef } from 'vue';

import HeaderItem from '@/components/HeaderItem.vue';


import SuccessfullyRegistered from '@/components/SuccessfullyRegistered.vue';
import TheLoader from '@/components/TheLoader.vue';


import { requestPositions, requestUsers } from '@/api/index'

const positions = ref()
const users = ref()
const isLoading = ref(false)

const listsCardUsersComponent = shallowRef(null);
const sendFormComponent = shallowRef(null)

onMounted(async () => {
  isLoading.value = true
  positions.value = await requestPositions()
  users.value = await requestUsers()
  isLoading.value = false

  const moduleListsCart = await import('@/components/ListsCardUsers.vue');
      listsCardUsersComponent.value = moduleListsCart.default || moduleListsCart;

  const module = await import('@/components/SendForm.vue');
  sendFormComponent.value = module.default || module;
})

const showMore = async (check) => {
  isLoading.value = true
  if(check) {
    users.value = await requestUsers(users.value.links.next_url)
  } else {
    users.value = await requestUsers(users.value.links.prev_url)
  }
  isLoading.value = false
}
 
const isSuccessfully = ref(false)
const updateListUsers = async () => {
  users.value = await requestUsers()
  isSuccessfully.value = true

 setTimeout( () => {
    isSuccessfully.value = false
  }, 3000 )

}

</script>

<script>
export default {
  name: 'HomeView',
}
</script>

