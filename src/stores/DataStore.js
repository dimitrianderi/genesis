import { defineStore } from "pinia";
import { computed, reactive } from "vue";

const useDataStore = defineStore('dataStore', () => {
  const data = reactive([])

  const getData = computed(() => data)

  const addData = (newData) => {
    data.push(newData)
  }

  return {
    getData,
    addData
  }
})

export default useDataStore
