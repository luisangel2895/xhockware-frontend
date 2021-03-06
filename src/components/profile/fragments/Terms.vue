<template lang="pug">
section.term(:class="[{'hide-fragment': !statusFragment}]")
	.term__title
		.term__title-back
			font-awesome-icon(:icon="['fa', 'arrow-left']" @click="goBack")
		.term__title-text {{ $t("profile.terms") }}
	.term__text {{ termsService }}
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapMutations } from "vuex";
// Data
import termsService from "@/assets/docs/terms-service";

@Options({
  methods: mapMutations(["UPDATE_STATUS_FRAGMENT_TERMS"]),
})
export default class Terms extends Vue {
  UPDATE_STATUS_FRAGMENT_TERMS!: (payload: boolean) => void;
  statusFragment = true;
  termsService = "";

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async goBack(): Promise<void> {
    this.statusFragment = false;
    await this.sleep(500);
    this.UPDATE_STATUS_FRAGMENT_TERMS(false);
  }
  mounted(): void {
    this.termsService = termsService;
  }
}
</script>

<style lang="scss" scoped>
.term {
  position: fixed;
  z-index: 7;
  width: 100vw;
  height: 100vh;
  top: 0px;
  padding: 30px 20px 20px 20px;
  overflow-y: auto;
  background-color: $white;
  animation-name: show-fragment;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;

  &__title {
    width: 100%;
    display: flex;
    font-family: $semibold;

    align-items: center;

    &-back {
      font-size: 1.6rem;
      color: $grey_primary;
    }
    &-text {
      width: 100%;
      text-align: center;
      padding-right: 16px;
      font-size: 2.4rem;
      color: $black_primary;
    }
  }

  &__text {
    margin-top: 20px;
    font-family: $regular;
    font-size: 1.6rem;
    color: $grey_primary;
  }
}
.hide-fragment {
  animation-name: hide-fragment;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
@keyframes show-fragment {
  from {
    left: 100%;
  }
  to {
    left: 0%;
  }
}
@keyframes hide-fragment {
  from {
    left: 0%;
  }
  to {
    left: 100%;
  }
}
// Tablet
@media (min-width: 768px) {
  .term {
    width: 30%;
    animation-name: show-fragment-tablet;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  .hide-fragment {
    animation-name: hide-fragment-tablet;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes show-fragment-tablet {
    from {
      left: -30%;
    }
    to {
      left: 0%;
    }
  }
  @keyframes hide-fragment-tablet {
    from {
      left: 0%;
    }
    to {
      left: -30%;
    }
  }
}
// PC
@media (min-width: 1300px) {
  .term {
    width: 20%;
    height: 400px;
    animation-name: show-fragment-pc;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    padding-top: 0px;
    &__title {
      padding-top: 40px;
      padding-right: 20px;
      width: 20%;
      position: fixed;
      background-color: $white;
    }
    &__text {
      margin-top: 80px;
    }
  }
  .hide-fragment {
    animation-name: hide-fragment-pc;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
  }
  @keyframes show-fragment-pc {
    from {
      left: -20%;
    }
    to {
      left: 0%;
    }
  }
  @keyframes hide-fragment-pc {
    from {
      left: 0%;
    }
    to {
      left: -20%;
    }
  }
}
</style>
