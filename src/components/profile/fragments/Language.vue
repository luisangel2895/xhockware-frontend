<template lang="pug">
section.language(:class="[{'hide-fragment': !statusFragment}]")
	.language__title
		.language__title-back
			font-awesome-icon(:icon="['fa', 'arrow-left']" @click="goBack")
		.language__title-text {{ $t("profile.language.title") }}
	.language__container
		.language__container-box(@click="translateEnglish" :class="[{'language-selected': getEnglishSelected}]")
			.language__container-box-text  {{ $t("profile.language.english") }}
			.language__container-box-check
				font-awesome-icon(:icon="['fa', 'check']" v-if="getEnglishSelected")
		.language__container-box(@click="translateSpanish" :class="[{'language-selected': getEspanishSelected}]")
			.language__container-box-text  {{ $t("profile.language.spanish") }}
			.language__container-box-check
				font-awesome-icon(:icon="['fa', 'check']" v-if="getEspanishSelected")
		.language__container-box(@click="translatePortuguese" :class="[{'language-selected': getPortugueseSelected}]")
			.language__container-box-text  {{ $t("profile.language.portuguese") }}
			.language__container-box-check
				font-awesome-icon(:icon="['fa', 'check']" v-if="getPortugueseSelected")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";

@Options({
  methods: mapMutations([
    "UPDATE_STATUS_FRAGMENT_LANGUAGE",
    "UPDATE_STATUS_LANGUAGES",
  ]),
  computed: mapGetters([
    "getEnglishSelected",
    "getEspanishSelected",
    "getPortugueseSelected",
  ]),
})
export default class Language extends Vue {
  UPDATE_STATUS_FRAGMENT_LANGUAGE!: (payload: boolean) => void;
  UPDATE_STATUS_LANGUAGES!: (payload: boolean[]) => void;
  statusFragment = true;

  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  async goBack(): Promise<void> {
    this.statusFragment = false;
    await this.sleep(500);
    this.UPDATE_STATUS_FRAGMENT_LANGUAGE(false);
  }
  translateEnglish(): void {
    this.$i18n.locale = "en";
    this.UPDATE_STATUS_LANGUAGES([true, false, false]);
  }
  translateSpanish(): void {
    this.$i18n.locale = "es";
    this.UPDATE_STATUS_LANGUAGES([false, true, false]);
  }
  translatePortuguese(): void {
    this.$i18n.locale = "pt";
    this.UPDATE_STATUS_LANGUAGES([false, false, true]);
  }
}
</script>

<style lang="scss" scoped>
.language {
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

  &__container {
    width: 100%;

    &-box {
      padding: 20px;
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $grey_lighter;
      color: $grey_darker;
      border-radius: 15px;
      font-size: 1.6rem;
      font-family: $semibold;
    }
  }
}
.hide-fragment {
  animation-name: hide-fragment;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}
.language-selected {
  color: $white;
  background-color: $purple_primary;
  animation-name: select;
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
@keyframes select {
  from {
    background-color: $grey_lighter;
    color: $grey_darker;
  }
  to {
    color: $white;
    background-color: $purple_primary;
  }
}
// Tablet
@media (min-width: 768px) {
  .language {
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
  .language {
    width: 20%;
    animation-name: show-fragment-pc;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    z-index: 50;
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
