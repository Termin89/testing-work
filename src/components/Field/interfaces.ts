import { PlaceholderModel } from './optionals-components/Placeholders/interfaces';
import { Ref, WritableComputedRef } from 'vue';
export enum StatesField {
  'focus',
  'blur',
  'input'
}

export interface FieldModel {
  id: string,
  optionals?: {
    placeholder?: PlaceholderModel
  }
}

export interface ParamPlaceholderModelforUse {
  model: PlaceholderModel,
  state: Ref<StatesField>,
  value: WritableComputedRef<string | undefined>
}