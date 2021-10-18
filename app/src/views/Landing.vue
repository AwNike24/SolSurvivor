<template>
  <main>
    <!-- <recent-sign-up-modal v-if="$store.state.justSignedUp === true" /> !-->
    <section className="container-fluid header-section">
      <div className="container">
        <div className="row justify-content-center">
          <div
            className="col-md-12 col-lg-10 col-xl-8 title-container text-center"
          >
            <h1>4casters</h1>
            <h2>the betting exchange</h2>
            <div className="d-flex row justify-content-center">
              <router-link
                v-if="!isLoggedIn"
                to="/sign-up"
                className="free-acct-info mt-md-1 mt-2 mb-md-0 mb-5"
                tag="button"
              >
                JOIN NOW
              </router-link>
              <router-link
                v-else
                to="/smart-balance"
                className="free-acct-info mt-1"
                tag="button"
              >
                Smart Balance
              </router-link>
            </div>
            <img src="/images/light_blue/undraw_game_day_ucx9.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <features-section />
    <video-section />
    <Fa-Q-Section />
    <calculator-section />
  </main>
</template>

<script>
import FeaturesSection from "4caster-landing/src/components/FeaturesSection.vue";
import VideoSection from "4caster-landing/src/components/VideoSection.vue";
import FaQSection from "4caster-landing/src/components/FaQSection.vue";
import CalculatorSection from "4caster-landing/src/components/CalculatorSection.vue";
import { mapState } from "vuex";

export default {
  name: "HomePage",
  components: {
    FeaturesSection,
    VideoSection,
    FaQSection,
    CalculatorSection,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({
      isLoggedIn: (state) => state.isLoggedIn,
    }),
  },
};
</script>

<style scoped lang="sass">

@import "../assets/styles/variables"

.header-section
  background: #343B86


  h1
    font-weight: bold
    font-size: 5rem
    color: white
    margin-bottom: 0
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 3.75rem

  h2
    font-size: 2.25rem
    font-weight: lighter
    color: white
    margin-top: 0
    @media screen and (max-width: map_get($grid-breakpoints, sm))
      font-size: 1.25rem

  .title-container
    img
      margin-top: -25px
      transform: translateY(8.3%)
      width: 100%
      height: auto
      @media screen and (max-width: map_get($grid-breakpoints, sm))
        margin-top: 3px

.free-acct-info
  background-color: #F5F0F6
  border: 3px solid #969ccb
  color: $color-primary
  font-weight: bold

  &:hover, &.router-link-active
    text-decoration: none
    transform: scale(1.025)
    transition: transform 0.3s
</style>
