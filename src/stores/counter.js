import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const motivos = ref([
    { id: 'descricao', details: 'Resitencia diferente da descrição' },
    { id: 'JavaScript', details: 'JavaScript' },
    { id: 'Java', details: 'Java' },
    { id: 'C++', details: 'C++' },
    { id: 'Ruby', details: 'Ruby' },
  ])

  return { motivos}
})
