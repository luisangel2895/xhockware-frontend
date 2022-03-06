<template lang="pug">
section.favorites
	.favorites__title {{ $t("favorites.title") }}
	.favorites__subtitle {{ $t("favorites.subtitle") }}
	favorites-container
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import FavoritesContainer from "@/components/favorite/FavoritesContainer.vue";

@Options({
  components: {
    FavoritesContainer,
  },
})
export default class Favorites extends Vue {}
</script>

<style lang="scss" scoped>
.favorites {
  padding: 30px 20px 20px 20px;
  &__title {
    font-size: 2.4rem;
    font-family: $semibold;
    color: $black_primary;
  }
  &__subtitle {
    font-size: 1.6rem;
    font-family: $regular;
    color: $grey_primary;
    margin-top: 10px;
  }
}
</style>
