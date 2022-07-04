import { reactive, computed } from 'vue';
import { BaseInputModel, FieldOptional } from './interfaces';

export function useState() {
  const state = reactive({
    isFocus: false,
    isError: false,
    isChecked: false,
  });
  return state;
}

export function useVModelValue(modelValue: string, emits: Function) {
  const value = computed({
    get(): string {
      return modelValue;
    },
    set(value: string) {
      emits('update:modelValue', value);
    },
  });

  return value;
}

export function useBaseInputModel(options: BaseInputModel) {
  const baseInputModel: BaseInputModel = reactive({
    id: options.id || 'null',
    isError: options.isError,
    autofocus: !!options.autofocus,
  });
  return baseInputModel;
}
