<template>
  <div>
    <header-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue"
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
  name: "ApplicationLayout",
  components: {
    FooterComponent,
    HeaderComponent
  },
};
</script>

<style scoped lang="sass"></style>
