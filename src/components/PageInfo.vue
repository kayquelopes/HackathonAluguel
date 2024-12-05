<script setup></script>
<template>
  <main>
    <div class="geral">
      <div class="item1">
        <h2>Fique na casa de frente para o mar em Búzios</h2>
        <a href="#" style="margin-left: 720px">Compartilha</a>
        <a href="#" style="margin-left: 10px">Salvar</a>
      </div>
      <div class="item2">
        <img
          src="../../public/imagens/IDbe543a01-0000-0500-0000-00000deaf46a.jpg"
          alt=""
          class="img1"
        />
      </div>
      <div class="item3">
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
        <div class="img-3"></div>
      </div>
      <div class="item4">
        <p>
          Espaço inteiro: apartamento em Manguinhos, Brasil <br />
          2 hóspedes · 1 quarto · 1 cama · 1 banheiro
        </p>
      </div>
      <div class="item5">
        <div class="item5-1">
          <div class="i5-1-vedendor">
            <div class="foto"></div>
            <p class="info-v">
              Anfitriã(o): Daniel Vasc Imobiliaria
              <br />
              Superhost · 24 anos hospedando
            </p>
            <p class="nota">5,0 / 5,0</p>
          </div>
          <div class="i5-1-qualid">
            <p class="info-v2">
              Daniel Vasc Imobiliaria é um Superhosts:
              <br />
              Superhosts são anfitriões experientes, com ótimas avaliações.
            </p>
            <p class="info-v2">
              Ótima experiência de check-in:
              <br />
              Hóspedes recentes adoraram o início tranquilo desta estadi
            </p>
            <p class="info-v2">
              Cancelamento gratuito antes de 5 de set:
              <br />
              Receba um reembolso integral se mudar de ideia.
            </p>
          </div>
        </div>
        <div class="item5-2">
          <div class="i5-2-valores">
            <p class="info-v3">R$ 415,00</p>
            <div class="info-hosp">
              <div class="data-inic"><input type="date" class="date" /></div>
              <div class="data-final"><input type="date" class="date" /></div>
              <div class="hosp-quant">
                <select class="cad2-inp">
                  <option disabled value="">Escolha um item</option>
                  <option>1 Hóspede</option>
                  <option>2 Hóspedes</option>
                  <option>2 Hóspedes e 1 Bebê</option>
                </select>
              </div>
              <div class="info-valor">
                <p>R$415 x 5 noites R$2.075</p>
                <p>Taxa de limpeza R$220</p>
                <p>Taxa de serviço do Masion R$334</p>
                <hr />
                <p>Total sem impostos R$2.629</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style="margin-bottom: 20px" />
      <div class="item6">
        <div class="item6-1">
          <h4>Sobre esse Imovel:</h4>
          <p>Desfrute do charme e conforto de estar hospedado em frente ao mar.</p>
          <p>
            O nosso apartamento foi pensado e decorado para que todos os hóspedes possam se sentir
            em um putero!Apartamento com sala e cozinha, suíte e uma varanda espaçosa com
            churrasqueira privativa...
          </p>
          <h4>Onde vou dormi:</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sint, quibusdam assumenda repudiandae, veniam adipisci repellat quo sed inventore illum alias illo obcaecati consectetur asperiores deserunt exercitationem possimus eaque corrupti.</p>
        </div>
        <div class="item6-2">
          <img src="../../public/imagens/QE_Junior_Victor-2-min.jpg" alt="" class="img2" />
        </div>
      </div>
      <hr style="margin-bottom: 20px" />
      <div class="item7">
        <div class="item7-1"><h3 class="txt-lof">O que esse lugar oferece:</h3></div>
        <div class="item7-2"><p class="txt-lof">wi-fi</p></div>
        <div class="item7-3"><p class="txt-lof">visão para a praia</p></div>
        <div class="item7-4"><p class="txt-lof">Jogos de tabuleiro</p></div>
        <div class="item7-5"><p class="txt-lof">televisão</p></div>
        <div class="item7-6"><p class="txt-lof">canais fechados - TV</p></div>
        <div class="item7-7"><p class="txt-lof">lorem</p></div>
        <div class="item7-8"><p class="txt-lof">lorem</p></div>
        <div class="item7-9"><p class="txt-lof">lorem</p></div>
        <div class="item7-10"><p class="txt-lof">lorem</p></div>
      </div>
      <div class="item8" style="border: none">
        <button class="btn-hosp">Hospedar</button>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');
