<template>
  <div class="list">
    <table class="list__table">
      <thead class="list__table-thead">
        <tr>
          <th class="list__table-t">Id</th>
          <th class="list__table-t">Сущность</th>
        </tr>
      </thead>
      <tbody class="list__table-tbody">
        <tr v-for="item in items" :key="item.id">
          <td class="list__table-t">{{ item.id }}</td>
          <td class="list__table-t">{{ getOption(item.title) }}</td>
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
