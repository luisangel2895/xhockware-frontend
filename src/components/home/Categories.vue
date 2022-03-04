<template lang="pug">
.categories
	category(v-for="(category, index) in categoriesArray" :key="index" :category="category")
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Category from "@/components/home/Category.vue";
// Types
import { CategoryType } from "@/types/category";

@Options({
  components: { Category },
})
export default class Categories extends Vue {
  categoriesArray: CategoryType[] = [
    {
      category: "All",
      active: true,
    },
    {
      category: "Politic",
      active: false,
    },
    {
      category: "Magazine",
      active: false,
    },
    {
      category: "Fashion",
      active: false,
    },
    {
      category: "Art",
      active: false,
    },
    {
      category: "Cinema",
      active: false,
    },
    {
      category: "Economy",
      active: false,
    },
  ];
}
</script>

<style lang="scss" scoped>
.categories {
  width: 100%;
  overflow-x: scroll;
  display: flex;
  margin-top: 5px;
  padding-top: 20px;
}
</style>
