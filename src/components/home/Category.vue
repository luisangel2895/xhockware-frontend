<template lang="pug">
.category(@click="selectCategory" :class="[{'category-selected': category.active }, {'change-color': currenPurple}, {'change-color-reverse': currentGray}]") {{ category.category }}
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapActions, mapGetters } from "vuex";
// Types
import { CategoryType } from "@/types/category";

@Options({
  props: {
    category: Object,
  },
  watch: {
    getCleanCategory(value) {
      console.log(value);
      if (this.category.active) {
        this.category.active = false;
        this.currenPurple = false;
        this.currentGray = true;
        this.active = false;
      }
    },
  },
  computed: mapGetters(["getCleanCategory", "getCategories"]),
  methods: mapActions(["addCategory", "deleteCategory"]),
})
export default class Category extends Vue {
  category!: CategoryType;
  currenPurple = false;
  currentGray = false;
  addCategory!: (category: string) => void;
  deleteCategory!: (category: string) => void;
  getCategories!: string[];

  selectCategory(): void {
    if (this.category.active) {
      this.currenPurple = false;
      this.currentGray = true;
      this.deleteCategory(this.category.category.toLowerCase());
    } else {
      this.currenPurple = true;
      this.currentGray = false;
      this.addCategory(this.category.category.toLowerCase());
    }
    this.category.active = !this.category.active;
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
