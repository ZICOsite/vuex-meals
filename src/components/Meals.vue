<template>
  <section class="meals" v-if="!getLoading">
    <div class="container">
      <div class="meals__cards">
        <MealsCard v-for="(meal, idx) in getMeals" :key="idx" :meals="meal" />
      </div>
    </div>
  </section>
  <div class="loader" v-else>
    <span class="lds-hourglass"></span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MealsCard from "@/components/MealsCard";
export default {
  components: {
    MealsCard,
  },
  computed: {
    ...mapGetters(["getMeals", "getLoading"]),
  },
  methods: {
    ...mapActions(["GET_MEALS_API"]),
  },
  created() {
    this.GET_MEALS_API();
  },
};
</script>

<style lang="scss" scoped>
.meals {
  padding: 60px 0;
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    gap: 30px;
  }
}
.loader {
  min-height: 80vh;
  display: grid;
  place-items: center;
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 50px solid #000;
  border-color: #000 transparent #000 transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}

</style>