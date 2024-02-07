<template>
  <div>
    <label class="" for="select">Выберите:</label>
    
    <select id="select" class="" :value="modelValue" @change="$emit('update:modelValue', $event.target.value)">
      <option v-for="option in options" :value="option.value" :key="value">
        {{ option.title }}
      </option>
    </select>
  </div>
</template>

<script>
import options from '@/config/options'

export default {
  props: {
    modelValue: {
      type: String,
      default: ''
    },
  },
  emit: ['update:modelValue'],

  setup() {
    return { options }
  },
}
</script>

<style></style>
