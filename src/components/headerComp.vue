<template>
  <header>
    <div class="header-container">
      <div class="logo"><img src="../../img/las vegas..jpg" alt="" /></div>
      <div class="pesquisa">
        <input type="text" placeholder="Pesquisar" />
        <button class="btn-pesquisa">Pesquisar</button>
      </div>
      <div class="menu">
        <div class="item1">
          <button id="login">
            <RouterLink class="a" to="/registerUser">Register</RouterLink> |
            <RouterLink class="a" to="/loginUser">Login </RouterLink>
          </button>
        </div>
        <nav class="item2">
          <ul>
            <li class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">Menu</a>
              <div class="dropdown-content">
                <RouterLink class="a-content" to="/">Home</RouterLink>
                <RouterLink class="a-content" to="/user">User</RouterLink>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <RouterView />
    </div>
  </header>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');
.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgb(15, 36, 67);
}

.logo {
  min-height: 150px;
  min-width: 160px;
  text-align: center;
}

.pesquisa {
  min-height: 150px;
  min-width: 800px;
  text-align: center;
  font-family: "Kadwa", serif;
}

img {
  width: 160px;
  height: 150px;
  margin-top: 10px;
}

input[type='text'] {
  min-width: 40vw;
  height: 30px;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  border: 0;
  margin-top: 55px;
  font-family: "Kadwa", serif;
}

.btn-pesquisa {
  min-width: 5vw;
  height: 30px;
  border-radius: 10px;
  font-size: 16px;
  border: 0;
  margin-left: 5px;
  font-family: "Kadwa", serif;
}
/*-----menu-----*/

.menu {
  min-height: 150px;
  min-width: 280px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.item1 {
  text-align: end;
  margin-top: 55px;
}
.item1 > button {
  width: 160px;
  height: 40px;
  background-color: white;
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 10px;
}
.item1 > button > .a {
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-family: "Kadwa", serif;
}
.item2 {
  text-align: justify;
  margin-top: 55px;
  height: 10px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
li {
  float: left;
}

li a,
.dropbtn {
  font-weight: bold;
  display: inline-block;
  background-color: white;
  color: rgb(0, 0, 0);
  text-align: center;
  padding: 7px 10px;
  text-decoration: none;
  border: 1px solid white;
  border-radius: 30px;
  margin-right: 10px;
  font-family: "Kadwa", serif;
  font-size: 14px;
}

li a:hover,
.dropdown:hover .dropbtn {
  background-color: rgb(255, 254, 254);
  color: rgb(0, 0, 0);
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 100px;
  z-index: 1;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 10px;
}

.dropdown-content .a-content {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
  text-align: center;
  font-family: "Kadwa", serif;
  
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
