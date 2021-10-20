<template>
<<<<<<< HEAD
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
=======
  <header class="container-fluid" @click="active = false">
    <div class="row d-flex d-lg-none">
      <div class="col-3 offset-1 float-left p-0" @click.stop="toggle()">
        <img
          src="/icons/three-horizontal-lines.svg"
          class="d-block icon-menu"
        />
        <div v-if="active" class="dropdown">
          <div>
            <a class="dropdown-item" href="#how-it-works"> About </a>
          </div>
          <div>
            <a class="dropdown-item" href="#about"> Demo </a>
          </div>
          <div>
            <a class="dropdown-item" href="#save-money"> Roadmap </a>
          </div>
          <div>
            <a class="dropdown-item" href="#faquestions"> Faq </a>
          </div>
          <div class="item-menu-icons">
            <a
              href="https://twitter.com/solanasurvivor"
              target="_blank"
              rel="noopener"
            >
              <img
                class="social-header"
                src="/images/Twitter@2x.png"
                alt="SolSurvivorLogo"
              />
            </a>
            <a
              href="https://discord.gg/STMwQynkFJ"
              target="_blank"
              rel="noopener"
              class="social-link"
            >
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMnB0IiBoZWlnaHQ9IjIycHQiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIj48ZyBpZD0ic3VyZmFjZTUzODkyNTIiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxOC4zMTY0MDYgNC43MzgyODEgQyAxNi41NjI1IDMuMzI4MTI1IDEzLjc5Mjk2OSAzLjA4OTg0NCAxMy42NzU3ODEgMy4wODIwMzEgQyAxMy40OTIxODggMy4wNjY0MDYgMTMuMzE2NDA2IDMuMTY3OTY5IDEzLjIzODI4MSAzLjMzOTg0NCBDIDEzLjIzNDM3NSAzLjM1MTU2MiAxMy4xNzE4NzUgMy40ODgyODEgMTMuMTA1NDY5IDMuNzA3MDMxIEMgMTQuMjY1NjI1IDMuOTAyMzQ0IDE1LjY4NzUgNC4yOTY4NzUgMTYuOTcyNjU2IDUuMDkzNzUgQyAxNy4xNzk2ODggNS4yMjI2NTYgMTcuMjQ2MDk0IDUuNDkyMTg4IDE3LjExNzE4OCA1LjY5OTIxOSBDIDE3LjAzMTI1IDUuODM1OTM4IDE2Ljg5MDYyNSA1LjkxMDE1NiAxNi43NDIxODggNS45MTAxNTYgQyAxNi42NjQwNjIgNS45MTAxNTYgMTYuNTgyMDMxIDUuODg2NzE5IDE2LjUxMTcxOSA1Ljg0Mzc1IEMgMTQuMjk2ODc1IDQuNDY4NzUgMTEuNTMxMjUgNC4zOTg0MzggMTEgNC4zOTg0MzggQyAxMC40Njg3NSA0LjM5ODQzOCA3LjcwMzEyNSA0LjQ2ODc1IDUuNDg4MjgxIDUuODQzNzUgQyA1LjI4NTE1NiA1Ljk3MjY1NiA1LjAxMTcxOSA1LjkwNjI1IDQuODgyODEyIDUuNjk5MjE5IEMgNC43NTM5MDYgNS40OTIxODggNC44MjAzMTIgNS4yMjI2NTYgNS4wMjczNDQgNS4wOTM3NSBDIDYuMzEyNSA0LjI5Njg3NSA3LjczNDM3NSAzLjkwMjM0NCA4Ljg5NDUzMSAzLjcwNzAzMSBDIDguODI4MTI1IDMuNDg4MjgxIDguNzY1NjI1IDMuMzUxNTYyIDguNzYxNzE5IDMuMzM5ODQ0IEMgOC42ODM1OTQgMy4xNjc5NjkgOC41MTE3MTkgMy4wNjI1IDguMzI0MjE5IDMuMDgyMDMxIEMgOC4yMDcwMzEgMy4wODk4NDQgNS40Mzc1IDMuMzI4MTI1IDMuNjYwMTU2IDQuNzU3ODEyIEMgMi43MzQzNzUgNS42MTMyODEgMC44Nzg5MDYgMTAuNjI4OTA2IDAuODc4OTA2IDE0Ljk2MDkzOCBDIDAuODc4OTA2IDE1LjAzOTA2MiAwLjkwMjM0NCAxNS4xMDkzNzUgMC45Mzc1IDE1LjE3OTY4OCBDIDIuMjE4NzUgMTcuNDI1NzgxIDUuNzA3MDMxIDE4LjAxNTYyNSA2LjUwMzkwNiAxOC4wMzkwNjIgQyA2LjUwNzgxMiAxOC4wMzkwNjIgNi41MTE3MTkgMTguMDM5MDYyIDYuNTE1NjI1IDE4LjAzOTA2MiBDIDYuNjYwMTU2IDE4LjAzOTA2MiA2Ljc4OTA2MiAxNy45NzI2NTYgNi44NzUgMTcuODU5Mzc1IEwgNy42NzU3ODEgMTYuNzUzOTA2IEMgNS41MDc4MTIgMTYuMTkxNDA2IDQuMzk4NDM4IDE1LjIzODI4MSA0LjMzNTkzOCAxNS4xODM1OTQgQyA0LjE1MjM0NCAxNS4wMjM0MzggNC4xMzY3MTkgMTQuNzQ2MDk0IDQuMjk2ODc1IDE0LjU2MjUgQyA0LjQ1NzAzMSAxNC4zNzg5MDYgNC43MzQzNzUgMTQuMzYzMjgxIDQuOTE3OTY5IDE0LjUyMzQzOCBDIDQuOTQxNDA2IDE0LjU0Njg3NSA2Ljk4NDM3NSAxNi4yODEyNSAxMSAxNi4yODEyNSBDIDE1LjAyMzQzOCAxNi4yODEyNSAxNy4wNjI1IDE0LjUzOTA2MiAxNy4wODU5MzggMTQuNTIzNDM4IEMgMTcuMjY1NjI1IDE0LjM2NzE4OCAxNy41NDI5NjkgMTQuMzc4OTA2IDE3LjcwMzEyNSAxNC41NjY0MDYgQyAxNy44NjMyODEgMTQuNzQ2MDk0IDE3Ljg0NzY1NiAxNS4wMjM0MzggMTcuNjY0MDYyIDE1LjE4MzU5NCBDIDE3LjYwMTU2MiAxNS4yMzgyODEgMTYuNDkyMTg4IDE2LjE5MTQwNiAxNC4zMjQyMTkgMTYuNzUzOTA2IEwgMTUuMTI1IDE3Ljg1OTM3NSBDIDE1LjIxMDkzOCAxNy45NzI2NTYgMTUuMzM5ODQ0IDE4LjAzOTA2MiAxNS40ODQzNzUgMTguMDM5MDYyIEMgMTUuNDg4MjgxIDE4LjAzOTA2MiAxNS40OTIxODggMTguMDM5MDYyIDE1LjQ5NjA5NCAxOC4wMzkwNjIgQyAxNi4yOTI5NjkgMTguMDE1NjI1IDE5Ljc4MTI1IDE3LjQyNTc4MSAyMS4wNjI1IDE1LjE3OTY4OCBDIDIxLjA5NzY1NiAxNS4xMDkzNzUgMjEuMTIxMDk0IDE1LjAzOTA2MiAyMS4xMjEwOTQgMTQuOTYwOTM4IEMgMjEuMTIxMDk0IDEwLjYyODkwNiAxOS4yNjU2MjUgNS42MTMyODEgMTguMzE2NDA2IDQuNzM4MjgxIFogTSA4LjE0MDYyNSAxMy4xOTkyMTkgQyA3LjI4OTA2MiAxMy4xOTkyMTkgNi42MDE1NjIgMTIuNDE0MDYyIDYuNjAxNTYyIDExLjQ0MTQwNiBDIDYuNjAxNTYyIDEwLjQ2ODc1IDcuMjg5MDYyIDkuNjc5Njg4IDguMTQwNjI1IDkuNjc5Njg4IEMgOC45OTIxODggOS42Nzk2ODggOS42Nzk2ODggMTAuNDY4NzUgOS42Nzk2ODggMTEuNDQxNDA2IEMgOS42Nzk2ODggMTIuNDE0MDYyIDguOTkyMTg4IDEzLjE5OTIxOSA4LjE0MDYyNSAxMy4xOTkyMTkgWiBNIDEzLjg1OTM3NSAxMy4xOTkyMTkgQyAxMy4wMDc4MTIgMTMuMTk5MjE5IDEyLjMyMDMxMiAxMi40MTQwNjIgMTIuMzIwMzEyIDExLjQ0MTQwNiBDIDEyLjMyMDMxMiAxMC40Njg3NSAxMy4wMDc4MTIgOS42Nzk2ODggMTMuODU5Mzc1IDkuNjc5Njg4IEMgMTQuNzEwOTM4IDkuNjc5Njg4IDE1LjM5ODQzOCAxMC40Njg3NSAxNS4zOTg0MzggMTEuNDQxNDA2IEMgMTUuMzk4NDM4IDEyLjQxNDA2MiAxNC43MTA5MzggMTMuMTk5MjE5IDEzLjg1OTM3NSAxMy4xOTkyMTkgWiBNIDEzLjg1OTM3NSAxMy4xOTkyMTkgIi8+PC9nPjwvc3ZnPg=="
                alt="Discord"
              />
            </a>
          </div>
