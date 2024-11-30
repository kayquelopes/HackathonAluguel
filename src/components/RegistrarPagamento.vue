<script setup></script>
<template>
  <main class="container">
    <div class="cadastro">
      <div class="titulo">
        <h1>Cadastro do cartão</h1>
      </div>
      <div class="info-use">
        <h5>Informações do Titular do cartão</h5>
        <input type="text" minlength="3" maxlength="20" placeholder="digite o nome do titular" />
        <input type="number" minlength="1" maxlength="11" placeholder="digite seu cpf" />
      </div>
      <div class="info-cartao">
        <h5>Informações do cartão</h5>
        <input type="number" placeholder="Numero do cartão" />
        <input type="number" placeholder="Codigo de segurança" />
        <input type="date" placeholder="Data de Vencimento" />
      </div>
      <div class="exemp-cartao">
        <h5>Imagem de exemplo</h5>
        <img src="../../public/imagens/design-realista-de-cartao-de-credito_23-2149124864.avif" alt="" class="imagem">
      </div>
      <div class="cont-bnt" style="border: none">
        <button class="enviar-btn" type="submit">cadastrar</button>
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

.cadastro {
  width: 1200px;
  margin-top: 100px;
  margin-bottom: 100px;
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

input[type='text'] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

input[type='number'],
input[type='date'] {
  width: 300px;
  padding: 10px;
  margin-top: 5px;
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
.imagem{
    width: 500px;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
    margin: 20px 350px;
}
</style>
