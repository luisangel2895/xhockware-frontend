<template lang="pug">
.radio(@click="changeNotifications" :class="[{'disable-box':!getNotificationsActivated},{'enable-box':getNotificationsActivated},{'paint-purple':active}, {'paint-grey':desactive}]")
    .radio__circle(:class="[{'disable-circle':!getNotificationsActivated},{'enable-circle':getNotificationsActivated},{'move-right':active}, {'move-left':desactive}]")
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { mapGetters, mapMutations } from "vuex";

@Options({
  methods: mapMutations(["UPDATE_STATUS_NOTIFICATIONS"]),
  computed: mapGetters(["getNotificationsActivated"]),
})
export default class Radio extends Vue {
  UPDATE_STATUS_NOTIFICATIONS!: (payload: boolean) => void;
  getNotificationsActivated!: boolean;
  active = false;
  desactive = false;

  changeNotifications(): void {
    if (this.getNotificationsActivated) {
      this.UPDATE_STATUS_NOTIFICATIONS(false);
      this.active = false;
      this.desactive = true;
    } else {
      this.UPDATE_STATUS_NOTIFICATIONS(true);
      this.active = true;
      this.desactive = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.radio {
  width: 45px;
  height: 24px;
  background-color: $grey_darker;
  border-radius: 20px;
  &__circle {
    width: 20px;
    height: 20px;
    position: relative;
    top: 2px;
    left: 2px;
    border-radius: 100%;
    background-color: $white;
  }
}
// static classes
.disable-box {
  background-color: $grey_darker;
}
.disable-circle {
  left: 2px;
}
.enable-box {
  background-color: $purple_primary;
}
.enable-circle {
  left: 23px;
}

// animations
.paint-purple {
  animation-name: paint-purple;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.paint-grey {
  animation-name: paint-grey;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.move-right {
  animation-name: move-right;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
.move-left {
  animation-name: move-left;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}
@keyframes paint-purple {
  from {
    background-color: $grey_darker;
  }
  to {
    background-color: $purple_primary;
  }
}
@keyframes paint-grey {
  from {
    background-color: $purple_primary;
  }
  to {
    background-color: $grey_darker;
  }
}
@keyframes move-right {
  from {
    left: 2px;
  }
  to {
    left: 23px;
  }
}
@keyframes move-left {
  from {
    left: 23px;
  }
  to {
    left: 2px;
  }
}
</style>
