<template>
  <footer class="container-fluid py-5">
    <div class="container">
      <div class="mb-4 text-center text-md-left"></div>
      <div class="row align-items-center flex-column-reverse flex-md-row">
        <div class="col-12 col-md-6 text-center text-md-left mt-4 mt-md-0">
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
            col-12 col-md-6
            d-flex
            justify-content-center justify-content-md-end
          "
        >
          <a
            href="https://twitter.com/4castersbet"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjEiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjUyNiAyLjg0NkE0LjUxIDQuNTEgMCAwIDAgMjAuNDIuMzMzYTguMzU1IDguMzU1IDAgMCAxLTIuNzM2IDEuMTAyQTQuMTk0IDQuMTk0IDAgMCAwIDE0LjUzOSAwYy0yLjM4IDAtNC4zMDcgMi4wMzUtNC4zMDcgNC41NDQgMCAuMzU2LjAzNi43MDMuMTEgMS4wMzQtMy41OC0uMTktNi43NTQtMS45OTYtOC44OC00Ljc0N2E0LjcyNCA0LjcyNCAwIDAgMC0uNTgzIDIuMjg1YzAgMS41NzYuNzYgMi45NjcgMS45MTcgMy43ODNhNC4xNTQgNC4xNTQgMCAwIDEtMS45NTMtLjU2OHYuMDU2YzAgMi4yMDIgMS40ODQgNC4wNCAzLjQ1OCA0LjQ1NWE0LjAxIDQuMDEgMCAwIDEtMS4xMzcuMTZjLS4yNzcgMC0uNTQ4LS4wMjctLjgxLS4wOC41NDggMS44MDQgMi4xMzkgMy4xMiA0LjAyNSAzLjE1NS0xLjQ3NiAxLjIxOS0zLjMzMyAxLjk0NC01LjM1MSAxLjk0NC0uMzQ4IDAtLjY5MS0uMDItMS4wMjgtLjA2MkExMS43NDcgMTEuNzQ3IDAgMCAwIDYuNjA0IDE4YzcuOTI2IDAgMTIuMjU3LTYuOTI0IDEyLjI1Ny0xMi45MjkgMC0uMTk3LS4wMDItLjM5NC0uMDEtLjU4N0E5LjAwNiA5LjAwNiAwIDAgMCAyMSAyLjEzYTguMjU3IDguMjU3IDAgMCAxLTIuNDc0LjcxNXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
              alt="Twitter"
            />
          </a>
          <a
            v-if="isLoggedIn"
            href="https://t.me/joinchat/VDoTLW06tiqChDUj"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyMnB0IiBoZWlnaHQ9IjIycHQiIHZpZXdCb3g9IjAgMCAyMiAyMiIgdmVyc2lvbj0iMS4xIj48ZyBpZD0ic3VyZmFjZTU0ODQyMjQiPjxwYXRoIHN0eWxlPSIgc3Ryb2tlOm5vbmU7ZmlsbC1ydWxlOm5vbnplcm87ZmlsbDpyZ2IoMTAwJSwxMDAlLDEwMCUpO2ZpbGwtb3BhY2l0eToxOyIgZD0iTSAxOC40NDUzMTIgMi45MjE4NzUgQyAxOC4yMDcwMzEgMi45MzM1OTQgMTcuOTg0Mzc1IDMgMTcuNzg5MDYyIDMuMDgyMDMxIEMgMTcuNjA1NDY5IDMuMTU2MjUgMTYuOTA2MjUgMy40NTMxMjUgMTUuODA0Njg4IDMuOTI1NzgxIEMgMTQuNzAzMTI1IDQuNDAyMzQ0IDEzLjI0MjE4OCA1LjAyNzM0NCAxMS42ODM1OTQgNS42OTkyMTkgQyA4LjU2NjQwNiA3LjAzOTA2MiA1LjA2MjUgOC41NDY4NzUgMy4yNjk1MzEgOS4zMjAzMTIgQyAzLjE5OTIxOSA5LjM0NzY1NiAyLjk2NDg0NCA5LjQyMTg3NSAyLjcxNDg0NCA5LjYxNzE4OCBDIDIuNDY0ODQ0IDkuODEyNSAyLjE5OTIxOSAxMC4yMTg3NSAyLjE5OTIxOSAxMC42Njc5NjkgQyAyLjE5OTIxOSAxMS4wMzEyNSAyLjM3NSAxMS4zOTA2MjUgMi41ODk4NDQgMTEuNjA1NDY5IEMgMi44MDg1OTQgMTEuODI0MjE5IDMuMDM5MDYyIDExLjkyOTY4OCAzLjIzODI4MSAxMi4wMDc4MTIgQyAzLjk1MzEyNSAxMi4zMDA3ODEgNi4xNzU3ODEgMTMuMjEwOTM4IDYuNTkzNzUgMTMuMzgyODEyIEMgNi43NDIxODggMTMuODM1OTM4IDcuNTQ2ODc1IDE2LjI5Njg3NSA3LjczNDM3NSAxNi44OTg0MzggQyA3Ljg1NTQ2OSAxNy4yOTY4NzUgNy45NzI2NTYgMTcuNTQ2ODc1IDguMTI1IDE3Ljc0NjA5NCBDIDguMjAzMTI1IDE3Ljg0Mzc1IDguMjkyOTY5IDE3LjkyOTY4OCA4LjM5ODQzOCAxOCBDIDguNDQxNDA2IDE4LjAyMzQzOCA4LjQ4ODI4MSAxOC4wNDY4NzUgOC41MzUxNTYgMTguMDY2NDA2IEwgOC41MzkwNjIgMTguMDY2NDA2IEMgOC41NTA3ODEgMTguMDcwMzEyIDguNTU4NTk0IDE4LjA3ODEyNSA4LjU3MDMxMiAxOC4wODIwMzEgQyA4LjU4OTg0NCAxOC4wODk4NDQgOC42MDU0NjkgMTguMDg5ODQ0IDguNjMyODEyIDE4LjA5NzY1NiBDIDguNzQ2MDk0IDE4LjEzMjgxMiA4Ljg1OTM3NSAxOC4xNTYyNSA4Ljk1NzAzMSAxOC4xNTYyNSBDIDkuMzg2NzE5IDE4LjE1NjI1IDkuNjUyMzQ0IDE3LjkxNzk2OSA5LjY1MjM0NCAxNy45MTc5NjkgTCA5LjY2Nzk2OSAxNy45MDYyNSBMIDExLjg3NSAxNiBMIDE0LjU1MDc4MSAxOC41MzEyNSBDIDE0LjU4OTg0NCAxOC41ODU5MzggMTQuOTQxNDA2IDE5LjA2NjQwNiAxNS43MTQ4NDQgMTkuMDY2NDA2IEMgMTYuMTc1NzgxIDE5LjA2NjQwNiAxNi41MzkwNjIgMTguODM1OTM4IDE2Ljc3MzQzOCAxOC41ODk4NDQgQyAxNy4wMDc4MTIgMTguMzQzNzUgMTcuMTU2MjUgMTguMDg1OTM4IDE3LjIxODc1IDE3Ljc2MTcxOSBMIDE3LjIxODc1IDE3Ljc1NzgxMiBDIDE3LjI3NzM0NCAxNy40NTMxMjUgMTkuNzQyMTg4IDQuNzg1MTU2IDE5Ljc0MjE4OCA0Ljc4NTE1NiBMIDE5LjczODI4MSA0LjgwNDY4OCBDIDE5LjgxMjUgNC40NzI2NTYgMTkuODI4MTI1IDQuMTY3OTY5IDE5Ljc1IDMuODYzMjgxIEMgMTkuNjcxODc1IDMuNTYyNSAxOS40NjA5MzggMy4yNjk1MzEgMTkuMTk5MjE5IDMuMTEzMjgxIEMgMTguOTQxNDA2IDIuOTYwOTM4IDE4LjY4MzU5NCAyLjkxMDE1NiAxOC40NDUzMTIgMi45MjE4NzUgWiBNIDE4LjMwODU5NCA0LjQ1MzEyNSBDIDE4LjMwNDY4OCA0LjQ3NjU2MiAxOC4zMTI1IDQuNDY0ODQ0IDE4LjMwNDY4OCA0LjQ5MjE4OCBMIDE4LjMwNDY4OCA0LjUwNzgxMiBDIDE4LjMwNDY4OCA0LjUwNzgxMiAxNS44NjcxODggMTcuMDExNzE5IDE1Ljc3NzM0NCAxNy40ODgyODEgQyAxNS43ODUxNTYgMTcuNDQ5MjE5IDE1Ljc1MzkwNiAxNy41MjM0MzggMTUuNzIyNjU2IDE3LjU2NjQwNiBDIDE1LjY3OTY4OCAxNy41MzUxNTYgMTUuNTg5ODQ0IDE3LjQ5NjA5NCAxNS41ODk4NDQgMTcuNDk2MDk0IEwgMTUuNTc0MjE5IDE3LjQ4MDQ2OSBMIDExLjkxNzk2OSAxNC4wMjM0MzggTCA5LjMzMjAzMSAxNi4yNTc4MTIgTCAxMC4xMDE1NjIgMTMuMTc1NzgxIEMgMTAuMTAxNTYyIDEzLjE3NTc4MSAxNC45MTAxNTYgOC4xOTkyMTkgMTUuMTk5MjE5IDcuOTEwMTU2IEMgMTUuNDMzNTk0IDcuNjc5Njg4IDE1LjQ4MDQ2OSA3LjU5NzY1NiAxNS40ODA0NjkgNy41MTk1MzEgQyAxNS40ODA0NjkgNy40MTAxNTYgMTUuNDI1NzgxIDcuMzMyMDMxIDE1LjMwMDc4MSA3LjMzMjAzMSBDIDE1LjE4NzUgNy4zMzIwMzEgMTUuMDM5MDYyIDcuNDQxNDA2IDE0Ljk1NzAzMSA3LjQ5MjE4OCBDIDEzLjkwNjI1IDguMTY0MDYyIDkuMjkyOTY5IDEwLjg1MTU2MiA3LjIyMjY1NiAxMi4wNTQ2ODggQyA2Ljg5NDUzMSAxMS45MjE4NzUgNC42MTMyODEgMTAuOTg4MjgxIDMuODM5ODQ0IDEwLjY3MTg3NSBDIDMuODQzNzUgMTAuNjY3OTY5IDMuODQzNzUgMTAuNjY3OTY5IDMuODQ3NjU2IDEwLjY2Nzk2OSBDIDUuNjQ0NTMxIDkuODk0NTMxIDkuMTQ0NTMxIDguMzg2NzE5IDEyLjI2MTcxOSA3LjA0Njg3NSBDIDEzLjgyMDMxMiA2LjM3NSAxNS4yODEyNSA1Ljc0NjA5NCAxNi4zODI4MTIgNS4yNzM0MzggQyAxNy40Njg3NSA0LjgwODU5NCAxOC4yMjI2NTYgNC40ODgyODEgMTguMzA4NTk0IDQuNDUzMTI1IFogTSAxOC4zMDg1OTQgNC40NTMxMjUgIi8+PC9nPjwvc3ZnPg=="
              alt="Telegram"
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
  methods: {},
};
</script>
<style lang="sass">
@import "../../assets/styles/variables"

.footer-link
  display: inline-block
  &:not(:last-child)
    margin-right: 1rem

footer
  border-top: 2px solid #969CCB
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
