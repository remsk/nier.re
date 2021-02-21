<template>
  <div class="countdown" v-if="useDate">
    <timer :date="useDate" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Timer from "@/components/Timer.vue";
import moment from "moment";

export default defineComponent({
  name: "Countdown",
  props: {
    dates: {
      type: Object,
      default: () => {
        return { start: "", end: "" };
      },
    },
  },
  data() {
    return {
      startMoment: moment.utc(this.dates.start),
      useDate: null,
    };
  },
  mounted() {
    this.useDate = this.dates.start;
    this.tick();
  },
  beforeUnmount() {
    window.clearTimeout(this.$options.timer);
  },
  methods: {
    tick(timeout = 50) {
      this.$options.timer = window.setTimeout(this.updateDate, timeout);
    },
    updateDate() {
      if (this.startMoment.diff(moment()) < 1) this.useDate = this.dates.end;
      else this.tick();
    },
  },
  watch: {
    date() {
      this.useDate = this.dates.start;
      this.tick();
    },
  },
  components: {
    Timer,
  },
});
</script>

<style lang="scss" scoped>
</style>
