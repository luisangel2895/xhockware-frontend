<template lang="pug">
.box-search
	font-awesome-icon(:icon="['fa', 'magnifying-glass']" @click="searchWord").box-search__icon-search
	input(type="text" :placeholder=`$t("home.placeholder")` v-model="word" @keypress="enterSearch").box-search__content
	img(src="@/assets/extra-icons/mic.png").box-search__icon-mic

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
// Types
import { EventKeyPress } from "@/types/event-keypress";

@Options({
  methods: mapActions(["getNews"]),
  computed: mapGetters(["getCategories"]),
})
export default class BoxSearch extends Vue {
  word = "";
  getNews!: (word: string) => void;
  // eslint-disable-next-line
  getCategories!: any;

  cleanCategories(): void {
    for (const categoryName in this.getCategories) {
      this.getCategories[categoryName].status = false;
    }
  }

  searchWord(): void {
    this.getNews(this.word);
    this.cleanCategories();
  }

  enterSearch(event: EventKeyPress): void {
    if (event.code === "Enter") {
      this.getNews(this.word);
      this.cleanCategories();
    }
  }
}
</script>

<style lang="scss" scoped>
.box-search {
  width: 100%;
  max-width: 600px;
  display: flex;
  padding: 15px;
  border-radius: 10px;
  background-color: $grey_lighter;
  margin-top: 30px;
  align-items: center;

  &__icon-search {
    font-size: 1.6rem;
    color: $grey_primary;
  }
  &__content {
    width: 100%;
    margin: 0px 10px 0px 10px;
    font-family: $medium;
    font-size: 1.6rem;
    color: $grey_primary;
    border: none;
    background-color: $grey_lighter;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: $grey_primary;
    }
  }
}
</style>
