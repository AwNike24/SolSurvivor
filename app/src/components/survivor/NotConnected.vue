<template>
  <div class="games mb-5">
    <div class="game py-3 mx-0 my-2 games-not-found">
      Connect your Phantom Wallet!
    </div>
  </div>
</template>

<script>
export default {
  name: "NotConnected",
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

.games-not-found
  display: block
  align-content: center
  color: $text-gray
  background: #f8f8f8
  font-weight: $font-weight-normal
  font-size: $font-size-sm
  text-align: center
  border-radius: 4px
</style>
