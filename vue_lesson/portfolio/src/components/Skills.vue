<script setup>
</script>

<template>
  <div class="skills_wrapper">
    <div class="skills_container">

      <h1>Мои навыки</h1>
      <h2>Создание лендингов, верстка HTML, CSS</h2>
      <h2>Программирование интерфейсов на JavaScript, Vue, React</h2>
      <h2>NodeJS. Разворачивание веб-сервера на Express. Разработка простого REST API.
        Подключение MySQL, Postgree и разработка реляционной, оптимизированной базы данных.
      </h2>
      <h2>PHP. Работа с БД MySQL, импорт, экспорт, оптимизация</h2>
      <h2>Работа с шаблонизаторами</h2>
      <h2>Разработка несложных телеграмм ботов (в стиле GPT, прогноз погоды)</h2>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

.skills_wrapper {
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  /* font-style: 20px; */
}

h1 {
  color: rgba(150, 150, 150, 0.8);
}

.skills_container {
  margin-top: 150px;
}
</style>
