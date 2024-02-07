<template>
  <the-select v-model="option"></the-select>
</template>

<script>
import TheSelect from '@/components/TheSelect.vue'
import { ref } from 'vue'
export default {
  components: { TheSelect },
  setup() {
    const option = ref('')

    return {
      option
    }
  }
}
</script>

<style>

</style>