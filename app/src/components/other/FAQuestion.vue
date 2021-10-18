<template>
  <div :id="id" class="question">
    <div
      :class="{ expanded: expanded }"
      class="
        question-header
        py-3
        px-4
        d-flex
        justify-content-center
        align-items-center
      "
      @click="expanded = !expanded"
    >
      <h3>{{ title }}</h3>
      <font-awesome-icon icon="chevron-down" class="question-down-icon" />
    </div>
    <div v-show="expanded" class="question-content py-2 px-4">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FAQuestion",
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

<style scoped lang="sass">
@import "../../assets/styles/variables"

.question
    border: 1px solid rgba(78, 103, 223, 0.2)
    border-radius: 4px
    box-shadow: 0 2px 4px 0 rgba(78, 103, 223, 0.15)

    &:not(:last-child)
        margin-bottom: 1rem

    &-content
        border-top: 1px solid rgba(78, 103, 223, 0.2)

    &-header.expanded .question-down-icon
        transform: rotateZ(180deg)

    &-header
        color: $color-primary
        cursor: pointer


        h3
            margin: 0
            width: 100%
            font-weight: normal
            font-size: $font-size-base
</style>
