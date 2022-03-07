<template lang="pug">
.category(@click="selectCategory" :class="[{'category-selected': category.status }, {'change-color': currenPurple}, {'change-color-reverse': currentGray}]") {{ filterCategory() }}
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";
// Types
import { Category as CategoryType } from "@/types/category";

@Options({
  props: {
    category: Object,
  },
  computed: mapGetters(["getCategories"]),
  methods: mapMutations(["UPDATE_NEWS_CATEGORY"]),
})
export default class Category extends Vue {
  category!: CategoryType;
  currenPurple = false;
  currentGray = false;
  getCategories!: CategoryType[];
  UPDATE_NEWS_CATEGORY!: () => void | number;

  selectCategory(): void {
    if (this.category.status) {
      this.currenPurple = false;
      this.currentGray = true;
    } else {
      this.currenPurple = true;
      this.currentGray = false;
    }
    this.category.status = !this.category.status;
    this.UPDATE_NEWS_CATEGORY();
  }

  filterCategory(): string {
    const word = this.category.name;
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
</script>

<style lang="scss" scoped>
.category {
  margin-right: 20px;
  padding: 10px 20px;
  font-family: $semibold;
  font-size: 1.2rem;
  color: $grey_primary;
  background-color: $grey_lighter;
  border-radius: 20px;
}
.category-selected {
  background-color: $purple_primary;
  color: $white;
}

.change-color {
  animation-name: color-change;
  animation-duration: 0.5s;
}

.change-color-reverse {
  animation-name: color-change-reverse;
  animation-duration: 0.5s;
}

@keyframes color-change {
  from {
    color: $grey_primary;
    background-color: $grey_lighter;
  }
  to {
    color: $white;
    background-color: $purple_primary;
  }
}
@keyframes color-change-reverse {
  from {
    color: $white;
    background-color: $purple_primary;
  }
  to {
    color: $grey_primary;
    background-color: $grey_lighter;
  }
}
</style>
