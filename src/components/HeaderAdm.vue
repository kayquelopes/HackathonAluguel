<script setup>
import { ref } from 'vue';
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiAccountStarOutline, mdiMagnify, mdiMenu } from '@mdi/js';

const path = ref(mdiMagnify);
const path2 = ref(mdiAccountStarOutline);
const path3 = ref(mdiMenu);
</script>
<template>
  <header>
    <div class="container-header">
      <div class="item1"><img class="img1" src="../../public/imagens/foda.png" alt=""></div>

      <div class="item2"><input type="search" placeholder="Pesquisa"> <button class="bnt-search"><svg-icon type="mdi" :path="path" class="icon"></svg-icon></button></div>

      <div class="item3">
        <button class="bnt-user"><svg-icon type="mdi" :path="path2" class="icon2"></svg-icon></button>
        <button class="bnt-menu"> <svg-icon type="mdi" :path="path3" class="icon3"></svg-icon>
          
        </button>
      </div>
    </div>
    <RouterView />
  </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');
.container-header{
  height: 150px;
  background-color: #041C34;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.item1{
  height: 150px;
  width: 250px;
  margin-left: 50px;

}
.img1{
  height: 88px;
  width: 200px;
  border-radius: 20px;
  margin-top: 31px;
  margin-left: 25px;
}
.item2{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 700px;
  margin-left: 50px;
}
input[type='search']{
  height: 53px;
  width: 500px;
  border: none;
  font-family: 'Kadwa', serif;
  border-radius: 20px 0 0 20px;
  padding-left: 10px;
  font-size: 20px;
}
.bnt-search{
  background-color: white;
  border: none;
  border-radius: 0 20px 20px 0;
  height: 53px;
}
.icon{
  width: 55px;
}
.item3{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  width: 250px;
  margin-right: 50px;
  margin-left: 50px;
}
.bnt-user{
  background-color: white;
  border: none;
  border-radius: 20px;
  height: 53px;
  margin-right: 10px ;
}
.bnt-menu{
  background-color: white;
  border: none;
  border-radius: 20px;
  height: 53px;
}
.icon2{
  width: 55px;
}
.icon3{
  width: 55px;
}
</style>
