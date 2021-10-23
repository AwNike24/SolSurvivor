<template>
  <div
    v-if="showLocks()"
    class="
      col-md-1 col-3
      pickSection
      d-flex
      justify-content-center
      flex-nowrap
      align-items-center
      live
    "
  >
    <img src="../../../public/icons/solsulvivor/Icon-ionic-ios-lock.svg" />
  </div>
  <div
    class="
      col-md-1 col-3
      pickSection
      d-flex
      justify-content-center
      flex-nowrap
      align-items-center
      live
    "
    v-else-if="Object.keys(selection).length === 0"
    @click="$emit('selectWeekToPick', { weekNumber })"
  >
    Select
  </div>
  <div
    v-else
    class="
      col-md-1 col-3
      pickSection
      d-flex
      justify-content-center
      flex-nowrap
      align-items-center
      live
    "
    :class="{
      winner: this.selection && this.selection.outcome === 'winner',
      loser: this.selection && this.selection.outcome === 'loser',
    }"
    @click="!isDead ? $emit('selectWeekToPick', { weekNumber }) : ''"
  >
    <img :src="getImage()" class="logo-team-img" />
  </div>
</template>

<script>
export default {
  name: "PickSection",
  props: {
    currentWeek: {
      type: Number,
      required: true,
    },
    selection: {
      type: Object,
      default: () => ({}),
    },
    weekNumber: {
      type: Number,
      required: true,
    },
    isDead: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    getSelectedTeam() {
      const { selection } = this.selection.selection;
      return selection;
    },
    getImage() {
      const selection = this.getSelectedTeam();
      return `/images/team-logos/FOOTBALL/${selection.longName
        .toLowerCase()
        .split(" ")
        .join("")}.png`;
    },
    showLocks() {
      return (
        this.weekNumber > this.currentWeek ||
        (this.weekNumber === this.currentWeek && this.isDead)
      );
    },
  },
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"

.pickSection
  padding: 1.35rem 1rem
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  font-weight: bold
  font-size: $font-size-xs
  color: #272d58
  cursor: pointer
  
  &:hover
    transform: scale(1.025)
    transition: transform 0.3s

.logo-team-img
  max-width: 36px


.winner
  background: rgba(72, 226, 37, 0.4)
.loser
  background: $color-secondary
</style>
