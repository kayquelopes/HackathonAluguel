<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import {
  mdiBeach,
  mdiCreation,
  mdiBarn,
  mdiCurtains,
  mdiSnowflake,
  mdiPool,
  mdiCampfire,
  mdiCandelabra,
  mdiCastle,
  mdiPuzzle,
  mdiInformation
} from '@mdi/js'

const path = ref(mdiCreation)
const path2 = ref(mdiBeach)
const path3 = ref(mdiBarn)
const path4 = ref(mdiCurtains)
const path5 = ref(mdiSnowflake)
const path6 = ref(mdiPool)
const path7 = ref(mdiCampfire)
const path8 = ref(mdiCandelabra)
const path9 = ref(mdiCastle)
const path10 = ref(mdiPuzzle)
const path11 = ref(mdiInformation)
</script>
<template>
  <main>
    <div class="container-main">
      <div class="menu-search">
        <button class="bnt-ms"><svg-icon type="mdi" :path="path" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path2" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path3" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path4" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path5" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path6" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path7" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path8" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path9" class="icon"></svg-icon></button>
        <button class="bnt-ms"><svg-icon type="mdi" :path="path10" class="icon"></svg-icon></button>
      </div>
      <div class="titulo">
        <h2>Ultimos Lançamentos:</h2>
      </div>
      <div class="casa-item">
        <div class="card1">
          <div class="imagem">
            <img src="../../public/imagens/Captura de tela 2024-09-23 211734.png" alt="" />
          </div>

          <div class="texto">
            <p>Búzios, RJ </p>
            <p>Bairro dos Búzios</p>
            <p>R$ 415,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>

          <button class="info"><svg-icon type="mdi" :path="path11" class="icon"></svg-icon></button>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
      </div>
      <div class="titulo">
        <h2>Ultimas casas vistas por você:</h2>
      </div>
      <div class="casa-item">
        <div class="card1">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
      </div>
      <div class="titulo">
        <h2>Destaques da semana:</h2>
      </div>
      <div class="casa-item">
        <div class="card1">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
        <div class="card2">
          <div class="imagem">
            <img src="../../public/imagens/casa-de-praia (1).jpg" alt="" />
          </div>

          <div class="texto">
            <p>Florianopolis, SC </p>
            <p>Bairro dos tristes</p>
            <p>R$ 100,00 Por dia</p>
            <p>Max: 5 noites</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');

.container-main {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.menu-search {
  background-color: #50616a;
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.bnt-ms {
  background-color: white;
  border: none;
  border-radius: 20px;
  height: 53px;
}

.icon {
  width: 55px;
}

.titulo {
  width: 100%;
}

h2 {
  margin-top: 100px;
  margin-left: 100px;
  font-size: 40px;
}

.casa-item {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.card1 {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 10px 10px;
  margin-left: 100px;
}

.card2 {
  width: 200px;
  height: 300px;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 10px 10px;
  margin-left: 25px;
}

.imagem {
  width: 100%;
}

img {
  width: 150px;
  height: 100px;
  border-radius: 20px;
  margin-left: 25px;
  margin-top: 25px;
}

.texto {
  margin-left: 25px;
  margin-top: 25px;
}

p {
  margin-bottom: 2px;
}
.info{
margin-left: 125px;
border-radius: 20px;
background-color: #abc9d9;
box-shadow: 2px 2px;
}
</style>