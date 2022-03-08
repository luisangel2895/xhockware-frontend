<template lang="pug">
section
  .home-menu-container
    .home-menu
      profile
    .home-favorites
      favorites
  .home
    .container-search
      .home__title {{ $t("home.title") }}
      .home__subtitle {{ $t("home.subtitle") }}
      box-search
      categories
    news-container
  .home-detail-news-container
    .home-detail-news
      news-detail
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import BoxSearch from "@/components/home/BoxSearch.vue";
import categories from "@/components/home/Categories.vue";
import NewsContainer from "@/components/home/NewsContainer.vue";
import Profile from "@/views/Profile.vue";
import NewsDetail from "@/components/home/fragments/NewsDetail.vue";
import Favorites from "@/views/Favorites.vue";

@Options({
  components: {
    BoxSearch,
    categories,
    NewsContainer,
    Profile,
    NewsDetail,
    Favorites,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home-menu-container {
  display: none;
}
.home-detail-news-container {
  display: none;
}
.home-favorites {
  display: none;
}
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

// For tablets
@media (min-width: 768px) {
  section {
    display: flex;
  }
  .home-menu-container {
    width: 30%;
    display: block;
    .home-menu {
      width: 30%;
      display: block;
      position: fixed;
    }
  }
  .home {
    width: 70%;
  }
}
// For PC
@media (min-width: 1300px) {
  section {
    display: flex;
  }
  .container-search {
    width: 38%;
    position: fixed;
    top: 0px;
    z-index: 20;
    padding-top: 30px;
    background-color: $white;
  }
  .home-menu-container {
    width: 20%;
    display: block;
    .home-menu {
      width: 20%;
      display: block;
      position: fixed;
    }
    .home-favorites {
      width: 20%;
      position: fixed;
      display: block;
      top: 400px;
    }
  }
  .home {
    width: 40%;
  }
  .home-detail-news-container {
    width: 40%;
    display: block;
    .home-detail-news {
      width: 40%;
      display: block;
      position: fixed;
    }
  }
}
</style>
