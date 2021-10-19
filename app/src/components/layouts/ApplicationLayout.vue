<template>
  <div>
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
  name: "ApplicationLayout",
  components: {
    FooterComponent,
  },
};
</script>

<style scoped lang="sass"></style>
