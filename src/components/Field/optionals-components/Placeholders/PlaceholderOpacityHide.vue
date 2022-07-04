<template>
  <div class="placeholder-opacity-hide" :class="{'_hide': isOpacity}">
  {{ model.text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PlaceholderModel, StatesPlaceholder } from './interfaces';

const props = defineProps<{
  model: PlaceholderModel
}>()

const isOpacity = computed(() => {
  return props.model.state === StatesPlaceholder.hide
})
</script>

<style scoped>
   .placeholder-opacity-hide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }

  .placeholder-opacity-hide._hide {
    font-size: 12px;
    transform: translateY(0);
    top: 4px;
    opacity: 0;
  }
</style>