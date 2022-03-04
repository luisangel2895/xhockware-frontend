<template lang="pug">
.box-search
	img(src="@/assets/extra-icons/search.png").box-search__icon-search
	input(type="text" placeholder="Search").box-search__content
	img(src="@/assets/extra-icons/mic.png").box-search__icon-mic

</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class BoxSearch extends Vue {}
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

  &__icon-search {
    cursor: pointer;
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
