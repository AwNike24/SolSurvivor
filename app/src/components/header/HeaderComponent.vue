<template>
  <header class="container-fluid header-container">
    <div class="header">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center">
          <router-link to="/" class="header-logo-link">
            <img
              class="header-logo"
              src="../../../public/icons/solsulvivor/logo-solsurvivor.svg"
              alt="4castersports Logo"
            />
          </router-link>
          <connect-to-wallet />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ConnectToWallet from "./ConnectToWallet";
export default {
  name: "HeaderComponent",
  components: { ConnectToWallet },
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"
.header-link
  display: inline-block
  margin-left: 3rem
  @media screen and (max-width: map_get($grid-breakpoints, md))
    margin-left: 0.2rem
    font-size: $font-size-sm
  color: #F5F0F6

  &:hover, &.router-link-active
    color: white
    text-decoration: none

    transform: scale(1.2)
    transition: transform 0.3s

.header-container
  background: transparent linear-gradient(267deg, rgba(52, 59, 134, 1) 0%, rgba(1, 8, 70, 1) 100%) 0% 0% no-repeat padding-box
  z-index: 5
  position: relative
  // background-repeat: no-repeat
  // background-position: calc(100% + 59px) 100%
  // background-size: 480px auto

  @media screen and (max-width: map-get($grid-breakpoints, md))
    background-image: none

  .header
    margin: 0 auto
    padding: 20px 0
    min-height: 70px

    @media screen and (max-width: map-get($grid-breakpoints, md))
      padding: .5rem 0
      min-height: 49px

    &-logo
      height: 24px
      width: auto
      @media screen and (max-width: map-get($grid-breakpoints, md))
        height: 50px

    .menu-close-btn
      font-size: 1.5rem
      line-height: 16px

    .mobile-menu-btn
      display: none
      color: white
      padding: 0 .5rem
      margin-left: -.5rem
      height: 100%
      @media screen and (max-width: map-get($grid-breakpoints, md))
        display: block

    nav
      flex-grow: 1
      display: flex
      z-index: 10

      @media screen and (max-width: map-get($grid-breakpoints, md))
        display: none
        top: 48px
        left: 0
        width: 100%
        flex-direction: column
        background: $color-primary
        padding: 1rem 0

        a, .router-link
          border-radius: 0

      &.mobileShown
        display: flex


      a, .router-link
        color: white
        font-weight: $font-weight-semibold
        text-shadow: 1px 2px 5px rgba(44, 60, 120, .35)
        padding: .5rem .75rem

        &:hover, &.router-link-active
          text-decoration: underline

        @media screen and (max-width: map-get($grid-breakpoints, md))
          font-weight: $font-weight-base
</style>
