<template>
  <div class="app-field">
    <div class="app-field__input-zone">
      <input class="base-app-field" @focus="focusEvent" @blur="blurEvent" v-model="value"/>
      <component :is="AppPlaceholderTopHide" :model="placeholderModel" v-if="placeholderModel"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppPlaceholderTopHide from './optionals-components/Plaseholders/AppPlaceholderTopHide.vue';
import { PropsFieldComponent, DataFieldComponent } from './interfaces';
import { useSwitchStatePlaceholder } from './useEffects/useSwitchStatePlaceholder';
import { useSwitcherField } from './useEffects/useSwitcherField';
import { computed } from 'vue';

const switchers: DataFieldComponent = useSwitcherField()
const emits = defineEmits(['update:modelValue'])

const props = defineProps(['model', 'modelValue'])
const value = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emits('update:modelValue', newValue)
  }
})

const placeholderModel = useSwitchStatePlaceholder(switchers, props) 

function focusEvent() {
  switchers.isFocus = true;
}

function blurEvent() {
  switchers.isFocus = false;
}

</script>

<style scoped>
.base-app-field {
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid rgb(132, 36, 216);
  width: 100%;
  box-sizing: border-box;
}
.app-field__input-zone {
  position: relative;
}
</style>
