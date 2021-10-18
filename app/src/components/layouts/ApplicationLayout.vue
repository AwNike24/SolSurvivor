<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
  name: "ApplicationLayout",
  components: {
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style scoped lang="sass"></style>
