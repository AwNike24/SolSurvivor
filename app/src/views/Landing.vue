<template>
  <div>
    <header-section />
    <features-section />
    <video-section />
    <faq-section />
    <calculator-section />
  </div>
</template>
<script>
import HeaderSection from "@/components/landing/HeaderSection.vue";
import FeaturesSection from "@/components/landing/FeaturesSection.vue";
import VideoSection from "@/components/landing/VideoSection.vue";
import FaqSection from "@/components/landing/FaQSection.vue";
import CalculatorSection from "@/components/landing/CalculatorSection.vue";

export default {
  name: "Landing",
  components: {
    FeaturesSection,
    HeaderSection,
    VideoSection,
    FaqSection,
    CalculatorSection,
  },
};
</script>

<style lang="sass">
@import "@/assets/styles/main"
@import "@/assets/styles/fonts"

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
