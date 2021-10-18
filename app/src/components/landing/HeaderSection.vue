<template>
  <header>
    <div class="container">
      <div class="row align-items-center">
        <div
          class="
            col-6
            d-none d-lg-flex
            justify-content-center justify-content-lg-start
          "
        >
          <img src="/images/solsurvivor.png" alt="SolSurvivorLogo" />
        </div>
        <nav class="col-lg-6 col-12">
          <div class="row">
            <div class="col-2 text-center">
              <a v-scroll-to="'#how-it-works'" href="#how-it-works">About</a>
            </div>
            <div class="col-2 text-center">
              <a v-scroll-to="'#about'" href="#about">Demo</a>
            </div>
            <div class="col-2 text-center">
              <a v-scroll-to="'#save-money'" href="#save-money">Roadmap</a>
            </div>
            <div class="col-2 text-center">
              <a v-scroll-to="'#save-money'" href="#save-money">Faq</a>
            </div>
            <div class="col-2 text-center">
              <a
                href="https://twitter.com/solbettor"
                target="_blank"
                rel="noopener"
              >
                <img
                  class="social-header"
                  src="/images/Icon-twitter@2x.png"
                  alt="SolSurvivorLogo"
                />
              </a>
            </div>
            <div class="col-2 text-center">
              <a
                href="https://discord.gg/STMwQynkFJ"
                target="_blank"
                rel="noopener"
              >
                <img
                  class="social-header"
                  src="/images/Icon-discord@2x.png"
                  alt="SolSurvivorLogo"
                />
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6 title-container">
          <h1 class="text-center py-0 my-0 text-lg-left">NFT Survivor Pools</h1>
          <h2 class="text-center py-0 my-0 text-lg-left font-weight-light">
            New Traits Each Week You Survive
          </h2>
          <div class="d-flex row ml-1">
            <button
              v-scroll-to="'#how-it-works'"
              href="#how-it-works"
              class="
                free-acct-info
                mt-md-5 mt-4
                d-block d-lg-inline
                mx-auto mx-lg-0
              "
            >
              Demo NFL Survivor Pool
            </button>
          </div>
        </div>
        <div class="col-12 col-lg-6 title-container-img text-center">
          <img src="/images/Imagen-slider@2x.png" />
        </div>
      </div>
    </div>
    <div class="clearfix" />
  </header>
</template>
<script>
export default {
  name: "HeaderSection",
};
</script>
<style lang="sass">

@import "~bootstrap/scss/functions"
@import "~bootstrap/scss/variables"

header
  background-image: url('/images/background@2x.png')
  background-repeat: no-repeat
  background-size: 100% 100%
  padding-top: 90px
  color: white
  min-height: 703px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    padding-top: 70px
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    padding-top: 20px

  img
    width: 300px
    height: auto
    @media screen and (max-width: map_get($grid-breakpoints, md))
      width: 250px
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      width: 300px

  nav a
    color: white
    font-size: 0.8rem
    font-family: 'Poppins-regular'
    display: inline-block
    &:not(:last-child)
      margin-right: 60px
    &:hover
      text-decoration: none
      color: white

  h1
    font-weight: bold
    font-family: 'Roboto Slab'
    font-size: 3.5rem
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 3rem

  h2
    font-size: 2rem
    font-family: 'Roboto Slab'
    font-weight: lighter
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 1.5rem

  h4
    font-size: 1rem
    font-family: 'Roboto'
    font-weight: normal

  .title-container
    margin-top: 100px
    img
      margin-top: 10px
      transform: translateY(7.4%)
      width: 100%
      height: auto

    @media screen and (max-width: map_get($grid-breakpoints, md))
      margin-top: 100px
  .title-container-img
    margin-top: 0px
    img
      transform: translateY(7.4%)
      width: 100%
      height: auto

    @media screen and (max-width: map_get($grid-breakpoints, md))
      margin-top: 100px

  .free-acct-info
    padding: 12px 2rem
    border-radius: 30px
    background-color: #F5F0F6
    color: #343B86
    font-weight: bold

    &:hover, &.router-link-active
      text-decoration: none
      transform: scale(1.025)
      transition: transform 0.3s

  .social-header
    width: 20px
    height: 20px
</style>
