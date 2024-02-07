<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Сущность</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ getOption(item.title) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from 'vue'
import useDataStore from '@/stores/DataStore'
import options from '@/config/options'

export default {
  setup() {
    const dataStore = useDataStore()
    const items = computed(() => dataStore.getData)

    const getOption = (title) => {
      return options.find(option => option.value === title).title.toLowerCase()
    }

    return {
      items,
      getOption
    }
  },
}
</script>

<style></style>
