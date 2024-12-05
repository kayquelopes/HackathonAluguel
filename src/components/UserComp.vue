<script setup>
const casaAlugadas = 10
const casaAlugou = 15
const denuncias = 0
const pais = "Brasil"
const estado = "Rio De Janeiro"
</script>
<template>
  <main>
    <div class="container-user">
      <div class="container-item1">
        <div class="item1-1">
          <img src="../../public/imagens/5165bbc3564b4296c70371b75c9774b0.jpg" alt="" />
        </div>
      </div>
      <div class="container-item2">
        <div class="item2-1">
          <p>Nome: Daniela fas kon selos Cula</p>
        </div>
        <div class="item2-2">
          <p>Telefone: +55 (47) 0800 192 6969</p>
        </div>
        <div class="item2-3">
          <p>Email: daniela.faskon@gmail.com</p>
        </div>
        <div class="item2-4">
          <p>Endereço: Rua do Tatuapé, 123</p>
        </div>
        <div class="item2-5">
          <p>Data de Nascimento: 15/07/1990</p>
        </div>
        <div class="item2-6">
          <p>País: {{ pais }} | Estado: {{ estado }}</p>
        </div>
      </div>
      <div class="container-item3">
        <p>Denuncias: {{ denuncias }}</p>
      </div>
      <div class="container-item4">
        <p>SUAS CASA QUE FORAM ALUGADAS: {{ casaAlugadas }}</p>
      </div>
      <div class="container-item5">
        <p>Status da sua conta: <a href="#" style="color: green; text-decoration: none;">Autorizada</a></p>
      </div>
      <div class="container-item6">
        <p>CASA QUE VOCÊ ALUGOU: {{ casaAlugou }}</p>
      </div>
      <div class="container-item7">
        <div class="cont-bnt">
          <button class="deletar-btn" type="submit">Deletar</button>
        </div>
      </div>
      <div class="container-item8">
        <div class="cont-bnt">
          <button class="deletar-btn" type="submit">Desativar</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');

main {
  width: 100%;
  height: 100%;
}

.container-user {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.container-item1 {
  border: 1px solid black;
  border-radius: 20px;
  width: 20%;
  height: 300px;
  margin-right: 20px;
  margin-top: 100px;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

img {
  width: 150px;
  height: 200px;
}

.container-item2 {
  width: 60%;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 100px 0px 0px 20px;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}

.item2-1 {
  border: 1px solid black;
  border-radius: 20px 20px 0 0;
  width: 1000px;
  height: 100px;
}
.item2-2 {
  width: 452.9px;
  height: 55px;
}

.item2-3 {
  width: 452.9px;
  height: 55px;
}

.item2-4 {
  width: 452.9px;
  height: 55px;
}
.item2-5 {
  width: 452.9px;
  height: 55px;
}
.item2-6 {
  border: 1px solid black;
  border-radius: 0 0 20px 20px;
  width: 1000px;
  height: 89px;
}

.item2-1 > p,
.item2-6 > p {
  font-family: 'Kadwa', serif;
  font-size: 20px;
  margin-top: 30px;
}

.item2-2 > p,
.item2-3 > p,
.item2-4 > p,
.item2-5 > p {
  font-family: 'Kadwa', serif;
  font-size: 14px;
  margin-top: 14px;
}

.container-item3,
 .container-item4 {
  border: 1px solid black;
  border-radius: 20px;
  width: 580px;
  height: 150px;
  margin-top: 50px;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
}

.container-item5,
 .container-item6 {
  border: 1px solid black;
  border-radius: 20px;
  width: 580px;
  height: 150px;
  margin-top: 0px;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
 }
 .container-item3 > p,
 .container-item5 > p{
  font-family: 'Kadwa', serif;
  font-size: 30px;
  margin-top: 50px;
 }

 .container-item4 > p,
 .container-item6 > p{
  font-family: 'Kadwa', serif;
  font-size: 25px;
  margin-top: 50px;
 }
 .container-item7,
 .container-item8 {
  border-radius: 20px;
  width: 580px;
  height: 150px;
  margin-top: 0px;
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
 }
 .deletar-btn {
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

.deletar-btn:hover {
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