main {
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.geral {
  margin: 50px 100px;
}

.item1 {
  display: flex;
  flex-direction: row;
}

a {
  text-decoration: none;
  color: black;
  margin-top: 5px;
}

.img1 {
  width: 1200px;
  height: 600px;
  object-fit: cover;
  margin: 50px 50px 0;
  border-radius: 20px;
}

.item3 {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 30px;
}

.img-3 {
  width: 50px;
  height: 50px;
  background-color: grey;
  border: 1px solid black;
  border-radius: 20px;
  margin-left: 61px;
}

p {
  margin: 10px 0;
}

.item5 {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  width: 100%;
  height: 500px;
}

.item5-1 {
  margin-right: 100px;
}

.i5-1-vedendor {
  width: 600px;
  height: 100px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0 50px 0;
  box-shadow: 5px 5px;
  display: flex;
  flex-direction: row;
}

.foto {
  width: 50px;
  height: 50px;
  background-color: rgb(102, 102, 102);
  border-radius: 50%;
  margin: 25px 0 0 10px;
}

.info-v {
  margin: 30px 0 0 10px;
}

.nota {
  margin: 30px 0 0 100px;
  font-size: 30px;
}

.info-v2 {
  margin: 30px 0 0 10px;
  font-size: 20px;
}
.info-v3 {
  margin: 30px 0 0 10px;
  font-size: 50px;
}
.info-valor {
  width: 350px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  margin: 20px 0px 10px 50px;
  text-align: center;
}
.info-hosp {
  width: 470px;
  height: 199px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0px 10px 50px;
  box-shadow: 5px 5px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.i5-1-qualid {
  width: 600px;
  height: 300px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0 50px 0;
  box-shadow: 5px 5px;
}

.i5-2-valores {
  width: 600px;
  height: 450px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0 50px 0;
  box-shadow: 5px 5px;
}
.data-inic {
  width: 169px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px 0 0 0;
  padding: 20px 32px;
}
.data-final {
  width: 169px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 0 20px 0 0;
  padding: 20px 32px;
}
.hosp-quant {
  width: 410px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 0 0 20px 20px;
  padding: 20px 32px;
}

input[type='date'] {
  width: 180px;
  padding: 12px 10px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
}
select {
  width: 200px;
  padding: 12px 10px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
}
.item6 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}

.item6-1 {
  width: 500px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 150px 50px 0px;
  box-shadow: 5px 5px;
  padding: 20px 32px;
}

.img2 {
  width: 590px;
  height: 300px;
  object-fit: cover;
  margin: 10px;
  border-radius: 20px;
}

.item7 {
  width: 1250px;
  height: 250px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
  margin: 10px 0px 50px 0px;
  box-shadow: 5px 5px;
  padding: 20px 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
}
.item7-1 {
  width: 1290px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 20px;
}
.item7-2 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px 0 0 20px;
}
.item7-3 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
}
.item7-4 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);

  border-radius: 0 20px 20px 0;
}
.item7-5 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px 0 0 20px;
}
.item7-6 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
}
.item7-7 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 0 20px 20px 0;
}
.item7-8 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px 0 0 20px;
}
.item7-9 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
}
.item7-10 {
  width: 413px;
  height: 50px;
  background-color: rgb(255, 255, 255);
  border-radius: 0 20px 20px 0;
}
.txt-lof {
  font-family: 'Kadwa', serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 14px;
  margin-top: 10px;
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

.item8 {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
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
