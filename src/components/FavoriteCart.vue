<template>
  <li class="fav-meals__item">
    <router-link :to="`/desc/${favCart.idMeal}`">
      <img
        class="fav-meals__images"
        :src="favCart.strMealThumb"
        alt=""
        @click="infoMeal(favCart.idMeal)"
      />
    </router-link>
    <strong class="fav-meals__name"> {{ favCart.strMeal }} </strong>
    <button class="fav-meals__close" @click="favActive(favCart.idMeal)">
      <i class="fas fa-window-close"></i>
    </button>
  </li>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    favCart: {
      type: Object,
      default: {},
    },
  },
  computed: {
    ...mapGetters(["getMeals"]),
  },
  methods: {
    ...mapActions(["GET_MEALS_FAV", "GET_MEAL_SOLO"]),
    favActive(id) {
      let idx = this.getMeals.findIndex((item) => item.idMeal == id);
      this.GET_MEALS_FAV(idx);
    },
    infoMeal(id) {
      this.GET_MEAL_SOLO(id);
    },
  },
  created() {
    this.GET_MEAL_SOLO();
  },
};
</script>

<style>
</style>