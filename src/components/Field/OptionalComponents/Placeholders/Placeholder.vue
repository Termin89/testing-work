<template>
  <label
    class="field__placeholder --global-center-content"
    :class="{ '__hide-right': model.isHide }"
    :for="model.for"
    >{{ model.text }}</label
  >
</template>

<script setup lang="ts">
import { PlaceholderModel } from '../../interfaces';
const props = defineProps<{
  model: PlaceholderModel;
}>();
</script>

<style scoped lang="scss">
.field {
  &__placeholder {
    opacity: 1;
    left: 10px;
    font-size: 22px;
    transition: left 0.2s, font-size 0.3s, transform 0.2s, opacity 0.3s;
    &.__hide-right {
      opacity: 0;
      left: 300px;
      transform: translateY(0);
      font-size: 16px;
    }
  }
}
</style>
