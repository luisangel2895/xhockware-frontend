<template lang="pug">
.news-container
    news
    news
    news
    news
    news
    news
    news

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import News from "@/components/home/News.vue";

@Options({
  components: {
    News,
  },
})
export default class NewsContainer extends Vue {}
</script>

<style lang="scss" scoped>
.news-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
}
</style>
