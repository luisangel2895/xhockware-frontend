<template lang="pug">
//- Fragments
language(v-if="getShowFragmentLanguage")
terms(v-if="getShowFragmentTerms")

section.profile
	.profile__title {{ $t("profile.title") }}
	.profile__box
		.profile__box-image
			img(src="https://avatars.githubusercontent.com/u/16966767?s=400&u=79dcf22740f8a150d19477cdb43e507aa327ff16&v=4")
		.profile__box-data
			.profile__box-data-name Angel Orellana
			.profile__box-data-email luisangel2895@gmail.com
	.profile__section
		.profile__section-text {{ $t("profile.notifications") }}
		radio
	.profile__section(@click="goLanguageFragment")
		.profile__section-text.change-language-cypress {{ $t("profile.language.title") }}
		font-awesome-icon(:icon="['fa', 'angle-right']")
	.profile__section(@click="goTermsFragment")
		.profile__section-text {{ $t("profile.terms") }}
		font-awesome-icon(:icon="['fa', 'angle-right']")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";
// Components
import Radio from "@/components/profile/Radio.vue";
// Fragments
import Language from "@/components/profile/fragments/Language.vue";
import Terms from "@/components/profile/fragments/Terms.vue";

@Options({
  components: { Radio, Language, Terms },
  methods: mapMutations([
    "UPDATE_STATUS_FRAGMENT_LANGUAGE",
    "UPDATE_STATUS_FRAGMENT_TERMS",
  ]),
  computed: mapGetters(["getShowFragmentLanguage", "getShowFragmentTerms"]),
})
export default class Profile extends Vue {
  UPDATE_STATUS_FRAGMENT_LANGUAGE!: (payload: boolean) => void;
  UPDATE_STATUS_FRAGMENT_TERMS!: (payload: boolean) => void;

  goLanguageFragment(): void {
    this.UPDATE_STATUS_FRAGMENT_LANGUAGE(true);
  }
  goTermsFragment(): void {
    this.UPDATE_STATUS_FRAGMENT_TERMS(true);
  }
}
</script>

<style lang="scss" scoped>
.profile {
  padding: 30px 20px 20px 20px;
  &__title {
    font-size: 2.4rem;
    font-family: $semibold;
    color: $black_primary;
  }
  &__box {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    &-image {
      width: 25%;
      min-height: 82px;

      img {
        min-width: 72px;
        width: 100%;
        max-width: 200px;
        border: 1px solid $grey_light;
        border-radius: 100%;
      }
    }
    &-data {
      width: 75%;
      padding-left: 10px;
      &-name {
        font-family: $semibold;
        font-size: 1.6rem;
        color: $black_primary;
      }
      &-email {
        margin-top: 5px;
        font-family: $regular;
        font-size: 1.4rem;
        color: $grey_primary;
      }
    }
  }
  &__section {
    width: 100%;
    margin-top: 15px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    font-family: $semibold;
    font-size: 1.6rem;
    color: $grey_darker;
    background-color: $grey_lighter;
    border-radius: 10px;
  }
}
</style>
