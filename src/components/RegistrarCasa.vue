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
                <input type="text" v-model="nome" minlength="3" maxlength="20" placeholder="digite seu nome" />
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
                <input type="file" id="myfile" name="myfile">
                <input type="file" id="myfile" name="myfile">
                <input type="file" id="myfile" name="myfile">
                <input type="file" id="myfile" name="myfile">
            </div>
        </div>

    </main>
</template>

<style scoped>

</style>
