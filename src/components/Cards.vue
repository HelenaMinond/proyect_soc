<template>
  <div>
    <div class="form">
      <input type="number" v-model="card" />
      <button @click="obtenerCart()">Buscar</button>
    </div>
    <div class="cards">
      <div class="cards__primera">
        <h2>{{ nameCard }}</h2>
        <img :src="imgCard" alt="Imagen carta" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  data() {
    return {
      card: "1",
      data: "",
    };
  },
  computed: {
    nameCard() {
      return this.data && this.data.name;
    },
    imgCard() {
      return this.data && this.data.imageUrl;
    },
  },
  methods: {
    async obtenerCart() {
      const url = "https://api.magicthegathering.io/v1/cards/";
      try {
        const req = await axios(url + this.card);
        if (!req) return;
        this.data = req.data.card;
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.obtenerCart();
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
  color: #fff;
}
p {
  text-align: justify;
}
</style>
