import { defineStore } from 'pinia'
import { computed, reactive, watch } from 'vue'

const useDataStore = defineStore('dataStore', () => {
  const data = reactive(
    localStorage.getItem('dataValues')
      ? JSON.parse(localStorage.getItem('dataValues'))
      : []
  )
  const getData = computed(() => data)

  const addData = (newData) => {
    data.push(newData)
  }

  watch(data, (newValue) => {
    localStorage.setItem('dataValues', JSON.stringify(newValue))
  })

  return {
    getData,
    addData,
  }
})

export default useDataStore
