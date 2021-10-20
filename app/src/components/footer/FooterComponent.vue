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
            justify-content-center justify-content-md-end
          "
        >
          <img src="../../../public/icons/solsulvivor/solsurvivor-color.svg" />
        </div>
        <div
          class="
            col-12 col-md-4
            d-flex
            justify-content-center justify-content-md-end
          "
        >
          <a href="#" target="_blank" rel="noopener" class="mr-3">
            <img
              src="../../../public/icons/solsulvivor/Facebook.svg"
              alt="Facebook"
            />
          </a>
          <a href="#" target="_blank" rel="noopener" class="mr-3">
            <img
              src="../../../public/icons/solsulvivor/Twitter.svg"
              alt="Twitter"
            />
          </a>

          <a href="#" target="_blank" rel="noopener" class="mr-3">
            <img
              src="../../../public/icons/solsulvivor/Youtube.svg"
              alt="Youtube"
            />
          </a>
          <a href="#" target="_blank" rel="noopener" class="mr-3">
            <img
              src="../../../public/icons/solsulvivor/Instagram.svg"
              alt="Instagram"
            />
          </a>
          <a href="#" target="_blank" rel="noopener" class="mr-3">
            <img src="../../../public/icons/solsulvivor/M.svg" alt="M" />
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
@import "../../assets/styles/variables"

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
