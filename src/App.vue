<template>
  <div class="app">
    <aside class="app__aside">
      <the-select v-model="option"></the-select>
      <app-loader v-if="isLoading"></app-loader>
      <the-button :isDisabled="!option" @submit="submit" v-else></the-button>
    </aside>
    <the-list></the-list>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import TheSelect from '@/components/TheSelect.vue'
import TheButton from '@/components/TheButton.vue'
import useCreateStore from '@/stores/CreateStore'
import useAuthStore from '@/stores/AuthStore'
import TheList from '@/components/TheList.vue'
import AppLoader from '@/components/ui/AppLoader.vue'

export default {
  components: { TheSelect, TheButton, TheList, AppLoader },

  setup() {
    const createStore = useCreateStore()
    const authStore = useAuthStore()
    
    const option = ref('')
    const isLoading = computed(() => createStore.getLoader)

    const submit = () => {
      createStore.submit(option.value)
    }

    onMounted(() => authStore.fetchToken())

    return {
      option,
      isLoading,
      submit,
    }
  },
}
</script>

<style></style>
