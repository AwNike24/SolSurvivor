<template>
  <footer class="container-fluid py-4">
    <div class="container">
      <div class="row align-items-center flex-column-reverse flex-md-row">
        <div class="col-12 col-md-4 text-center text-md-left mt-4 mt-md-0">
          <a href="mailto:info@4castersports.com" class="email-link"
            >info@4castersports.com</a
          >
          <br />
          <!-- <span> <a href="tel:+58 424-9468773">+58 424-9468773</a> </span>
          <br> !-->
          <span>© FOURCASTER LIMITADA, 2021 </span>
        </div>
        <div
          class="
            col-12 col-md-4
            d-flex
            justify-content-center
          "
        >
          <img src="/icons/solsulvivor/solsurvivor-color.svg" />
        </div>
        <div
          class="
            col-12 col-md-4
            d-flex
            justify-content-center justify-content-md-end
          "
        >
          <a href="#" target="_blank" rel="noopener" class="mr-3 social-link">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMnB0IiBoZWlnaHQ9IjIycHQiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIj48ZyBpZD0ic3VyZmFjZTUzODkyNTIiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxOC4zMTY0MDYgNC43MzgyODEgQyAxNi41NjI1IDMuMzI4MTI1IDEzLjc5Mjk2OSAzLjA4OTg0NCAxMy42NzU3ODEgMy4wODIwMzEgQyAxMy40OTIxODggMy4wNjY0MDYgMTMuMzE2NDA2IDMuMTY3OTY5IDEzLjIzODI4MSAzLjMzOTg0NCBDIDEzLjIzNDM3NSAzLjM1MTU2MiAxMy4xNzE4NzUgMy40ODgyODEgMTMuMTA1NDY5IDMuNzA3MDMxIEMgMTQuMjY1NjI1IDMuOTAyMzQ0IDE1LjY4NzUgNC4yOTY4NzUgMTYuOTcyNjU2IDUuMDkzNzUgQyAxNy4xNzk2ODggNS4yMjI2NTYgMTcuMjQ2MDk0IDUuNDkyMTg4IDE3LjExNzE4OCA1LjY5OTIxOSBDIDE3LjAzMTI1IDUuODM1OTM4IDE2Ljg5MDYyNSA1LjkxMDE1NiAxNi43NDIxODggNS45MTAxNTYgQyAxNi42NjQwNjIgNS45MTAxNTYgMTYuNTgyMDMxIDUuODg2NzE5IDE2LjUxMTcxOSA1Ljg0Mzc1IEMgMTQuMjk2ODc1IDQuNDY4NzUgMTEuNTMxMjUgNC4zOTg0MzggMTEgNC4zOTg0MzggQyAxMC40Njg3NSA0LjM5ODQzOCA3LjcwMzEyNSA0LjQ2ODc1IDUuNDg4MjgxIDUuODQzNzUgQyA1LjI4NTE1NiA1Ljk3MjY1NiA1LjAxMTcxOSA1LjkwNjI1IDQuODgyODEyIDUuNjk5MjE5IEMgNC43NTM5MDYgNS40OTIxODggNC44MjAzMTIgNS4yMjI2NTYgNS4wMjczNDQgNS4wOTM3NSBDIDYuMzEyNSA0LjI5Njg3NSA3LjczNDM3NSAzLjkwMjM0NCA4Ljg5NDUzMSAzLjcwNzAzMSBDIDguODI4MTI1IDMuNDg4MjgxIDguNzY1NjI1IDMuMzUxNTYyIDguNzYxNzE5IDMuMzM5ODQ0IEMgOC42ODM1OTQgMy4xNjc5NjkgOC41MTE3MTkgMy4wNjI1IDguMzI0MjE5IDMuMDgyMDMxIEMgOC4yMDcwMzEgMy4wODk4NDQgNS40Mzc1IDMuMzI4MTI1IDMuNjYwMTU2IDQuNzU3ODEyIEMgMi43MzQzNzUgNS42MTMyODEgMC44Nzg5MDYgMTAuNjI4OTA2IDAuODc4OTA2IDE0Ljk2MDkzOCBDIDAuODc4OTA2IDE1LjAzOTA2MiAwLjkwMjM0NCAxNS4xMDkzNzUgMC45Mzc1IDE1LjE3OTY4OCBDIDIuMjE4NzUgMTcuNDI1NzgxIDUuNzA3MDMxIDE4LjAxNTYyNSA2LjUwMzkwNiAxOC4wMzkwNjIgQyA2LjUwNzgxMiAxOC4wMzkwNjIgNi41MTE3MTkgMTguMDM5MDYyIDYuNTE1NjI1IDE4LjAzOTA2MiBDIDYuNjYwMTU2IDE4LjAzOTA2MiA2Ljc4OTA2MiAxNy45NzI2NTYgNi44NzUgMTcuODU5Mzc1IEwgNy42NzU3ODEgMTYuNzUzOTA2IEMgNS41MDc4MTIgMTYuMTkxNDA2IDQuMzk4NDM4IDE1LjIzODI4MSA0LjMzNTkzOCAxNS4xODM1OTQgQyA0LjE1MjM0NCAxNS4wMjM0MzggNC4xMzY3MTkgMTQuNzQ2MDk0IDQuMjk2ODc1IDE0LjU2MjUgQyA0LjQ1NzAzMSAxNC4zNzg5MDYgNC43MzQzNzUgMTQuMzYzMjgxIDQuOTE3OTY5IDE0LjUyMzQzOCBDIDQuOTQxNDA2IDE0LjU0Njg3NSA2Ljk4NDM3NSAxNi4yODEyNSAxMSAxNi4yODEyNSBDIDE1LjAyMzQzOCAxNi4yODEyNSAxNy4wNjI1IDE0LjUzOTA2MiAxNy4wODU5MzggMTQuNTIzNDM4IEMgMTcuMjY1NjI1IDE0LjM2NzE4OCAxNy41NDI5NjkgMTQuMzc4OTA2IDE3LjcwMzEyNSAxNC41NjY0MDYgQyAxNy44NjMyODEgMTQuNzQ2MDk0IDE3Ljg0NzY1NiAxNS4wMjM0MzggMTcuNjY0MDYyIDE1LjE4MzU5NCBDIDE3LjYwMTU2MiAxNS4yMzgyODEgMTYuNDkyMTg4IDE2LjE5MTQwNiAxNC4zMjQyMTkgMTYuNzUzOTA2IEwgMTUuMTI1IDE3Ljg1OTM3NSBDIDE1LjIxMDkzOCAxNy45NzI2NTYgMTUuMzM5ODQ0IDE4LjAzOTA2MiAxNS40ODQzNzUgMTguMDM5MDYyIEMgMTUuNDg4MjgxIDE4LjAzOTA2MiAxNS40OTIxODggMTguMDM5MDYyIDE1LjQ5NjA5NCAxOC4wMzkwNjIgQyAxNi4yOTI5NjkgMTguMDE1NjI1IDE5Ljc4MTI1IDE3LjQyNTc4MSAyMS4wNjI1IDE1LjE3OTY4OCBDIDIxLjA5NzY1NiAxNS4xMDkzNzUgMjEuMTIxMDk0IDE1LjAzOTA2MiAyMS4xMjEwOTQgMTQuOTYwOTM4IEMgMjEuMTIxMDk0IDEwLjYyODkwNiAxOS4yNjU2MjUgNS42MTMyODEgMTguMzE2NDA2IDQuNzM4MjgxIFogTSA4LjE0MDYyNSAxMy4xOTkyMTkgQyA3LjI4OTA2MiAxMy4xOTkyMTkgNi42MDE1NjIgMTIuNDE0MDYyIDYuNjAxNTYyIDExLjQ0MTQwNiBDIDYuNjAxNTYyIDEwLjQ2ODc1IDcuMjg5MDYyIDkuNjc5Njg4IDguMTQwNjI1IDkuNjc5Njg4IEMgOC45OTIxODggOS42Nzk2ODggOS42Nzk2ODggMTAuNDY4NzUgOS42Nzk2ODggMTEuNDQxNDA2IEMgOS42Nzk2ODggMTIuNDE0MDYyIDguOTkyMTg4IDEzLjE5OTIxOSA4LjE0MDYyNSAxMy4xOTkyMTkgWiBNIDEzLjg1OTM3NSAxMy4xOTkyMTkgQyAxMy4wMDc4MTIgMTMuMTk5MjE5IDEyLjMyMDMxMiAxMi40MTQwNjIgMTIuMzIwMzEyIDExLjQ0MTQwNiBDIDEyLjMyMDMxMiAxMC40Njg3NSAxMy4wMDc4MTIgOS42Nzk2ODggMTMuODU5Mzc1IDkuNjc5Njg4IEMgMTQuNzEwOTM4IDkuNjc5Njg4IDE1LjM5ODQzOCAxMC40Njg3NSAxNS4zOTg0MzggMTEuNDQxNDA2IEMgMTUuMzk4NDM4IDEyLjQxNDA2MiAxNC43MTA5MzggMTMuMTk5MjE5IDEzLjg1OTM3NSAxMy4xOTkyMTkgWiBNIDEzLjg1OTM3NSAxMy4xOTkyMTkgIi8+PC9nPjwvc3ZnPg=="
              alt="Discord"
            />
          </a>
          <a href="#" target="_blank" rel="noopener" class="mr-3 social-link">
            <img
              src="/icons/solsulvivor/Twitter.svg"
              alt="Twitter"
            />
          </a>

          <a href="#" target="_blank" rel="noopener" class="mr-3 social-link">
            <img
              src="/icons/solsulvivor/Youtube.svg"
              alt="Youtube"
            />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "FooterComponent",
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
  methods: {
    updateLanguageType(language) {
      this.languageType = language;
      this.$root.$i18n.locale = language.key;
    },
  },
};
</script>
<style scoped lang="sass">
@import "@/assets/styles/variables"

.footer-link
  display: inline-block
  &:not(:last-child)
    margin-right: 1rem

footer
  border-top: 23px solid $color-primary
  color: $color-primary

  a.email-link
    color: inherit
    font-weight: bold

  a.social-link
    width: 44px
    height: 44px
    display: flex
    justify-content: center
    text-align: center
    align-items: center
    line-height: 0
    background: $color-primary
    color: white
    border-radius: 50%
    &:not(:last-child)
      margin-right: 1rem
</style>
