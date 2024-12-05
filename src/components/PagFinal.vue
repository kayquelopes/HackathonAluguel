<script setup>
import { RouterLink } from 'vue-router'
const datainic = '22/12/2024'
const datafinal = '27/12/2024'
</script>
<template>
  <main>
    <div class="title-container">
      <h3 class="title"><RouterLink to="/PageInfo" class="ttl">Voltar</RouterLink></h3>
    </div>
    <div class="suaviagem">
      <div class="item1">
        <p>Data Inicial: {{ datainic }}</p>
        <a href="#">Editar</a>
      </div>
      <div class="item2">
        <p>Data Final: {{ datafinal }}</p>
        <a href="#">Editar</a>
      </div>
    </div>
    <div class="confrimainfo">
      <div class="item3">
        <div class="item-1">
          <div class="text">
            <img src="../../public/imagens/Captura de tela 2024-09-23 211734.png" alt="" />
          </div>
          <div class="text2">
            <p>nome do Imovel: Fique na casa de frente para o mar em Búzios</p>
            <p>
              Espaço inteiro: apartamento em Manguinhos, Brasil <br />
              2 hóspedes · 1 quarto · 1 cama · 1 banheiro
            </p>
          </div>
        </div>
        <hr />
        <div class="item-2">
          <h3>Informações</h3>
          <p>R$415 x 5 noites R$2.075</p>
          <p>Taxa de limpeza R$220</p>
          <p>Taxa de serviço do Masion R$334</p>
          <hr />
          <p>Total sem impostos R$2.629</p>
        </div>
      </div>
    </div>
    <div class="item4">
      <div class="i1"><input type="checkbox">Cartão debito: kayque **45</div>
      <div class="i2"><RouterLink to="/RegistrarPagamento" class="ttl">cadastrar cartão</RouterLink></div>
    </div>
    <div class="item5" style="border: none"><button class="btn-hosp">Hospedar</button></div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');

main {
  width: 100%;
  height: 100%;
}
.title-container {
  margin: 50px 0 0 50px;
}
.ttl {
  text-decoration: none;
  color: black;
}
.suaviagem {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.item1,
.item2 {
  width: 600px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0px 50px 50px;
  box-shadow: 5px 5px;
  padding: 20px 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
.item1 > p,
.item2 > p {
  font-family: 'Kadwa', serif;
  font-size: 20px;
  margin-top: 30px;
}
.item1 > a,
.item2 > a {
  font-family: 'Kadwa', serif;
  font-size: 20px;
  margin-top: 30px;
  color: black;
  margin-left: 180px;
}
.confrimainfo {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
img {
  width: 200px;
  height: 150px;
  border-radius: 20px;
}

.item3{
  width: 1300px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0px 50px 50px;
  box-shadow: 5px 5px;
  padding: 20px 32px;
}
.item4{
  width: 300px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0px 50px 50px;
  box-shadow: 5px 5px;
  padding: 20px 32px;
}
.i1{
  width: 1700px;
  height: 100px;
}
.item-1 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.text2 {
  margin-left: 10px;
  font-family: 'Kadwa', serif;
  font-size: 16px;
}
.item-2 > p {
  margin-top: 5px;
}
.btn-hosp {
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

.btn-hosp:hover {
  background-color: #0a2a43;
}

.item5 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  margin-left: 50px;
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
