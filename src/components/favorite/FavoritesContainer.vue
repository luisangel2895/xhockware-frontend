<template lang="pug">
.favorites-container
    favorite(v-for="(favorite, index) in getFavoriteNews" :key="favorite.source.id" :news="favorite")
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
</style>
