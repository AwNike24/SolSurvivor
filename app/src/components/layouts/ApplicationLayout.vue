<template>
  <div>
    <header-dashboar-component v-if="dashboar" />
    <header-component v-if="!dashboar" />
    <router-view />
    <footer-section />
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import HeaderDashboarComponent from "@/components/header/HeaderDashboarComponent.vue";
import FooterSection from "@/components/landing/FooterSection.vue";

export default {
  name: "ApplicationLayout",
  components: {
    FooterSection,
    HeaderDashboarComponent,
    HeaderComponent,
  },
  data() {
    return {
      dashboar : false,
    };
  },
  created() {
    if (this.$route.path !== '/') {
      this.dashboar = true;
    }
  },
};
</script>

<style scoped lang="sass"></style>
