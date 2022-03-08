<template lang="pug">
.favorite
	.favorite__img
		.img-container(v-if="news")
			img(:src="news.urlToImage")
	.favorite__text
		.favorite__text-category {{filterCategory()}}
		.favorite__text-title {{filterLengthText()}}
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
// Types
import { News } from "@/types/news-response";

@Options({
  props: {
    news: Object,
  },
})
export default class Favorite extends Vue {
  news!: News;

  filterLengthText(): string {
    if (this.news) {
      if (this.news.title.length <= 43) {
        return this.news.title;
      } else {
        return this.news.title.slice(0, 40) + " ...";
      }
    } else {
      return "";
    }
  }
  filterCategory(): string {
    if (this.news) {
      const word = this.news.category;
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return "";
    }
  }
}
</script>
<style lang="scss" scoped>
.favorite {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 20px;
  &__img {
    width: 30%;
    img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 20px;
    }
  }
  &__text {
    width: 70%;
    padding: 20px;
    &-category {
      font-family: $regular;
      font-size: 1.4rem;
      color: $grey_primary;
      margin-bottom: 10px;
    }
    &-title {
      font-family: $semibold;
      font-size: 1.6rem;
      color: $black_primary;
    }
  }
}
// Tablet
@media (min-width: 768px) {
  .favorite {
    width: 33.3%;
  }
}
// PC
@media (min-width: 1300px) {
  .favorite {
    width: 100%;
  }
}
</style>
