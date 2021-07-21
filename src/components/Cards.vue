<template>
  <div class="cards">
    <div class="cards__form">
      <p class="cards__form--intruction">Digita un número entre 1 y 1480</p>
      <div>
        <input class="cards__form--input" type="number" v-model="card" />
        <button class="cards__form--button" @click="getCart()">Buscar</button>
      </div>
    </div>
    <div class="cards__card">
      <h2>{{ nameCard }}</h2>
      <img :src="imgCard" alt="Imagen carta" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cards",
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
    async getCart() {
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
    this.getCart();
  },
};
</script>

<style lang="scss">
.cards,
.cards__form {
  background-color: #edf2f7;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cards__form {
  background-color: #3434ff;
  padding: 1rem;
  border-radius: 10px;
  margin-top: -2rem;
}
.cards__form--input,
.cards__form--button {
  border-radius: 10px;
  border: 2px solid #4f4f4f;
  margin-top: 1rem;
}
.cards__form--input {
  margin: 0 0.5rem;
  padding: 0.2rem 0;
  text-align: center;
}
.cards__form--button {
  padding: 0.2rem 0.5rem;
}
.cards__form--button:hover {
  cursor: pointer;
  color: #fff;
  background-color: #000;
  border: 2px solid #000;
}
.cards__card {
  width: 18rem;
  height: 25rem;
  background: #4f4f4f;
  border-radius: 10px;
  text-align: center;
  margin: 2rem 0;
}
.cards__card h2 {
  margin: 1rem 0;
  color: #fff;
}
</style>
