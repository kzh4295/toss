<template>
  <div class="nav-container">
    <button>● toss </button>
    <nav>
      <router-link to="/about">회사소개</router-link>
      <router-link to="/about">고객센터</router-link>
      <router-link to="/about">자주 묻는 질문</router-link>
      <router-link to="/about">토스인증서</router-link>
      <router-link to="/about">채용</router-link>
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

nav {
  padding:30px;
  margin-left: 800px;
}

nav a {
  color: #4e5968;
  margin-right: 50px;
}

nav a.router-link-exact-active {
  color: #4e5968;
  margin-right: 50px;
}

.nav-container{
  display: flex;

}
</style>
