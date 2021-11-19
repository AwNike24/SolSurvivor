<template>
  <div class="selector">
    <div
      v-for="option in options"
      :key="option.id"
      :class="{ 'option-selected': option.id === selected.id }"
      class="option"
      @click="$emit('update:selected', option)"
    >
      {{ option[displayKey] }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Selector",
  props: {
    options: {
      type: Array,
      required: true,
    },
    selected: {
      type: Object,
      required: true,
    },
    displayKey: {
      type: String,
      default: "name",
    },
  },
};
</script>

<style scoped lang="sass">

.selector
  display: flex
  width: 100%

.option
  flex-grow: 1
  text-align: center
  cursor: pointer
  padding: 1rem
  box-sizing: border-box
  font-size: 1.25rem
  font-weight: bold
  color: #343B86
  background: white
  transition: background .2s ease, color .2s ease
  user-select: none

  &:first-child
    border-radius: 10px 0 0 10px
    margin-right: .25rem

  &:last-child
    border-radius: 0 10px 10px 0
    margin-left: .25rem

  &:first-child:last-child
    border-radius: 10px


  &-selected
    cursor: default
    background: #969CCB
</style>
