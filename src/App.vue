<template>
  <div class="app">
    <div class="aside">
      <the-select v-model="option"></the-select>
      <the-button :isDisabled="!option" @submit="submit"></the-button>
    </div>
    <the-list></the-list>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import TheSelect from '@/components/TheSelect.vue'
import TheButton from '@/components/TheButton.vue'
import useCreateStore from '@/stores/CreateStore'
import useAuthStore from '@/stores/AuthStore'
import TheList from './components/TheList.vue'

export default {
  components: { TheSelect, TheButton, TheList },

  setup() {
    const option = ref('')
    const createStore = useCreateStore()
    const authStore = useAuthStore()

    const submit = () => {
      createStore.submit(option.value)
    }

    onMounted(() => authStore.fetchToken())

    return {
      option,
      submit,
    }
  },
}
</script>

<style></style>
