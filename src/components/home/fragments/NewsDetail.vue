<template lang="pug">
section
  .news-detail(:class="[{'hide-fragment': !statusFragment}]" v-if="getNewsDetail.category")
    .news-detail__header
      font-awesome-icon(:icon="['fa', 'arrow-left']" @click="goBack")
    .news-detail__image-container
      img(:src="getNewsDetail.urlToImage")
    .news-detail__title-container
      .news-detail__title-container-inner
        span.news-detail__title-container-category {{filterCategory()}}
        .news-detail__title-container-title {{getNewsDetail.title}}
        .news-detail__title-container-author-container
          .news-detail__title-container-author-image
            img(src="https://avatars.githubusercontent.com/u/16966767?s=400&u=79dcf22740f8a150d19477cdb43e507aa327ff16&v=4")
          .news-detail__title-container-author-author
            .news-detail__title-container-author-author-name {{getNewsDetail.author}}
            .news-detail__title-container-author-author-media {{getNewsDetail.source.name}}
    .news-detail__text {{getNewsDetail.content}}
  .default-message-detail(v-else) No news selected, please select one news
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapMutations, mapGetters } from "vuex";
// Types
import { News } from "@/types/news-response";

@Options({
  methods: mapMutations(["UPDATE_STATUS_FRAGMENT_NEWS"]),
  computed: mapGetters(["getNewsDetail"]),
})
export default class NewsDetail extends Vue {
  UPDATE_STATUS_FRAGMENT_NEWS!: (payload: boolean) => void;
  getNewsDetail!: News;
  statusFragment = true;

  filterCategory(): string {
    const word = this.getNewsDetail.category;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async goBack(): Promise<void> {
    this.statusFragment = false;
    await this.sleep(500);
    this.UPDATE_STATUS_FRAGMENT_NEWS(false);
  }
}
</script>

<style lang="scss" scoped>
.default-message-detail {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: $regular;
  font-size: 1.6rem;
  color: $grey_primary;
}
.news-detail {
  position: fixed;
  z-index: 7;
  width: 100%;
  height: 100vh;
  top: 0px;
  // padding: 30px 20px 20px 20px;
  overflow-y: auto;
  background-color: $white;
  animation-name: show-fragment;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  &__header {
    width: 100%;
    position: absolute;
    top: 0px;
    z-index: 2;
    padding: 30px 20px 20px 20px;
    font-size: 1.6rem;
    color: $white;
    animation-name: arrow-back;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }

  &__title-container {
    position: absolute;
    height: 320px;
    display: flex;
    align-items: flex-end;

    animation-name: title-container;
    animation-duration: 2s;
    animation-fill-mode: forwards;

    &-inner {
      width: 100%;
      padding: 30px 20px 20px 20px;
    }

    &-category {
      padding: 10px 15px;
      font-family: $semibold;
      font-size: 1.2rem;
      color: $white;
      background-color: $purple_primary;
      border-radius: 15px;
    }

    &-title {
      margin-top: 20px;
      font-family: $bold;
      font-size: 2rem;
      color: $white;

      animation-name: change-title;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }

    &-author-container {
      width: 100%;
      margin-top: 30px;
      display: flex;
      align-items: center;
    }

    &-author-image {
      width: 15%;
      img {
        width: 100%;
        border-radius: 100%;
        border: 1px solid $grey_primary;
      }
    }

    &-author-author {
      width: 85%;
      padding-left: 10px;
      &-name {
        font-family: $semibold;
        font-size: 1.6rem;
        color: $white;

        animation-name: change-author;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }
      &-media {
        font-family: $regular;
        font-size: 1.4rem;
        color: $grey_light;
      }
    }
  }

  &__image-container {
    width: 100%;
    padding: 0px;
    position: absolute;
    z-index: -1;

    animation-name: change-image-container;
    animation-duration: 2s;
    animation-fill-mode: forwards;

    img {
      width: 100%;
      height: 350px;
      border-radius: 0px;
      object-fit: cover;

      animation-name: change-image;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }

  &__text {
    width: 100%;
    margin-top: 330px;
    padding: 30px 20px 20px 20px;
    background-color: $white;
    border-radius: 20px;
    font-family: $regular;
    font-size: 1.6rem;
    color: $grey_darker;

    animation-name: change-text;
    animation-duration: 2s;
    animation-fill-mode: forwards;
  }
}
.hide-fragment {
  animation-name: hide-fragment;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes show-fragment {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
@keyframes hide-fragment {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
@keyframes arrow-back {
  0% {
    color: white;
  }
  50% {
    color: white;
  }
  100% {
    color: $grey_primary;
  }
}
@keyframes change-image-container {
  0% {
    padding: 0px;
    position: absolute;
    z-index: -1;
  }
  50% {
    padding: 0px;
    position: absolute;
    z-index: -1;
  }
  100% {
    padding: 80px 20px 20px 20px;
    position: block;
    z-index: 1;
  }
}
@keyframes change-image {
  0% {
    height: 350px;
    border-radius: 0px;
  }
  50% {
    height: 350px;
    border-radius: 0px;
  }
  to {
    height: 200px;
    border-radius: 20px;
  }
}
@keyframes title-container {
  0% {
    position: absolute;
    height: 320px;
  }
  50% {
    position: absolute;
    height: 320px;
  }
  to {
    position: absolute;
    height: 530px;
  }
}
@keyframes change-title {
  0% {
    color: $white;
  }
  50% {
    color: $white;
  }
  to {
    color: $black_primary;
  }
}
@keyframes change-text {
  0% {
    margin-top: 330px;
  }
  50% {
    margin-top: 330px;
  }
  to {
    margin-top: 500px;
  }
}
@keyframes change-author {
  0% {
    color: $white;
  }
  50% {
    color: $white;
  }
  to {
    color: $black_primary;
  }
}
// Tablet
@media (min-width: 768px) {
  .news-detail {
    width: 70%;
    padding-bottom: 50px;
    animation-name: show-fragment-tablet;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .hide-fragment {
    animation-name: hide-fragment-tablet;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes show-fragment-tablet {
    from {
      right: -70%;
    }
    to {
      right: 0%;
    }
  }
  @keyframes hide-fragment-tablet {
    from {
      right: 0%;
    }
    to {
      right: -70%;
    }
  }
}
// PC
@media (min-width: 1300px) {
  .news-detail {
    width: 40%;
    padding-bottom: 50px;
    animation-name: show-fragment-pc;
    animation-duration: 0s;
    animation-fill-mode: forwards;
    &__header {
      display: none;
    }
    &__title-container {
      animation-name: title-container-pc;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
    &__image-container {
      img {
        animation-name: change-imag-pc;
        animation-duration: 2s;
        animation-fill-mode: forwards;
      }
    }
    &__text {
      animation-name: change-text-pc;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }

  @keyframes show-fragment-pc {
    from {
      right: 0%;
    }
    to {
      right: 0%;
    }
  }
  @keyframes change-image-pc {
    0% {
      height: 350px;
      border-radius: 0px;
    }
    50% {
      height: 350px;
      border-radius: 0px;
    }
    to {
      height: 3500px;
      border-radius: 20px;
    }
  }
  @keyframes title-container-pc {
    0% {
      position: absolute;
      height: 320px;
    }
    50% {
      position: absolute;
      height: 320px;
    }
    to {
      position: absolute;
      height: 700px;
    }
  }
  @keyframes change-text-pc {
    0% {
      margin-top: 330px;
    }
    50% {
      margin-top: 330px;
    }
    to {
      margin-top: 680px;
    }
  }
}
</style>
