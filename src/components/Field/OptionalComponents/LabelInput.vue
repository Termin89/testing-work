<template>
  <label
      class="optional-input__label --global-center-content"
      :class="{ '__position-top': isPositionTopLabel }"
      >{{ text }} </label
    >
</template>

<script setup lang="ts">
const props = defineProps<{
  text?: string,
  isPositionTopLabel: boolean
}>()

</script>

<style scoped lang="scss">
.optional-input {
  display: block;
  position: relative;
  font-size: 16px;
  &__label {
    position: absolute;
    left: 10px;
    font-size: 22px;
    transition: top 0.2s, font-size 0.5s, transform 1s;
    &.__position-top {
      top: 4px;
      transform: translateY(0);
      font-size: 16px;
    }
  }
}
</style>