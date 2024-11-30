<script setup>
import { ref } from 'vue'

const items = ref([
  {
    id: 1,
    imovel: 'Casa na praia, RJ',
    dataI: '2024-08-17',
    dataF: '2024-08-22',
    custo: '2500,00',
  },
  {
    id: 2,
    imovel: 'Casa na praia, RJ',
    dataI: '2024-09-17',
    dataF: '2024-09-22',
    custo: '2500,00',
  },
  {
    id: 3,
    imovel: 'Casa na praia, RJ',
    dataI: '2024-10-17',
    dataF: '2024-10-22',
    custo: '2500,00',
  },
])
const items2 = ref([
  {
    id: 1,
    imovel: 'Casa no lago, MT',
    data: 'max: 7',
    custoN: '500,00',
    custoT: '3500,00',
    alugada: 'Sim',
  },
  {
    id: 2,
    imovel: 'Casa no lago, GO',
    data: 'max: 7',
    custoN: '500,00',
    custoT: '3500,00',
    alugada: 'Sim',
  },
  {
    id: 3,
    imovel: 'Casa no lago, MG',
    data: 'max: 7',
    custoN: '500,00',
    custoT: '3500,00',
    alugada: 'Sim',
  },
])
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
        <div class="item2-1"><p>Nome: Daniela fas kon selos Cula</p></div>
        <div class="item2-2"><p>Denuncias: 20</p></div>
        <div class="item2-3">
          <p>Telefone: +55 (47) 0800 192 6969</p>
          <p>País: Brasil | Estado: Rio De Janeiro</p>
          <p>Email: Danielafaskon@gmail.com</p>
          <p>senha: 123456789</p>
        </div>
      </div>
      <div class="container-item3">
        <div class="item3-1">
          <div class="titulo"><h2>Casas Alugadas</h2></div>
          <table>
            <colgroup span="4"></colgroup>
            <tr>
              <th class="imovel1">Nome do imovel</th>
              <th class="dataI">Data inicial</th>
              <th class="dataF">Data Final</th>
              <th class="custo">Custo</th>
            </tr>
            <tr v-for="item in items" :key="item.id">
              <td>
                {{ item.imovel }}
              </td>
              <td>
                {{ item.dataI }}
              </td>
              <td>
                {{ item.dataF }}
              </td>
              <td>
                {{ item.custo }}
              </td>
            </tr>
          </table>
        </div>
        <div class="item3-2">
          <div class="titulo"><h2>Suas Casas</h2></div>
          <table>
            <colgroup span="4"></colgroup>
            <tr>
              <th class="imovel2">Nome do imovel</th>
              <th class="data">Dias Maximos</th>
              <th class="custoN">Custo por noite</th>
              <th class="custoT">Custo Total</th>
              <th class="alugada">Alugada</th>
            </tr>
            <tr v-for="item in items2" :key="item.id">
              <td>
                {{ item.imovel }}
              </td>
              <td>
                {{ item.data }}
              </td>
              <td>
                {{ item.custoN }}
              </td>
              <td>
                {{ item.custoT }}
              </td>
              <td>
                {{ item.alugada }}
              </td>
            </tr>
          </table>
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
  box-shadow: 10px 10px;
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
  border: 1px solid black;
  border-radius: 20px;
  width: 60%;
  height: 300px;
  margin-left: 20px;
  margin-top: 100px;
  box-shadow: 10px 10px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  flex-wrap: wrap;
}
.item2-1 {
  border: 1px solid black;
  border-radius: 20px 0 0 0;
  width: 49.8%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item2-2 {
  border: 1px solid black;
  border-radius: 0 20px 0 0;
  width: 49.8%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item2-3 {
  border: 1px solid black;
  border-radius: 0 0 0 20px;
  width: 99.8%;
  height: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
.container-item3 {
  border: 1px solid black;
  border-radius: 20px;
  width: 82.5%;
  height: 600px;
  margin-top: 50px;
  margin-bottom: 100px;
  box-shadow: 10px 10px;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
}
.titulo {
  color: rgb(0, 0, 0);
  max-width: 810px;
  min-height: 50px;
  margin-top: 1cm;
  margin-left: 5cm;
}
h2 {
  text-align: center;
  font-size: 25px;
}
p {
  font-family: 'Kadwa', serif;
  font-size: 20px;
}
.item2-3 > p {
  font-family: 'Kadwa', serif;
  font-size: 20px;
  margin-left: 50px;
}
</style>
