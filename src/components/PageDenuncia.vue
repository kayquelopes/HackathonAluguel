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
      <div class="cont-bnt">
          <button class="login-btn" type="submit">denunciar</button>
        </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-color: #7c94a1;
  margin: 0;
  padding: 0;
}
.relatorio {
  width: 1200px;
}
.denunciar {
  width: 1200px;
}
h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

div {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.container-motivos{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.motivos {
  width: 290px;
  margin-left: 20px ;
}

input[type='text'],
input[type='email'],
textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='checkbox'] {
  margin-right: 10px;
}

label {
  margin-right: 20px;
}

textarea {
  height: 100px;
}

p {
  color: #555;
  font-size: 0.9em;
}
.login-btn:hover {
  background-color: #0a2a43;
}
.cont-bnt {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}

button {
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 25px 50px;
  color: #d9d9d9;
  width: 350px;
}
</style>
