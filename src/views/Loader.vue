<template lang="pug">
.loader-page
	.loader-page__box
		.loader-page__box-icon
			img(src="@/assets/extra-icons/logo.png")
		.loader-page__box-title {{ textAnimated }}

</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Loader extends Vue {
  textBase = "Angel News";
  textAnimated = "";

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async demo(): Promise<void> {
    for (let i = 0; i < this.textBase.length; i++) {
      this.textAnimated += this.textBase[i];
      await this.sleep(200);
    }
    console.log("Done");
  }

  mounted(): void {
    this.demo();
  }

  beforeUnmount(): void {
    this.$router.push("/");
  }
}
</script>

<style lang="scss" scoped>
.loader-page {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $purple_primary;
  animation-name: disvanecense;
  animation-duration: 3s;
  &__box {
    &-icon {
      text-align: center;
      img {
        transform: rotate(0deg);
        animation-name: rotate-logo;
        animation-duration: 2.5s;
      }
    }
    &-title {
      font-family: $semibold;
      color: $white;
      font-size: 2.4rem;
    }
  }
}
@keyframes rotate-logo {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes disvanecense {
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  75% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
