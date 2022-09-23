<template>
  <div class="home">
    <FavoriteMeals :favCarts="getMealsFav" />
    <Meals />
  </div>
</template>

<script>
// @ is an alias to /src
import FavoriteMeals from "@/components/FavoriteMeals.vue";
import Meals from "@/components/Meals.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",
  components: {
    FavoriteMeals,
    Meals,
  },
  computed: {
    ...mapGetters(["getMealsFav"]),
  },
  methods: {
    ...mapActions(["GET_MEALS_API"]),
  },
};
</script>
