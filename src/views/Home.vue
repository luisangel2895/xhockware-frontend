<template lang="pug">
section.home
  .home__title Browse
  .home__subtitle Discover thigs of this world
  box-search
  categories
  news-container
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BoxSearch from "@/components/home/BoxSearch.vue";
import categories from "@/components/home/Categories.vue";
import NewsContainer from "@/components/home/NewsContainer.vue";

@Options({
  components: {
    BoxSearch,
    categories,
    NewsContainer,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
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
