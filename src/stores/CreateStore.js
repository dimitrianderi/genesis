import axios from 'axios'
import { defineStore } from 'pinia'
import useAuthStore from '@/stores/AuthStore'
import useDataStore from '@/stores/DataStore'

const useCreateStore = defineStore('createStore', () => {
  const authStore = useAuthStore()
  const dataStore = useDataStore()

  const submit = async (payload) => {
    const DOMAIN = authStore.getDomain
    const TOKEN = authStore.getToken
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TOKEN}`,
      },
    }

    try {
      const { data } = await axios.post(
        `https://${DOMAIN}/api/v4/${payload}`,
        { name: [payload] },
        config
      )
      const ids = data._embedded[payload].map((el) => el.id).join(' ')
      dataStore.addData({id: ids, title: payload})
    } catch (e) {
      console.error(`Ошибка при выполнении запроса: ${e}`)
    }
  }

  return {
    submit,
  }
})

export default useCreateStore
