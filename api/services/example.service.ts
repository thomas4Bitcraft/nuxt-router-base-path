import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default class ExampleService {
  axios: NuxtAxiosInstance

  constructor(axios: NuxtAxiosInstance) {
    this.axios = axios
  }

  get() {
    return this.axios.get('/foo/bar')
  }
}
