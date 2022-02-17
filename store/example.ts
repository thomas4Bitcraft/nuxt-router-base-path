// @ts-check
import { defineStore } from 'pinia'

export const useLoginStore = defineStore({
  id: 'example',
  state: () => ({
    foo: '',
  }),

  actions: {
    setFoo() {
      this.$patch({
        foo: 'bar',
      })
    },
  },
})
