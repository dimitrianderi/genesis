<template>
  <div class="button">
    <button class="button__btn" :disabled="isDisabled" @click="$emit('submit')">
      Создать
    </button>
  </div>
</template>

<script>
export default {
  props: {
    isDisabled: {
      type: Boolean,
      default: true,
    },
  },
  emit: ['submit'],
}
</script>

<style></style>
