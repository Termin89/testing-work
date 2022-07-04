
<template>
  <div class="placeholder-top-hide" :class="{ '_hide': isTop }">
    {{ model.text }}
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { PlaceholderModel, StatesPlaceholder } from './interfaces';

const props = defineProps<{
  model: PlaceholderModel
}>()

const isTop = computed(() => {
  return props.model.state === StatesPlaceholder.hide
})

</script>

<style scoped>
  .placeholder-top-hide {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 10px;
  }

  .placeholder-top-hide._hide {
    font-size: 12px;
    transform: translateY(0);
    top: 4px;
  }
</style>