<template>
  <div>
    <header-dashboar-component v-if="dashboar" />
    <header-component v-if="!dashboar" />
    <router-view />
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/HeaderComponent.vue";
import HeaderDashboarComponent from "@/components/header/HeaderDashboarComponent.vue";
import FooterComponent from "@/components/footer/FooterComponent.vue";

export default {
  name: "ApplicationLayout",
  components: {
    FooterComponent,
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
