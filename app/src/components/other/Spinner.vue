<template>
  <div class="spinner my-5">
    <div class="spinner-ball spinner-ball-1" />
    <div class="spinner-ball spinner-ball-2" />
    <div class="spinner-ball spinner-ball-3" />
  </div>
</template>

<script>
export default {
  name: "Spinner",
};
</script>

<style scoped lang="sass">

.spinner
  margin: 50px auto 0
  width: 180px
  text-align: center

  &-ball
    width: 1rem
    height: 1rem
    margin: 0 .2rem
    background-color: #969ccb

    border-radius: 100%
    display: inline-block
    animation: spinner-animation 1.4s infinite ease-in-out both

.spinner-ball-1
  animation-delay: -0.32s

.spinner-ball-2
  animation-delay: -0.16s

@keyframes spinner-animation
  0%, 80%, 100%
    transform: scale(0)
  40%
    transform: scale(1.0)
</style>
