<template>
  <main>
    <div class="container-conteudo">
      <div class="menu-main">
        <div class="item-menu">
          <p class="texto-menu">Destino dos Sonhos</p>
        </div>
        <div class="item-menu">
          <p class="texto-menu">filtrar</p>
        </div>
        <div class="item-menu">
          <p class="texto-menu">Orçamentos</p>
        </div>
        <div class="item-menu">
          <p class="texto-menu">Registrar</p>
        </div>
      </div>
      
    </div>
  </main>
</template>
<style scoped>
main {
  background-color: #123859;
  width: 100%;
  height: 600px;
}
.container-conteudo{
  width: 1300px;
  height: auto;
  background-color: white;
  margin: 0 3cm;
}
.menu-main{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  justify-content: space-around;
}
.item-menu{
  width: 200px;
  height: 60px;
  text-align: center
}
.texto-menu{
  font-size: 20px;
  margin-top: 15px;
}
</style>
