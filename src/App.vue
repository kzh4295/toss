<template>
  <div class="nav-container">
    <button style="margin-left:450px">
      <img src="/img/main-logo.png" alt="main-logo" />
    </button>
    <nav style="left:-508px; position:relative">
      <router-link to="">회사소개</router-link>
      <router-link to="">고객센터</router-link>
      <router-link to="">자주 묻는 질문</router-link>
      <router-link to="">토스인증서</router-link>
      <router-link to="">채용</router-link>
    </nav>
  </div>
  <router-view/>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav-container{
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-between;
  position:fixed;
  top:0;
  z-index:100;
}

nav {
  padding:20px;
  margin-left: 700px;
  white-space: nowrap;

}

nav a {
  padding: 12px 10px;
  font-size: 14px;
  line-height: 20px;
  color: currentColor;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: transparent;
  text-decoration: none;
  text-align: left;
}

nav a.router-link-exact-active {
  color: #4e5968;
  margin-right: 30px;
}

</style>
