<script setup>
</script>

<template>
  <div class="contacts_wrapper">
    <div class="contacts_container">
      <h1>Мои контакты</h1>
      <h2>email:qqqqqq@google.com</h2>
      <h2>tel:9999999999999</h2>
    </div>
  </div>
</template>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:100,100italic,300,300italic,regular,italic,500,500italic,700,700italic,900,900italic);

.contacts_wrapper {
  display: flex;
  flex-direction: row;
  font-family: Roboto;
  /* font-style: 20px; */
}

.contacts_container {
  margin-top: 150px;
}

h1 {
  color: rgba(150, 150, 150, 0.8);
}
</style>
