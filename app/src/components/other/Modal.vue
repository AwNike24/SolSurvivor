<template>
  <div class="modal-wrap" @click.self="close">
    <div class="modal-container">
      <div class="modal d-block px-4 py-4 px-md-5 py-md-5 animate__animated animate__bounceInUp">
        <div class="modal-close-btn" @click="close">×</div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {};
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"

.modal-wrap
  display: flex
  position: fixed
  top: 0
  left: 0
  z-index: 10
  background: rgba(0, 0, 0, .62)
  width: 100%
  height: 100%
  align-content: center
  align-items: center
  justify-content: center
.modal-container
  background: #fff
  padding: 4px
  border-radius: 10px
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, .20)

.modal
  position: relative
  background: white
  width: 570px
  overflow-x: auto
  max-height: calc(100vh - 5rem)
  overflow-y: auto

  @media screen and (max-width: map-get($grid-breakpoints, sm))
    width: 100%
    height: 100%
    overflow-y: auto
    box-shadow: none
.modal-close-btn
  position: absolute
  right: 0
  top: 0
  padding: 24px
  line-height: 0px
  cursor: pointer
  color: #969ccb
  font-size: 2rem
  z-index: 11
  &:hover
    color: $color-primary

  @media screen and (min-width: map_get($grid-breakpoints, sm))
    line-height: 1rem
</style>
