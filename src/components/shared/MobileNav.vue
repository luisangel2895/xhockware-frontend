<template lang="pug">
nav.mobile-nav
  router-link(to="/").mobile-nav__link
    font-awesome-icon(:icon="['far', 'newspaper']")
  router-link(to="/favorites").mobile-nav__link
    font-awesome-icon(:icon="['far', 'heart']")
  router-link(to="/profile").mobile-nav__link
    font-awesome-icon(:icon="['far', 'user']")
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class MobileNav extends Vue {}
</script>

<style lang="scss" scoped>
.mobile-nav {
  width: 100vw;
  height: 62px;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2.4rem;
  border-top: 0.5px solid $grey_light;
  border-radius: 20px 20px 0px 0px;
  background-color: $white;

  &__link {
    color: $grey_light;
    width: 60px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &.router-link-active {
      color: $purple_primary;
      animation-name: color-change;
      animation-duration: 1.25s;
    }
  }
  &__link:active {
    border-radius: 100%;
    background-color: $grey_lighter;
    animation-name: show-circle;
    animation-duration: 0.25s;
  }
}
@keyframes color-change {
  from {
    color: $grey_light;
  }
  to {
    color: $purple_primary;
  }
}
@keyframes show-circle {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
