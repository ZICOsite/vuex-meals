<template>
  <section class="info">
    <div class="container">
      <h1 class="info__title">{{ getInfoMeal.strMeal }}</h1>
      <div class="info__content">
        <img :src="getInfoMeal.strMealThumb" alt="" class="info__image" />
        <div class="info__recipt">
          <h3 class="info__name">
            Ingredients <small>({{ getInfoMeal.strArea }})</small>
          </h3>
          <ul class="info__list">
            <li
              class="info__item"
              v-for="receipt in getInfoMeal.ingredients"
              :key="receipt"
            >
              <span class="info__span"> {{ receipt.strIngredient }} - {{ receipt.strMeasure }} </span>
            </li>
          </ul>
        </div>
      </div>
      <p class="info__desc">{{ getInfoMeal.strInstructions }}</p>
      <a :href="getInfoMeal.strYoutube" target="_blank"> Video cooking 😋</a>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getInfoMeal"]),
  },
  methods: {
    ...mapActions(["GET_MEAL_SOLO"]),
  },
  created() {
    this.GET_MEAL_SOLO(+this.$route.params.id)
  },
};
</script>

<style lang="scss" scoped>
.info {
  padding: 35px 0;
  &__title {
    text-align: center;
    font-size: 36px;
    margin-bottom: 20px;
  }
  &__content {
    display: flex;
    flex-wrap: wrap;
    box-shadow: 0 0 10px 2px rgb(51 51 51 / 10%);
    border-radius: 3px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  &__recipt {
    padding: 30px;
  }
  &__image {
    width: 40%;
    object-fit: cover;
    @media (max-width: 636px) {
      width: 100%;
    }
  }
  &__name {
    font-size: 28px;
    margin-bottom: 15px;
  }
  &__list {
    display: grid;
    gap: 10px;
    list-style: disc;
    padding-left: 20px;
  }
  &__desc {
    font-size: 18px;
    line-height: 150%;
    text-align: justify;
    margin-bottom: 16px;
  }
}
</style>