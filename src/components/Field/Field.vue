<template>
  <label :for="optional?.id" class="field">
    <div class="field__input-block">
      <!-- Внутри этого блока вставлять элементы которые будут внутри инпута -->
      <BaseInput
        :model="baseInputModel"
        v-model="value"
        class="field__input"
        @focus="isFocus"
        @blur="isBlur"
      />
      <component :is="PlaseholderTop" v-if="optional?.label" :model="plaseholderModel" />
      <component :is="CheckedSvg" v-if="isShowChecker" />
      <component :is="FocusIllmination" v-if="isShowIlluminationFocus" />
    </div>
    <div class="field__content">
      <!-- Внутри этого блока вставлять снаружи инпута -->
      <component :is="PatternListInput"
        v-if="optional?.validity"
        :model="patternListInputModel"
        @isValid="chackeValid"
      />
    </div>
  </label>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import { computed, reactive, watch } from 'vue';
import {
  FieldOptional,
  BaseInputModel,
  PlaseholderModel,
  PatternListModel,
} from './interfaces';
import PlaseholderTop from './OptionalComponents/PlaceholderTop.vue';
import CheckedInput from './OptionalComponents/Chackeds/CheckedInput.vue';
import PatternListInput from './OptionalComponents/PatternListInput.vue';
import FocusIllmination from './OptionalComponents/FocusIllmination.vue';
import CheckedSvg from './OptionalComponents/Chackeds/CheckedSvg.vue';

const state = reactive({
  isFocus: false,
  isError: false,
  isChacked: false,
});

const props = defineProps<{
  modelValue: string;
  optional?: FieldOptional;
  autofocus?: boolean;
}>();

const emits = defineEmits(['update:modelValue']);

const value = computed({
  get(): string {
    return props.modelValue;
  },
  set(value: string) {
    emits('update:modelValue', value);
  },
});

function isFocus() {
  state.isFocus = true;
  patternListInputModel.isCheck = false;
}

function isBlur() {
  patternListInputModel.value = props.modelValue;
  state.isFocus = false;
  patternListInputModel.isCheck = true;
}

function chackeValid(isValid: boolean) {
  state.isChacked = isValid;
  state.isError = !isValid;
}

const isShowChecker = computed(
  () => props.optional?.isChecked && state.isChacked
);

const isShowIlluminationFocus = computed(
  () => state.isFocus && props.optional?.isIlluminationFocus
);

const isHidePlaseholder = computed(() => {
  return !!props.modelValue || state.isFocus;
});

const baseInputModel: BaseInputModel = reactive({
  id: props.optional?.id || 'null',
  isError: false,
  autofocus: !!props.autofocus,
});

const plaseholderModel: PlaseholderModel = reactive({
  text: props.optional?.label || '',
  for: props.optional?.id || 'null',
  isHide: isHidePlaseholder,
});

const patternListInputModel: PatternListModel = reactive({
  patterns: props.optional?.validity,
  value: '',
  isCheck: false,
});

watch(state, () => {
  console.log(baseInputModel.isError, state.isError)
});
</script>

<style scoped lang="scss">
.field {
  display: block;
  font-size: 16px;
  &__input-block {
    position: relative;
  }
}
</style>
