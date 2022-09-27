<template>
  <div class="fav-meals" ref="favMeals">
    <div class="container">
      <h3 class="fav-meals__title">Favorite Meals</h3>
      <ul class="fav-meals__list">
        <transition-group name="fav-meals__item">
          <FavoriteCart
            v-for="cart in favCarts"
            :key="cart.idMeal"
            :favCart="cart"
          />
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import FavoriteCart from "@/components/FavoriteCart.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    FavoriteCart,
  },
  props: {
    favCarts: {
      type: Array,
      default: [],
    },
  },
  computed: {
    ...mapGetters(["getMealsFav"]),
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.$refs.favMeals) {
        if (window.scrollY > 300) {
          this.$refs.favMeals.classList.add("fixed");
        } else {
          this.$refs.favMeals.classList.remove("fixed");
        }
      }
    });
  },
};
</script>

<style lang="scss">
.fav-meals {
  padding: 16px 0;
  background: #f5f7ff;
  box-shadow: 0 0 10px 2px rgb(51 51 51 / 10%) inset;
  transition: 0.4s;
  @media (max-width: 576px) {
    padding: 0;
  }
  &.fixed {
    position: fixed;
    width: 100%;
    top: 0;

    .fav-meals__title {
      font-size: unset;
    }

    .fav-meals__item {
      max-width: 100px;
    }
  }
  &__title {
    font-size: 36px;
    text-align: center;
    @media (max-width: 576px) {
      font-size: unset;
      margin-bottom: unset;
    }
  }
  &__list {
    display: flex;
    column-gap: 30px;
    overflow-x: auto;
    @media (max-width: 576px) {
      column-gap: unset;
    }
  }
  &__item {
    max-width: 150px;
    width: 100%;
    display: grid;
    place-items: center;
    row-gap: 12px;
    padding: 12px;
    flex-shrink: 0;
    position: relative;
    @media (max-width: 576px) {
      max-width: 100px;
    }
    &-enter-active,
    &-leave-active {
      transition: 0.3s linear;
    }
    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: scale(0.8);
    }
    &-enter-to,
    &-leave-from {
      opacity: 1;
      transform: scale(1);
    }

    &:hover {
      .fav-meals__close {
        opacity: 1;
      }
    }
  }
  &__name {
    display: inline-block;
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75px;
  }
  &__images {
    width: 100%;
    border-radius: 50%;
    border: 2px solid #fff;
    box-shadow: 0 0 15px #222;
  }
  &__close {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    background: transparent;
    border: none;
    padding: 4px;
    font-size: 16px;
    opacity: 0;
    transition: 0.2s;
  }
}
</style>