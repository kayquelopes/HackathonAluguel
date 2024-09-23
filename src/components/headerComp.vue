<script setup>
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiBeach } from '@mdi/js'

const path = ref(mdiBeach)
</script>
<template>
  <main>
    <div class="container-main">
      <div class="menu-search">
        <button><svg-icon type="mdi" :path="path"></svg-icon></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  </main>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');
.container-main {
  height: 150px;
  background-color: #041c34;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
