<template lang="pug">
.favorites-container(v-if="getFavoriteNews.length")
	favorite(v-for="(favorite, index) in getFavoriteNews" :key="favorite.source.id" :news="favorite")
.default-message(v-if="!getFavoriteNews.length") You dont have any favorite news.
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import Favorite from "@/components/favorite/Favorite.vue";

@Options({
  components: {
    Favorite,
  },
  computed: mapGetters(["getFavoriteNews"]),
})
export default class FavoritesContainer extends Vue {}
</script>

<style lang="scss" scoped>
.favorites-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin-bottom: 40px;
}
.default-message {
  margin-top: 20px;
  width: 100%;
  text-align: center;
  font-family: $regular;
  font-size: 1.4rem;
  color: $grey_primary;
}

// PC
@media (min-width: 1300px) {
  .favorites-container {
    height: 300px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 3px;
      background-color: $grey_primary;
    }
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      border-radius: 10px;
      background-color: #f5f5f5;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background-color: $grey_primary;
    }
  }
}
</style>