>>>>>>> fix scrollto
        </div>
      </div>
      <div class="col col-SolSurvivorLogo">
        <img
          src="/images/solsurvivor.png"
          alt="SolSurvivorLogo"
          class="mx-md-auto text-sm-center d-block"
        />
      </div>
    </div>
    <div class="row d-none d-lg-flex align-items-center">
      <div class="col-6 justify-content-center justify-content-lg-start">
        <img src="/images/solsurvivor.png" alt="SolSurvivorLogo" />
      </div>
      <nav class="col-lg-6 col-12">
        <div class="row">
          <div class="col-2 text-center">
            <a href="#how-it-works">About</a>
          </div>
          <div class="col-2 text-center">
            <a href="#about">Demo</a>
          </div>
          <div class="col-2 text-center">
            <a href="#save-money">Roadmap</a>
          </div>
          <div class="col-2 text-center">
            <a href="#faquestions">Faq</a>
          </div>
          <div class="col-2 text-center">
            <a
              href="https://twitter.com/solanasurvivor"
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
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
<<<<<<< HEAD
=======
  data() {
    return {
      active: false,
    };
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
>>>>>>> fix scrollto
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"
<<<<<<< HEAD
=======

header
  background-color: $color-primary
  padding-top: 20px
  color: white
  min-height: 60px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    padding-top: 40px
  @media screen and (max-width: map_get($grid-breakpoints, sm))
    background-size: 100% 100%
    padding-top: 20px

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
    margin-top: 100px
    img
      margin-top: 10px
      transform: translateY(7.4%)
      width: 100%
      height: auto

    @media screen and (max-width: map_get($grid-breakpoints, md))
      margin-top: 70px

  .title-container-img
    margin-top: 0px
    img
      transform: translateY(7.4%)
      width: 100%
      height: auto

    @media screen and (max-width: map_get($grid-breakpoints, md))
      margin-top: 50px

    @media screen and (max-width: map_get($grid-breakpoints, sm))
      margin-top: 20px

  .free-acct-info
    padding: 12px 2rem
    border-radius: 30px
    background-color: #F5F0F6
    color: #343B86
    font-weight: bold
    font-family: $font-roboto
    border: transparent

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

>>>>>>> fix scrollto
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
<<<<<<< HEAD
  background: transparent linear-gradient(267deg, rgba(52, 59, 134, 1) 0%, rgba(1, 8, 70, 1) 100%) 0% 0% no-repeat padding-box
  z-index: 5
  position: relative
  // background-repeat: no-repeat
  // background-position: calc(100% + 59px) 100%
  // background-size: 480px auto
=======
  background-color: $color-primary
  z-index: 5
  position: relative
  background-repeat: no-repeat
  background-position: calc(100% + 59px) 100%
  background-size: 480px auto
>>>>>>> fix scrollto

  @media screen and (max-width: map-get($grid-breakpoints, md))
    background-image: none

<<<<<<< HEAD
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
=======
    .header
      margin: 0 auto
      padding: 20px 0
      min-height: 70px

      @media screen and (max-width: map-get($grid-breakpoints, md))
        padding: .5rem 0
        min-height: 49px

        &-logo
          height: 85px
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
>>>>>>> fix scrollto
</style>
