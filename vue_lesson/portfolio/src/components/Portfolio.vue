<script setup>
</script>

<template>
  <div class="welcome_wrapper">
    <div class="welcome_container">
      <h1>Дизайн сайтов и проектирование</h1>
      <h2>Меня зовут Андросович Вячеслав.</h2>
      <h2>Я занимаюсь разработкой сайтов.</h2>
      <img src="./img/myphoto.png" alt="">
      <div class="social_container">
        <div class="facebook">
          <a href="https://facebook.com">
            <img src="" alt="">
          </a>
        </div>
        <div class="github">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

* {
  margin: 0;
  padding: 0;
}

.welcome_wrapper {
  display: flex;
  flex-direction: column;
  font-family: Roboto;
  align-items: center;
  /* justify-content: center; */
  /* font-style: 20px; */
  /* background-color: aquamarine; */
  height: 90%;
  color: aliceblue;
}

h1 {
  color: rgba(150, 150, 150, 0.8);
}

.welcome_wrapper img {
  width: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;

}

.welcome_container {
  width: 70%;
  margin-top: 150px;
}

.welcome_container h2 {
  margin-top: 20px;
}
</style>
