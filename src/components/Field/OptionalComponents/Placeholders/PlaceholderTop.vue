<template>
  <label
    class="field__placeholder-top --global-center-content"
    :class="{ '__position-top': model.isHide }"
    :for="model.for"
    >{{ model.text }}
  </label>
</template>

<script setup lang="ts">
import { PlaceholderModel } from '../../interfaces';
const props = defineProps<{
  model: PlaceholderModel;
}>();
</script>

<style scoped lang="scss">
.field {
  &__placeholder-top {
    left: 10px;
    font-size: 22px;
    transition: top 0.2s, font-size 0.3s, transform 0.2s;
    &.__position-top {
      top: 4px;
      transform: translateY(0);
      font-size: 16px;
    }
  }
}
</style>
