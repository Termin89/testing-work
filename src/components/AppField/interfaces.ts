import { PlaceholderModel } from './optionals-components/Plaseholders/interfaces';
export interface SwitchersField {
  isFocus: boolean
}

export interface BaseFieldModel {
  id: string,
  placeholder?: PlaceholderModel
}

export interface DataFieldComponent {
  isFocus: boolean
}

export interface PropsFieldComponent {
  model: BaseFieldModel
  modelValue: string
}