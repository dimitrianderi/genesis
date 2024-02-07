<template>
  <the-select v-model="option"></the-select>
  <the-button :isDisabled="!option"></the-button>
</template>

<script>
import { ref } from 'vue'
import TheSelect from '@/components/TheSelect.vue'
import TheButton from '@/components/TheButton.vue'

export default {
  components: { TheSelect, TheButton },
  setup() {
    const option = ref('')

    return {
      option,
    }
  },
}
</script>

<style></style>
