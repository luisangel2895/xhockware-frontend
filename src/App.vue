<template lang="pug">
#app
  loader(v-if="loading")
  main
    router-view
  mobile-nav
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
import MobileNav from "@/components/shared/MobileNav.vue";
import Loader from "@/views/Loader.vue";

@Options({
  components: {
    MobileNav,
    Loader,
  },
  computed: mapGetters(["getAllNews"]),
  methods: mapActions(["getNews"]),
})
export default class App extends Vue {
  loading = true;
  getNews!: (word?: string) => void;

  async mounted(): Promise<void> {
    await setTimeout(() => {
      this.loading = false;
    }, 3000);
    this.getNews();
  }
}
</script>

<style lang="scss">
#app {
  main {
    height: calc(100vh - 62px);
  }
}
</style>
