<template>
  <input
    v-model="value"
    :id="id"
    class="base-input"
    :class="{ __error: isError }"
    type="text"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps(['modelValue', 'id', 'isError']);
const emits = defineEmits(['update:modelValue']);

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits('update:modelValue', value);
  },
});
</script>

<style scoped lang="scss">
.base-input {
  --main-color: #e6e6e6;
  --text-main-color: #5e5b76;

  --error-color: #f53d5c;
  --error-shadow-color: #fdd8de;

  --focus-color: #6e7ffc;
  --focus-shadow-color: #e1e4fe;

  padding: 22px 45px 18px 15px;
  width: 100%;
  background: #fff;
  height: 64px;
  border-radius: 10px;
  border: 1px solid var(--main-color);
  color: var(--text-main-color);
  box-sizing: border-box;
  margin: 0;
  &:focus {
    border-color: var(--focus-color);
    box-shadow: 0 0 0 2px var(--focus-shadow-color);
    border-width: 2px;
  }

  &.__error {
    border-color: var(--error-color);
    box-shadow: 0 0 0 2px var(--error-shadow-color);
  }
}
</style>
