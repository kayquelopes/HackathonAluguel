<template>
    <div class="login-page">
      <div class="login-container">
        <div class="titulo">
          <h1 style="color: #164773">Login</h1>
        </div>
        <form @submit.prevent="">
          <div>
            <input type="text" placeholder="Nome" class="cad-inp" />
            <input type="tel" placeholder="Telefone" class="cad-inp" />
            <label for="">País: </label> <label for="">Estados: </label>
            <select class="cad2-inp">
              <option disabled value="">Escolha um item</option>
              <option>BRASIL</option>
              <option>BRASIL</option>
              <option>BRASIL</option>
              <option>BRASIL</option>
              <option>BRASIL</option>
              <option>BRASIL</option>
            </select>
            
            <select class="cad2-inp">
              <option disabled value="">Escolha um item</option>
              <option>RIO DE JANEIRO</option>
              <option>RIO DE JANEIRO</option>
              <option>RIO DE JANEIRO</option>
              <option>RIO DE JANEIRO</option>
              <option>RIO DE JANEIRO</option>
              <option>RIO DE JANEIRO</option>
            </select>
            <input type="email" placeholder="Email" class="cad-inp" />
            <input type="password" placeholder="Senha" class="cad-inp" />
          </div>
          <div class="cont-bnt">
            <button class="login-btn">Login</button>
          </div>
          <hr style="margin-bottom: 10px" />
          <a href="#">Fazer o cadastro</a>
        </form>
      </div>
    </div>
  </template>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Kadwa:wght@700&display=swap');
  
  h1 {
    font-family: 'Kadwa', serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 38px;
  }
  
  a {
    color: black;
  }
  
  button {
    font-weight: bold;
    border: none;
    border-radius: 20px;
    padding: 25px 50px;
    color: #d9d9d9;
    width: 350px;
  }
  
  .login-page {
    background-color: #7c94a1;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1000px;
    width: 100vw;
  }
  
  .login-container {
    margin-top: 25px;
    background-color: #fffffff5;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 400px;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
  .titulo {
    height: 76px;
  }
  .cad-inp {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 15px;
    border: none;
    border-radius: 50px;
    width: 90%;
    height: 40px;
    background-color: #d9d9d9;
    padding: 9px;
    opacity: 0.5;
  }
  
  .cad-inp::placeholder {
    color: #164773;
    opacity: 0.7;
    font-family: 'Kadwa', serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
  }
  .cad2-inp {
    font-size: 16px;
    margin-bottom: 20px;
    margin-top: 15px;
    margin-left: 10px;
    border: none;
    border-radius: 50px;
    width: 44%;
    height: 40px;
    background-color: #d9d9d9;
    padding: 9px;
    opacity: 0.5;
  }
  label {
    margin-right: 120px;
    margin-left: 20px;
    color: #164773;
    opacity: 0.7;
    font-family: 'Kadwa', serif;
    font-optical-sizing: auto;
    font-weight: bold;
    font-style: normal;
    font-size: 15px;
  }
  .login-btn {
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
  
  .login-btn:hover {
    background-color: #0a2a43;
  }
  .cont-bnt {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 10px;
  }
  </style>
  