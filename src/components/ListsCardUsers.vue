
<template>
  <div class="flex flex-col items-center justify-center mt-40">
    <h2 class="text-4xl mb-10 text-center">Working with GET request</h2>

    <ul 
    v-if="users.users"
    class="gap-3 grid sm:grid-cols-2 lg:grid-cols-3"
    >
      <li v-for="u in users.users"
      :key="u.id"
      >
        <UserCard 
        :date="u"
        />
      </li>
    </ul>

    <div class="flex gap-3">
      <ButtonItem 
      v-if="computedPrev !== null"
      text="Prev More"
      @onClick="emit('show-others', false)"
    />

    <ButtonItem 
      v-if="computedNext !== null"
      text="Show More"
      @onClick="emit('show-others', true)"
    />
    </div>


  </div>
</template>


<script setup>
import { computed } from 'vue';

import UserCard from './UserCard.vue';
import ButtonItem from './el/ButtonItem.vue';


const emit = defineEmits({
  'show-others': [Boolean]
})

const props = defineProps({
  users: {
    required: true,
    type: Object
  }
})

const computedPrev = computed( () => props.users.links.prev_url )
const computedNext = computed( () => props.users.links.next_url )


</script>

<script>
export default {
  name: 'ListsCardUsers',
}
</script>

