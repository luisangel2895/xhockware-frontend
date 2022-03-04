<template lang="pug">
.news
	.news__img
		img(src="https://ichef.bbci.co.uk/news/800/cpsprodpb/15D4/production/_123488550_tv074288205.jpg.webp")
	.news__title
		.news__title-text {{ filterLengthText() }}
		.news__title-heart
			font-awesome-icon(:icon="['far', 'heart']" v-if="!newSelected" @click="selectHeart").news__title-heart-void
			font-awesome-icon(:icon="['fas', 'heart']" v-else @click="selectHeart").news__title-heart-filled

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class News extends Vue {
  title =
    "Rusia y Ucrania: las razones por las que el convoy ruso tiene poco progreso en su camino hacia Kiev";
  newSelected = false;

  selectHeart(): void {
    this.newSelected = !this.newSelected;
  }
  filterLengthText(): string {
    if (this.title.length <= 64) {
      return this.title;
    } else {
      return this.title.slice(0, 59) + " ...";
    }
  }
}
</script>
<style lang="scss" scoped>
.news {
  width: 100%;
  margin-bottom: 20px;
  border: 1px solid $grey_lighter;
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
      color: $grey_primary;

      &-void {
        animation-name: unfill-heart;
        animation-duration: 0.5s;
      }

      &-filled {
        animation-name: fill-heart;
        animation-duration: 0.5s;
      }
    }
  }

  &__img {
    width: 100%;
    img {
      width: 100%;
    }
  }
}

@keyframes fill-heart {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes unfill-heart {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
