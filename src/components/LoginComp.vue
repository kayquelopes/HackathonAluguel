<script setup>
import { reactive } from 'vue'
import router from '@/router'

const infoUser = reactive({
  email: '',
  senha: '',
})
const emailUser = 'user@gmail.com'
const senhaUser = '12345'

function enviar(infoUser) {
  if (infoUser.email == emailUser && infoUser.senha == senhaUser) {
    router.push('/PagInic')

  } else {
    alert('Erro, tem alguma informação incorreta')
  }
}
</script>
<template>
  <div class="login-page">
    <div class="login-container">
      <div class="titulo">
        <h1 style="color: #164773">Login</h1>
      </div>
      <form @submit.prevent="enviar(infoUser)">
        <div>
          <input type="email" placeholder="Email" class="login-inp" v-model="infoUser.email" />
          <RouterLink to="/EscEmail">Não tenho conta</RouterLink>
          <input type="password" placeholder="Senha" class="login-inp" v-model="infoUser.senha" />
          <a href="#">esqueci minha senha</a>
        </div>
        <div class="cont-bnt">
          <button class="login-btn" type="submit">Login</button>
        </div>
        <hr style="margin-bottom: 10px" />
        <RouterLink to="/Register">Não tenho conta</RouterLink>
      </form>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');

h1 {
  font-family: 'Kadwa', serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
  font-size: 38px;
}

a {
  color: black;
}

button {
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 25px 50px;
  color: #d9d9d9;
  width: 350px;
}

.login-page {
  background-color: #7c94a1;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login-container {
  background-color: #fffffff5;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.titulo {
  height: 76px;
}

.login-inp {
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 15px;
  border: none;
  border-radius: 50px;
  width: 90%;
  height: 40px;
  background-color: #d9d9d9;
  padding: 9px;
  opacity: 0.5;
}

.login-inp::placeholder {
  color: #164773;
  opacity: 0.7;
  font-family: 'Kadwa', serif;
  font-optical-sizing: auto;
  font-weight: bold;
  font-style: normal;
}

.login-btn {
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

.login-btn:hover {
  background-color: #0a2a43;
}
.cont-bnt {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 10px;
}
</style>
