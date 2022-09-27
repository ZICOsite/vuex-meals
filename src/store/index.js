import { createStore } from 'vuex'

export default createStore({
  state: {
    meals: [],
    loading: true,
    abort: 1,
    infoMeal: []
  },
  getters: {
    getMeals(state) {
      return state.meals;
    },
    getMealsFav(state) {
      return state.meals.filter(item => item.favorite ? item : "");
    },
    getLoading(state) {
      return state.loading;
    },
    getInfoMeal(state) {
      return state.infoMeal
    }
  },
  mutations: {
    setMeals(state, meals) {
      state.meals = meals;
    },
    setMealsFav(state, idx) {
      state.meals.filter((item, i) => {
        if (i == idx) {
          item.favorite = !item.favorite;
        }
      })
    },
    setLoading(state, load) {
      state.loading = load;
    },
    abort(state) {
      ++state.abort
    },
    setMealSolo(state, id) {
      state.infoMeal = id
    }
  },
  actions: {
    async GET_MEALS_API({ state, commit }) {
      let arr = [];
      try {
        if (state.abort === 1) {
          for (let i = 0; i < 8; i++) {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`);
            const data = await response.json();
            const meals = data.meals[0];
            arr.push(meals);
            if (i == 7) {
              commit("setLoading", false)
            }
          }
          let favoriteMeals = arr.map(item => {
            let data = { ...item };
            data.favorite = false;
            return data;
          })
          commit("setMeals", favoriteMeals)
          commit("abort")
        }
      } catch (error) {
        console.log(error);
      }
    },
    GET_MEALS_FAV({ commit }, id) {
      commit("setMealsFav", id)
    },
    async GET_MEAL_SOLO({ commit }, id) {
      try {
        const resp = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const resData = await resp.json();
        const meal = resData.meals[0];
        let obj = {...meal};
        obj.ingredients = [];
        for (let i = 1; i <= 20; i++) {
          if(meal[`strIngredient${i}`]) {
            obj.ingredients.push({
              strIngredient: meal[`strIngredient${i}`],
              strMeasure: meal[`strMeasure${i}`]
            })
          }
        }
        commit("setMealSolo", obj);
      } catch (error) {
        console.log("Error", error);
      }
    }
  },
  modules: {
  }
})
