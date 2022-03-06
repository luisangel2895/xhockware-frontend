<template lang="pug">
news-detail(v-if="getShowFragmentNews")
.news-container(v-if="getAllNews.length")
    .loader-container(v-if="getShowLoader")
      loader
    news(v-for="(news, index) in getAllNews" :key="news.source.id" :news="news" v-else)
.default-message(v-else) No News, select one filter or search other word.
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import News from "@/components/home/News.vue";
import NewsDetail from "@/components/home/fragments/NewsDetail.vue";
import Loader from "@/components/home/Loader.vue";

@Options({
  components: {
    News,
    NewsDetail,
    Loader,
  },
  computed: mapGetters(["getShowFragmentNews", "getAllNews", "getShowLoader"]),
})
export default class NewsContainer extends Vue {}
</script>

<style lang="scss" scoped>
.news-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 40px;
}
.loader-container {
  width: 100%;
  text-align: center;
}
.default-message {
  width: 100%;
  text-align: center;
  font-family: $regular;
  font-size: 1.4rem;
  color: $grey_primary;
}
</style>
