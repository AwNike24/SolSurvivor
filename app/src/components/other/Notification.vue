<template>
  <div
    v-if="showNotification"
    class="alert mb-1 animate__animated animate__bounceInRight"
    @click="removeNotification(index)"
  >
    <div class="alert-menu alertMenu font-weight-light">
      <main class="mb-1 background container">
        <div
          class="title"
          :class="{
            goodNews: notification.status === 'ok',
            cancelOrder:
              notification.status === 'cancel' ||
              notification.status === 'expired',
            cancelNews: notification.status === 'danger',
            shake: notification.status === 'orderFill',
          }"
        >
          <font-awesome-icon
            v-if="
              notification.status === 'ok' && notification.type !== 'orderFill'
            "
            icon="check-circle"
            class="me-1"
          />
          <font-awesome-icon
            v-if="notification.status === 'cancel'"
            icon="exclamation-triangle"
            class="me-1"
          />
          <font-awesome-icon
            v-if="notification.type === 'orderFill'"
            icon="handshake"
            class="me-1"
          />

          <font-awesome-icon
            v-if="notification.status === 'danger'"
            icon="exclamation-triangle"
            class="me-1"
          />
          <b> {{ notification.title }} </b>
        </div>
        <div class="betinfo">
          {{ notification.detail }}
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    index: {
      type: Number,
      required: true,
    },
    notification: {
      type: Object,
      required: true,
    },
  },
  computed: {
    showNotification() {
      if (
        typeof this.notification === "undefined" ||
        this.notification === null
      ) {
        return false;
      }

      return true;
    },
    convertedType() {
      if (this.notification.type === "orderFill") {
        return "Your Order Has Been Filled";
      }
      if (this.notification.type === "cancel") {
        return "Order Cancelled";
      }
      return "";
    },
  },
  methods: {
    removeNotification(index) {
      this.$emitter.emit("removeNotification", index);
    },
  },
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"

.title
  font-weight: normal
  font-size: $font-size-sm
  @media screen and (max-width: map-get($grid-breakpoints, md))
    font-size: $font-size-sm

.betinfo
  font-weight: bold
  color: $gray-800
  font-size: $font-size-xs

  @media screen and (max-width: map-get($grid-breakpoints, md))
    font-size: $font-size-xs

.goodNews
  color: #009f25

.cancelNews
  color: $color-secondary

.alertMenu
  font-size: small

.alert
  width: 275px
  box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)
  border-radius: 4px
  background: #f8f8f8
  padding: .4rem .4rem
  color: #272d58
  border: 1px solid $gray-300

  &-header
    font-size: $font-size-sm
    font-weight: $font-weight-bold
    cursor: pointer

  &-menu

    a
      font-size: $font-size-sm
      font-weight: $font-weight-bold
      display: block
      width: 100%
      padding: .5rem 1.5rem
      color: #272d58

      &:hover, &.router-link-active
        text-decoration: none
  &:hover
    cursor: pointer

.cancelOrder
  color: #d28f01
</style>
