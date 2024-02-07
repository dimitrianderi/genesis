import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import useAuthStore from '@/stores/AuthStore'
import useDataStore from '@/stores/DataStore'

const useCreateStore = defineStore('createStore', () => {
  const authStore = useAuthStore()
  const dataStore = useDataStore()
  const loader = ref(false)

  const getLoader = computed(() => loader.value)

  const setLoader = (value) => {
    loader.value = value
  }

  const submit = async (payload) => {
    const DOMAIN = authStore.getDomain
    const TOKEN = authStore.getToken

    const url = `https://${DOMAIN}/api/v4/${payload}`
    const body = {name: [payload]}
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    }

    try {
      setLoader(true)
      const { data } = await axios.post(url, body, config)
      const ids = data._embedded[payload].map((el) => el.id).join(' ')
      dataStore.addData({ id: ids, title: payload })
    } catch (e) {
      console.error(`Ошибка при выполнении запроса: ${e}`)
    } finally {
      setLoader(false);
    }
  }

  return {
    getLoader,
    submit,
  }
})

export default useCreateStore
