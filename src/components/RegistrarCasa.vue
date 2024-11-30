<script setup>
import { ref } from 'vue'

let nome = ref('')
let email = ref('')
let bio = ref('')
let nCasa = ref('')
let pCasa = ref('')
let bairro = ref('')
let cidade = ref('')
let nComodo = ref('')
</script>
<template>
  <main class="container">
    <div class="relatorio">
      <div class="titulo">
        <h1>Registrar de Casa</h1>
      </div>
      <div class="info-use">
        <h5>Informações do Locator</h5>
        <input
          type="text"
          v-model="nome"
          minlength="3"
          maxlength="20"
          placeholder="digite seu nome"
        />
        <input type="email" v-model="email" placeholder="digite seu email" />
      </div>
      <div class="info-casa">
        <h5>Informações da Casa</h5>
        <input type="text" v-model="nome" minlength="3" maxlength="20" placeholder="Rua da casa" />
        <input type="text" v-model="cidade" placeholder="Cidade" />
        <input type="text" v-model="bairro" placeholder="Bairro" />
        <input type="number" v-model="nCasa" placeholder="Numero da casa" />
        <input type="number" v-model="nComodo" placeholder="Numero de Comodos" />
        <input type="number" v-model="pCasa" placeholder="Preço da casa" />
      </div>
      <div>
        <h5>Descrição da Casa</h5>
        <textarea v-model="bio" placeholder="descreva a casa" />
        <p style="white-space: pre-line"></p>
      </div>
      <div>
        <h5>Imagens da Casa</h5>
        <input type="file" id="myfile" name="myfile" />
        <input type="file" id="myfile" name="myfile" />
        <input type="file" id="myfile" name="myfile" />
        <input type="file" id="myfile" name="myfile" />
      </div>
      <div class="cont-bnt" style="border: none;">
        <button class="enviar-btn" type="submit">enviar</button>
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

h1 {
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
}

.titulo {
  border: none;
  justify-items: center;
}

div {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.container-motivos {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.motivos {
  width: 290px;
  margin-left: 20px;
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

input[type='number'] {
  width: 200px;
  padding: 10px;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type='file'] {
  width: 500px;
  padding: 10px;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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

.enviar-btn {
  font-family: 'Kadwa', serif;
  font-optical-sizing: auto;
  font-weight: weight;
  font-style: normal;
  font-size: 17px;
  margin-top: 20px;
  background-color: #102f4a;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 10px;
}

.enviar-btn:hover {
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
