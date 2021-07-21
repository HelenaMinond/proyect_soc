<template>
  <div class="nav">
    <div class="nav__content">
      <div class="nav__content--logo">
        <img src="../assets/logo-proyecto.png" alt="Logo" />
      </div>
      <div class="nav__content--opc">
        <p class="opc-1">Inicio</p>
        <p class="opc-2">Cursos</p>
        <div class="opc-3"><i class="fas fa-user"></i></div>
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
  border-bottom: 2px solid #e5e5e5;
  padding: 1rem 2rem;
}
.nav > div {
  display: flex;
}
.nav__content {
  justify-content: space-between;
  align-items: center;
}
.nav__content--opc {
  display: flex;
  flex-direction: row;
}
.opc-1,
.opc-2,
.opc-3 {
  margin: 0 2rem;
}
.opc-2 {
  color: #3434ff;
}
.opc-3 i {
  background-color: #edf2f7;
  padding: 0.5rem;
  border-radius: 50%;
}
</style>
