
<template>
  <div class="app-field__placeholder-top-hide" :class="{_hide: isHide}">
    {{ model.text }}
  </div>
</template>

<script setup lang="ts">
import { StatesPlaceholder, PlaceholderModel } from './interfaces';
import { computed } from 'vue';
  const props = defineProps<{model: PlaceholderModel}>()

  const isHide = computed(() => {
    console.log('isHide', props.model.state)
    return props.model.state === StatesPlaceholder.hide
  })
</script>

<style scoped>
  .app-field__placeholder-top-hide {
    color: rgba(54, 51, 51, 0.747);
    position: absolute;
    font-size: 17px;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
  }
  .app-field__placeholder-top-hide._hide {
    font-size: 12px;
    top: 5px;
    transform: translateY(0);
  }
</style>