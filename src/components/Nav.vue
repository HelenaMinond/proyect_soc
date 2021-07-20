<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__content--logo">
        <img src="../assets/logo-proyecto.png" alt="Logo" />
      </div>
      <div class="nav__content--opc">
        <!-- <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link> -->
        <p>Inicio</p>
        <p>Cursos</p>
        <i class="fas fa-user"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
};
</script>

<style lang="scss">
.nav > div {
  display: flex;
  border: 1px solid gray;
}
.nav__content {
  justify-content: space-between;
}
.nav__content--opc {
  display: flex;
  flex-direction: row;
}
</style>
