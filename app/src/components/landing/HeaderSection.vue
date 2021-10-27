<template>
  <div class="header" @click="active = false">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6 title-container">
          <h1 class="text-center py-0 my-0 text-lg-left">NFT Survivor Pools</h1>
          <h2 class="text-center py-0 my-0 text-lg-left fw-light">
            New Traits Each Week You Survive
          </h2>
          <div class="col-12 text-center ml-1 w-100">
            <button
              href="#how-it-works"
              class="
                free-acct-info
                mt-md-5 mt-4
                d-block d-lg-inline
                mx-auto mx-lg-0
              "
              @click="routeToSurvivorPool"
            >
              Start Now
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 title-container-img text-center">
          <img src="/images/Imagen-slider@2x.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeaderSection",
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    routeToSurvivorPool() {
      this.$router.push('/survivor-pool/my-entries');
    },
  },
};
</script>
<style lang="sass" scoped>

@import "@/assets/styles/variables"

div.header
  background-image: url('/images/Background-slideprincipal@2x.png')
  background-repeat: no-repeat
  background-size: 100% 100%
  padding-top: 20px
  color: white
  min-height: 750px
  @media screen and (max-width: 1200px)
    min-height: 585px
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    min-height: 1100px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    min-height: 930px
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    background-image: url('/images/Background-responsive_.png')
    background-repeat: no-repeat
    background-size: 100% 100%
    min-height: 870px
  @media screen and (max-width: 480px)
    min-height: 800px
  @media screen and (max-width: 360px)
    min-height: 750px

  .container-header
    @media screen and (max-width: 1350px)
      max-width: 75%

  img
    width: 300px
    height: auto
    @media screen and (max-width: map_get($grid-breakpoints, md))
      width: 250px
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      width: 200px

  nav a
    color: white
    font-size: 0.8rem
    font-family: $font-poppins
    display: inline-block
    &:not(:last-child)
      margin-right: 60px
    &:hover
      text-decoration: none
      color: white

  h1
    font-weight: bold
    font-family: $font-poppins-bold
    font-size: 3.25rem
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 2.6rem

  h2
    font-size: 1.5rem
    font-family: $font-poppins
    font-weight: lighter
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 1.3rem

  h4
    font-size: 1rem
    font-family: 'Roboto'
    font-weight: normal

  .title-container
    margin-top: 150px
    @media screen and (max-width: map_get($grid-breakpoints, lg))
      margin-top: 100px

    img
      margin-top: 10px
      transform: translateY(7.4%)
      width: 100%
      height: auto

  .title-container-img
    margin-top: 0px
    img
      transform: translateY(7.4%)
      width: 95%
      height: auto

    @media screen and (max-width: map_get($grid-breakpoints, md))
      margin-top: 50px

    @media screen and (max-width: map_get($grid-breakpoints, sm))
      margin-top: 20px

  .free-acct-info
    padding: 12px 3rem
    border-radius: 30px
    background-color: #F5F0F6
    color: #343B86
    font-weight: bold
    font-family: $font-roboto
    border: transparent
    width: auto

    &:hover, &.router-link-active
      text-decoration: none
      transform: scale(1.025)
      transition: transform 0.3s

  .social-header
    width: 20px
    height: 20px

  .dropdown
    background-color: #FFFFFF
    overflow: hidden
    z-index: 1
    width: 120px
    position: absolute
    border: 1px solid rgba(0,0,0,.15)
    border-radius: 5px
    margin-top: 10px
    min-width: 140px

    div
      width: 100%
      font-size: 16px
      padding: .5rem 1.5rem
      clear: both
      font-weight: 400
      text-align: inherit
      white-space: nowrap
      background-color: transparent
      border-bottom: 1px solid #c5c5db

      a
        color: #272D58
        font-weight: bold

    div:last-child
      border-bottom: transparent

    div:hover
      background-color: #F2F2F7

  .icon-menu
    max-width: 35px
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      max-width: 25px
      margin-top: 3px

  .item-menu-icons
    a
      width: 35px
      height: 35px
      line-height: 0
      background: #343B86
      color: white
      border-radius: 50%
      display: flex
      justify-content: center
      align-items: center
      float: left
      margin: 5px
    img
      height: 25px
      width: 25px

  .col-SolSurvivorLogo
    @media screen and (max-width: map_get($grid-breakpoints, md))
      padding: 0 !important
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      margin-left: -15px !important

    img
      @media screen and (max-width: map_get($grid-breakpoints, md))
        margin: 0 !important
</style>
