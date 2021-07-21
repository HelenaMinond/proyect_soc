<template>
  <div class="cards">
    <div class="cards__primera" v-for="(val, i) in cartas" :key="i">
      <h2>{{ val.name }}</h2>
      <img :src="val.imageUrl" alt="Imagen carta" />
      <p>{{ val.text }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Header",
  computed: {
    ...mapState(["cartas"]),
  },
  methods: {
    ...mapActions(["obtenerDataAPI"]),
  },
  created() {
    this.obtenerDataAPI();
  },
};
</script>

<style lang="scss">
.cards {
  background-color: #edf2f7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 10rem;
}
.cards__primera {
  width: 22rem;
  height: 32rem;
  background: #4f4f4f;
  border-radius: 10px;
  text-align: center;
}
h2 {
  margin: 1rem 0;
}
p {
  text-align: justify;
}
</style>
