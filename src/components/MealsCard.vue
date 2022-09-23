<template>
  <div class="meals__card">
    <router-link :to="`/desc/${meals.idMeal}`">
      <img
        :src="meals.strMealThumb"
        alt=""
        class="meals__card-image"
        @click="infoMeal(meals.idMeal)"
      />
    </router-link>
    <div class="meals__card-desc">
      <h4 class="meals__card-title">{{ meals.strMeal }}</h4>
      <button
        class="meals__card-btn"
        @click="favActive(meals.idMeal)"
        :class="{ active: meals.favorite }"
      >
        <i class="fas fa-heart"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  props: {
    meals: {
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
      // console.log(id);
      let idx = this.getMeals.findIndex((item) => item.idMeal == id);
      // console.log(idx);
      this.GET_MEALS_FAV(idx);
    },
    infoMeal(id) {
      this.GET_MEAL_SOLO(id)
    }
  },
  created() {
    this.GET_MEAL_SOLO()
  }
};
</script>

<style lang="scss" scoped>
.meals__card {
  box-shadow: 0 0 10px 2px rgb(51 51 51 / 10%);
  border-radius: 3px;
  overflow: hidden;
  &-image {
    width: 100%;
  }
  &-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
  }
  &-btn {
    background: transparent;
    border: none;
    font-size: 18px;
    cursor: pointer;
    color: #ccc;

    &.active {
      color: red;
    }
  }
}
</style>