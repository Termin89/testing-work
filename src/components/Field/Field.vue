<template>
  <label :for="optional?.id" class="optional-input">
    <div class="optional-input__input-block">
      <!-- Внутри этого блока вставлять элементы которые будут внутри инпута -->
      <BaseInput
        v-bind="baseInputModel"
        v-model="value"
        class="optional-input__input"
        @focus="isFocus"
        @blur="isBlur"
      />
      <LabelInput v-if="optional?.label" v-bind="labelInputModel" />
      <CheckedInput v-if="isShowChecked" />
    </div>
    <div class="optional-input__content">
      <!-- Внутри этого блока вставлять снаружи инпута -->
      <PatternListInput v-if="optional?.validity" :model="patternListInputModel"
        @isValid="chackeValid"/>
    </div>
  </label>
</template>

<script setup lang="ts">
import BaseInput from './BaseInput.vue';
import { computed, reactive, watch } from 'vue';
import { FieldOptional, BaseInputModel, LabelInputModel, PatternListModel } from './interfaces';
import LabelInput from './OptionalComponents/LabelInput.vue';
import CheckedInput from './OptionalComponents/CheckedInput.vue';
import PatternListInput from './OptionalComponents/PatternListInput.vue';

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
  patternListInputModel.isCheck = false
}

function isBlur() {
  patternListInputModel.value = props.modelValue;
  state.isFocus = false;
  patternListInputModel.isCheck = true
}

function chackeValid(isValid: boolean) {
  state.isChacked = isValid
  state.isError = !isValid
}

const isShowChecked = computed(
  () => props.optional?.isChecked && state.isChacked
);

const isHideLabel = computed(() => {
  return !!props.modelValue || state.isFocus
});

const baseInputModel: BaseInputModel = reactive({
  id: props.optional?.id || 'null',
  isError: false,
  autofocus: !!props.autofocus,
});

const labelInputModel: LabelInputModel = reactive({
  text: props.optional?.label || '',
  for: props.optional?.id || 'null',
  isPositionTopLabel: isHideLabel,
});

const patternListInputModel: PatternListModel = reactive({
  patterns: props.optional?.validity,
  value: '',
  isCheck: false
})

watch(state, () => {
  baseInputModel.isError = state.isError;
});
</script>

<style scoped lang="scss">
.optional-input {
  display: block;
  font-size: 16px;
  &__input-block {
    position: relative;
  }
}
</style>
