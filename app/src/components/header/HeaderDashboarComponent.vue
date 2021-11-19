<template>
  <header class="container-fluid header-container">
    <div class="header">
      <div class="container-fluid">
        <div class="row justify-content-between align-items-center">
          <router-link to="/" class="header-logo-link col-8">
            <img
              class="header-logo"
              src="../../../public/icons/solsulvivor/logo-solsurvivor.svg"
              alt="4castersports Logo"
            />
          </router-link>
          <!-- <account-info /> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
// import AccountInfo from '@/components/header/AccountInfo.vue';
// import SportsNavigation from '@/components/header/SportsNavigation.vue';

export default {
  name: "HeaderDashboarComponent",
  components: {},
};
</script>

<style lang="sass" scoped>
@import "../../assets/styles/variables"

.header-container
  background: transparent linear-gradient(267deg, rgba(52, 59, 134, 1) 0%, rgba(1, 8, 70, 1) 100%) 0% 0% no-repeat padding-box
  z-index: 5
  position: relative

  .header
    margin: 0 auto
    padding: 20px 0
    min-height: 70px

    @media screen and (max-width: map-get($grid-breakpoints, md))
      padding: 16px 0
      min-height: 49px

    &-logo-link
      @media screen and (max-width: map-get($grid-breakpoints, lg))
        margin-left: 10%
      @media screen and (max-width: map-get($grid-breakpoints, lg))
        margin-left: 13%

    &-logo
      height: 24px
      width: auto
      @media screen and (max-width: map-get($grid-breakpoints, md))
        height: 23px
</style>
