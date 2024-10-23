<script setup>
import { ref } from 'vue'
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
////////////// CRIAR MAIS LETS

let nome = ref('')
let email = ref('')
let bio = ref('')
let Smot = ref([])

</script>
<template>
  <main class="container">
    <div class="relatorio">
      <h1>Relatorio</h1>
      <div>
        <input
          type="text"
          v-model="nome"
          minlength="3"
          maxlength="20"
          placeholder="digite seu nome"
        />
        <input type="email" v-model="email" placeholder="digite seu email" />
      </div>
      <div>
        <textarea v-model="bio" placeholder="descreva o ocorrido" />
        <p style="white-space: pre-line"></p>
      </div>
    </div>

    <div class="denunciar">
      <h1>Denunciar</h1>
      <div>
        <input
          type="text"
          v-model="nome"
          minlength="3"
          maxlength="20"
          placeholder="Nome do denunciado"
        />
        <input type="email" v-model="email" placeholder="Email do denunciado" />
      </div>
      <div class="container-motivos">
        <div v-for="(mot, index) in counterStore.motivos" :key="index" class="motivos">
          <input type="checkbox" v-model="Smot" :value="mot.id" :id="mot.id" />
          <label :for="mot.id">{{ mot.details }}</label>
        </div>
      </div>
      <span>{{ Smot }}</span>
    </div>
  </main>
</template>

<style scoped>
</style>
