<script setup>
</script>
<template>
  <main>
    <div class="container-user">
      <div class="container-item1">
        <div class="item1-1"><img src="../../public/avatars-000424332303-cag0qn-t240x240.jpg" alt="" /></div>
      </div>
      <div class="container-item2">
        <div class="item2-1">
          <p>Nome: Daniela fas kon selos Cula</p>
        </div>  
        <div class="item2-3">
          <p>Telefone: +55 (47) 0800 192 6969</p>
          <p>País: Brasil | Estado: Rio De Janeiro</p>
          <p>Email: Danielafaskon@gmail.com</p>
          <p>senha: 123456789</p>
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
  border-radius: 20px 20px 0 0;
  width: 99.8%;
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

.item2-3>p {
  font-family: 'Kadwa', serif;
  font-size: 20px;
  margin-left: 50px;
}

</style>
