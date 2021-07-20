<template>
  <div>
    <Nav />
    <Header />
    <Footer />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Nav,
    Header,
    Footer,
  },
};
</script>
