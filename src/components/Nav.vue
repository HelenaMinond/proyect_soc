<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__content--logo">
        <img src="../assets/logo-proyecto.png" alt="Logo" />
      </div>
      <div class="nav__content--opc">
        <p class="opc-1">Inicio</p>
        <p class="opc-2">Cursos</p>
        <i class="opc-3 fas fa-user"></i>
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
.nav {
  border-bottom: 2px solid #E5E5E5;
  margin: 1rem 0;
}
.nav > div {
  display: flex;
}
.nav__content {
  justify-content: space-between;
}
.nav__content--logo, .nav__content--opc {
  margin: 0 2rem;
}
.nav__content--opc {
  display: flex;
  flex-direction: row;
}
.opc-1, .opc-2, .opc-3 {
  margin: 0 2rem;
}
.opc-2 {
  color: #3434FF;
}
</style>
