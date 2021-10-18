<template>
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
  >
    <div v-if="weekNumber > currentWeek + 1">🔒</div>
    <div
      v-else-if="Object.keys(selection).length === 0"
      @click="$emit('selectWeekToPick', { weekNumber })"
    >
      Select
    </div>
    <div v-else>
      <img :src="getSelectedTeam" class="logo-team-img" />
    </div>
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
  },
  methods: {
    getSelectedTeam() {
      const { selection } = this.selection.selections[0];
      if (!selection) {
        return "";
      }
      return `/images/team-logos/FOOTBALL/${selection.longName
        .toLowerCase()
        .split(" ")
        .join("")}.png`;
    },
  },
};
</script>

<style lang="sass">
@import "../../assets/styles/variables"

.pickSection
  padding: 1.35rem 1rem
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  font-weight: bold
  font-size: $font-size-xs
  color: #272d58
  cursor: pointer
  width: 100%

  &:hover
    transform: scale(1.025)
    transition: transform 0.3s

.logo-team-img
  max-width: 36px
</style>
