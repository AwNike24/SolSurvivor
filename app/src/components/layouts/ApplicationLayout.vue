<template>
  <div>
    <router-view />
    <footer-section />
  </div>
</template>

<script>
import FooterSection from "@/components/landing/FooterSection.vue";

export default {
  name: "ApplicationLayout",
  components: {
    FooterSection,
  },
};
</script>

<style scoped lang="sass"></style>
