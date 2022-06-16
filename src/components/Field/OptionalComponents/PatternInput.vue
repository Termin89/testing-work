<template>
  <div class="field__pattern" v-if="!state.isValid">
    {{ model.msg }}
  </div>
</template>

<script setup lang="ts">
import { PatternInput } from '../interfaces';
import { watch, reactive } from 'vue';

const state = reactive({
  isValid: true,
});

const props = defineProps<{
  model: PatternInput;
  value: string;
}>();

const emit = defineEmits(['isValid']);

watch(
  () => props.value,
  (value) => {
    state.isValid = props.model.pattern.test(value);
    emit('isValid', state.isValid);
  }
);
</script>

<style scoped>
.field__pattern {
  color: var(--error-color);
}
</style>
