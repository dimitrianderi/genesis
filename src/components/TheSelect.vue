<template>
  <div class="control">
    <label class="control__label" for="select">Выберите:</label>

    <select class="control__select" id="select" :value="modelValue" @change="changeSelect">
      <option class="control__select-option" v-for="option in options" :value="option.value" :key="option.title">
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
      default: '',
    },
  },
  emit: ['update:modelValue'],

  setup(_, context) {
    const changeSelect = (e) => {
      context.emit('update:modelValue', e.target.value)
    }

    return { 
      options,
      changeSelect
    }
  },
}
</script>

<style></style>
