<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Portfolio from './components/Portfolio.vue';
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Домашняя</RouterLink>
        <RouterLink to="/courses">Мои курсы</RouterLink>
        <RouterLink to="/projects">Мои проекты</RouterLink>
        <RouterLink to="/skills">Мои навыки</RouterLink>
        <RouterLink to="/contacts">Мои контакты</RouterLink>
      </nav>
      <Portfolio msg="Портфолио Андросовича Вячеслава" />
    </header>
    <main class="main">

      <RouterView />
    </main>
  </div>
</template>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

.wrapper {
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  color: aliceblue;
  /* background-image: url(https://hostingkartinok.com/uploads/images/2011/11/9ae1b107e073953806c29bf3e2c044ff.jpg); */
  background-color: darkslategray;
}

header {
  width: 50%;
}

main {
  width: 50%;
}

h1 {
  color: #aaa;
}

nav {
  background-color: #ebdddd74;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  color: white;
}

nav a {
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: rgb(14, 14, 14);
  margin-left: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
}

nav a:hover {
  text-decoration: underline;
  /* font-size: 1.2em; */

}

main {
  display: flex;
  padding: 10px;
  margin: 20px;
}

@media (max-width: 900px) {
  .wrapper {
    display: flex;
    flex-direction: column;
    font-family: Roboto;
  }

  header {
    width: 100%;
  }

  main {
    width: 100%;
  }
}

@media (max-width:1300px) {
  nav a {
    font-size: 16px;

  }
}

@media (max-width:1100px) {
  nav a {
    font-size: 14px;

  }
}

@media (max-width:900px) {
  nav a {
    font-size: 16px;

  }
}
</style>
