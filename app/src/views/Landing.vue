<template>
  <main>
    <!--<header-section />-->
    <!--<features-section />-->
    <video-section />
    <!--<faq-section />-->
    <!--<calculator-section />-->
    <footer-section />
  </main>
</template>

<script>
// import HeaderSection from "4caster-landing/src/components/HeaderSection";
// import FeaturesSection from "4caster-landing/src/components/FeaturesSection.vue";
import VideoSection from "4caster-landing/src/components/VideoSection.vue";
// import FaqSection from "4caster-landing/src/components/FaQSection.vue";
// import CalculatorSection from "4caster-landing/src/components/CalculatorSection.vue";
import FooterSection from "4caster-landing/src/components/FooterSection";

export default {
  name: "Landing",
  components: {
    FooterSection,
    // FeaturesSection,
    // HeaderSection,
    VideoSection,
    // FaqSection,
    // CalculatorSection,
  },
};
</script>

<style lang="sass">
@import "../assets/styles/main"
@import "../assets/styles/fonts"

.font
  font-size: 2.95rem !important
  color: #ff5454 !important
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    font-size: 0.65rem !important
  @media screen and (max-width: map_get($grid-breakpoints, md))
    font-size: 0.65rem !important
.mb-spacing
  margin-bottom: 110px
  @media screen and (max-width: map_get($grid-breakpoints, lg))
    margin-bottom: 36px
  @media screen and (max-width: map_get($grid-breakpoints, md))
    margin-bottom: 36px
</style>
