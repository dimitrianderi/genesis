import axios from 'axios'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue';

const API_URL = import.meta.env.VITE_API_URL;
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

const config = {
  headers: {
    'X-Client-Id': CLIENT_ID,
    'Content-Type': 'application/json'
  }
};

const useAuthStore = defineStore('authStore', () => {
  const token = ref('')
  const domain = ref('')

  const setToken = (access_token) => {
    token.value = access_token
  }

  const setDomain = (base_domain) => {
    domain.value = base_domain
  }

  const getToken = computed(() => token.value)
  const getDomain = computed(() => domain.value)

  const fetchToken = async () => {
    try {
      const {data} = await axios.get(API_URL, config);
      setToken(data.access_token)
      setDomain(data.base_domain)
    } catch (e) {
      console.error(`Ошибка при выполнении запроса: ${e.message}`);
    }
  }

  return {
    fetchToken,
    getToken,
    getDomain
  }
})

export default useAuthStore
