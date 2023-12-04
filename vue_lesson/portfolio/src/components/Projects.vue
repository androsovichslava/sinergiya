<script setup>
</script>

<template>
  <div class="projects_wrapper">
    <div class="projects_container">
      <h1>Мои проекты</h1>
      <h2><a href="http://top-blogger.site/calculator-fractions-exponentiation/index.html">Калькулятор возведения дроби в
          степень</a></h2>
      <h2><a href="http://top-blogger.site/timers-new-year/index.html">Таймер оставшегося времени до нового года</a></h2>
      <h2><a href="http://top-blogger.site/random-coin-toss/index.html">Подбрось монетку</a></h2>
      <h2><a href="http://top-blogger.site/time-cities-v1/dist/index.html">Время в городах</a></h2>
      <h2><a href="http://top-blogger.site/astronomy-moon-phase-v1/dist/index.html">Фазы луны</a></h2>
      <h2><a href="http://top-blogger.site/generator-compliment/dist/index.html">Генератор комплиментов</a></h2>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

.projects_wrapper {
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  /* font-style: 20px; */
}

.projects_container {
  margin-top: 150px;

}

h1 {
  color: rgba(150, 150, 150, 0.8);
}

a {
  text-decoration: none;
  color: bisque
}
</style>
