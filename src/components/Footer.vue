<template>
  <div class="footer">
    <div class="footer__content">
      <div class="footer__content--links">
        <p class="link">Términos y condiciones</p>
        <p class="link">Privacidad</p>
        <p class="link">Soporte</p>
      </div>
      <div class="footer__content--contact">
        <p>Socialab.cl</p>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-youtube"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
.footer {
  width: 100%;
  background-color: #262626;
  color: white;
  padding: 3rem 8rem;
}
.footer__content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.footer__content--links,
.footer__content--contact {
  display: flex;
  flex-direction: row;
}
.footer__content--contact {
  justify-content: flex-end;
}
.link {
  text-decoration: underline;
}
p,
i {
  margin: 0 1rem;
}
</style>
