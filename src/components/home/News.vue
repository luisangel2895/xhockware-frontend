<template lang="pug">
.news
	.news__img(@click="openNewsFragment")
		img(:src="news.urlToImage")
	.news__title
		.news__title-text(@click="openNewsFragment") {{ filterLengthText() }}
		.news__title-heart
			font-awesome-icon(:icon="['far', 'heart']" v-if="!newSelected" @click="selectHeart").news__title-heart-void
			font-awesome-icon(:icon="['fas', 'heart']" v-else @click="selectHeart").news__title-heart-filled

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters } from "vuex";
// Types
import { News as NewsType } from "@/types/news-response";

@Options({
  props: {
    news: Object,
  },
  methods: mapMutations([
    "UPDATE_STATUS_FRAGMENT_NEWS",
    "UPDATE_NEWS_DETAIL",
    "ADD_FAVORITE",
    "DELETE_FAVORITE",
  ]),
  computed: mapGetters(["getFavoriteNews"]),
})
export default class News extends Vue {
  newSelected = false;
  UPDATE_STATUS_FRAGMENT_NEWS!: (payload: boolean) => void;
  UPDATE_NEWS_DETAIL!: (payload: NewsType) => void;
  ADD_FAVORITE!: (payload: NewsType) => void;
  DELETE_FAVORITE!: (payload: NewsType) => void;
  getFavoriteNews!: NewsType[];
  news!: NewsType;

  selectHeart(): void {
    this.newSelected = !this.newSelected;
    if (this.newSelected) {
      this.ADD_FAVORITE(this.news);
    } else {
      this.DELETE_FAVORITE(this.news);
    }
  }
  filterLengthText(): string {
    if (this.news.title.length <= 53) {
      return this.news.title;
    } else {
      return this.news.title.slice(0, 49) + " ...";
    }
  }
  openNewsFragment(): void {
    this.UPDATE_NEWS_DETAIL(this.news);
    this.UPDATE_STATUS_FRAGMENT_NEWS(true);
  }
  mounted(): void {
    const isFavorite = this.getFavoriteNews.some((newsFav: NewsType) => {
      return newsFav.source.id === this.news.source.id;
    });
    if (isFavorite) {
      this.newSelected = true;
    }
  }
}
</script>
<style lang="scss" scoped>
.news {
  width: 100%;
  margin-bottom: 20px;
  border: 2px solid $grey_lighter;
  border-radius: 20px;

  &__title {
    height: 70px;
    display: flex;
    justify-content: space-between;
    padding: 15px;

    &-text {
      font-family: $semibold;
      font-size: 1.6rem;
      color: $black_primary;
    }

    &-heart {
      width: 70px;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2.4rem;

      &-void {
        animation-name: unfill-heart;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }

      &-filled {
        animation-name: fill-heart;
        animation-duration: 0.5s;
        animation-fill-mode: forwards;
      }
    }
  }

  &__img {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 20px 20px 0px 0px;
    }
  }
}

@keyframes fill-heart {
  from {
    opacity: 0;
    color: $grey_primary;
  }
  to {
    opacity: 1;
    color: $purple_primary;
  }
}
@keyframes unfill-heart {
  from {
    opacity: 0;
    color: $purple_primary;
  }
  to {
    opacity: 1;
    color: $grey_primary;
  }
}

// For tablets
@media (min-width: 768px) {
  .news {
    width: 50%;
  }
}
</style>
