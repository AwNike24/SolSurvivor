<template>
  <div>
    <div class="notifications-wrapper">
      <notification
        v-for="(notification, key) in notifications"
        :key="key"
        :index="key"
        :notification="notification"
      />
    </div>
    <router-view />
    <footer-section />
  </div>
</template>

<script>
import FooterSection from "@/components/landing/FooterSection.vue";
import Notification from "@/components/other/Notification.vue";
import { mapMutations, mapState } from "vuex";

export default {
  name: "ApplicationLayout",
  components: {
    FooterSection,
    Notification,
  },
  computed: {
    ...mapState({
      notifications: (state) => state.notifications,
    }),
  },
  methods: {
    ...mapMutations(["addNotification", "removeNotificationByIndex"]),
  },
  created() {
    this.$emitter.on("shown-alert", (alert) => {
      this.addNotification(alert);
      setTimeout(() => {
        this.removeNotificationByIndex(alert);
      }, 5000);
    });
    this.$emitter.on("removeNotification", this.removeNotificationByIndex);
  },
};
</script>

<style scoped lang="sass">

.notifications-wrapper
  z-index: 9
  position: fixed
  right: 0%
  top: 5%
  @media (min-width: 768px)
    right: 2px
    top: 20px
    width: 250px
</style>
