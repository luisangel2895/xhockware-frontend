<template lang="pug">
.categories
	category(v-for="(category, index) in getCategories" :key="index" :category="category")
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters } from "vuex";
import Category from "@/components/home/Category.vue";

@Options({
  components: { Category },
  computed: mapGetters(["getCategories"]),
})
export default class Categories extends Vue {}
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
