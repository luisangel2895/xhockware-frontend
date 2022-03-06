<template lang="pug">
nav
  .mobile-nav
    .mobile-nav__link(@click="goHome" :class="[{'paint-icon' :inHome }]")
      font-awesome-icon(:icon="['far', 'newspaper']")
    .mobile-nav__link(@click="goFavorites" :class="[{'paint-icon' :inFavorites }]")
      font-awesome-icon(:icon="['far', 'heart']")
    .mobile-nav__link(@click="goProfile" :class="[{'paint-icon' :inProfile }]")
      font-awesome-icon(:icon="['far', 'user']")
  .animation-nav
    .animation-nav__line(:class="[{'home-fav' :beforeHome && inFavorites }, {'home-profile' :beforeHome && inProfile }, {'fav-home' :beforeFavorites && inHome }, {'fav-profile' :beforeFavorites && inProfile }, {'profile-home' :beforeProfile && inHome }, {'profile-fav' :beforeProfile && inFavorites }]")

</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class MobileNav extends Vue {
  inHome = true;
  inFavorites = false;
  inProfile = false;
  beforeHome = false;
  beforeFavorites = false;
  beforeProfile = false;

  goHome(): void {
    if (this.inFavorites) {
      this.beforeHome = false;
      this.beforeFavorites = true;
      this.beforeProfile = false;
    } else if (this.inProfile) {
      this.beforeHome = false;
      this.beforeFavorites = false;
      this.beforeProfile = true;
    }
    this.$router.push("/");
    this.inHome = true;
    this.inFavorites = false;
    this.inProfile = false;
  }
  goFavorites(): void {
    if (this.inHome) {
      this.beforeHome = true;
      this.beforeFavorites = false;
      this.beforeProfile = false;
    } else if (this.inProfile) {
      this.beforeHome = false;
      this.beforeFavorites = false;
      this.beforeProfile = true;
    }
    this.$router.push("/favorites");
    this.inHome = false;
    this.inFavorites = true;
    this.inProfile = false;
  }
  goProfile(): void {
    if (this.inHome) {
      this.beforeHome = true;
      this.beforeFavorites = false;
      this.beforeProfile = false;
    } else if (this.inFavorites) {
      this.beforeHome = false;
      this.beforeFavorites = true;
      this.beforeProfile = false;
    }
    this.$router.push("/profile");
    this.inHome = false;
    this.inFavorites = false;
    this.inProfile = true;
  }
}
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
  }
  &__link:active {
    border-radius: 100%;
    background-color: $grey_lighter;
    animation-name: show-circle;
    animation-duration: 0.5s;
  }
}

.animation-nav {
  width: 80%;
  height: 5px;
  position: fixed;
  bottom: 0px;
  z-index: 2;
  margin-left: 10%;
  &__line {
    width: 33%;
    height: 2px;
    position: relative;
    background-color: $purple_primary;
  }
}

// classes animations
.paint-icon {
  color: $purple_primary;
  animation-name: color-change;
  animation-duration: 1.25s;
}
.home-fav {
  animation-name: home-fav;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.home-profile {
  animation-name: home-profile;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.fav-home {
  animation-name: fav-home;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.fav-profile {
  animation-name: fav-profile;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.profile-home {
  animation-name: profile-home;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.profile-fav {
  animation-name: profile-fav;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
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
@keyframes home-fav {
  0% {
    left: 0px;
    width: 33%;
  }
  50% {
    left: 0px;
    width: 66%;
  }
  100% {
    left: 33%;
    width: 33%;
  }
}
@keyframes home-profile {
  0% {
    left: 0px;
    width: 33%;
  }
  50% {
    left: 0px;
    width: 100%;
  }
  100% {
    left: 66%;
    width: 33%;
  }
}
@keyframes fav-home {
  0% {
    left: 33%;
    width: 33%;
  }
  50% {
    left: 0%;
    width: 66%;
  }
  100% {
    left: 0%;
    width: 33%;
  }
}
@keyframes fav-profile {
  0% {
    left: 33%;
    width: 33%;
  }
  50% {
    left: 33%;
    width: 66%;
  }
  100% {
    left: 66%;
    width: 33%;
  }
}
@keyframes profile-home {
  0% {
    left: 66%;
    width: 33%;
  }
  50% {
    left: 0%;
    width: 100%;
  }
  100% {
    left: 0%;
    width: 33%;
  }
}
@keyframes profile-fav {
  0% {
    left: 66%;
    width: 33%;
  }
  50% {
    left: 33%;
    width: 66%;
  }
  100% {
    left: 33%;
    width: 33%;
  }
}
</style>
