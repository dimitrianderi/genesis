<template>
  <div>
    <button class="btn" :disabled="isDisabled">Создать</button>
  </div>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: true
    }
  },
}
</script>

<style></style>
