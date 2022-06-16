export interface FieldOptional {
  label?: string,
  id: string,
  validity?: Array<PatternInput>,
  isChecked?: boolean,
  isIlluminationFocus?: boolean
}

export interface PatternInput {
  pattern: RegExp,
  msg: string
}

export interface PatternListModel {
  patterns: Array<PatternInput> | undefined,
  value: string,
  isCheck: boolean
}

export interface BaseInputModel {
  id: string,
  isError: boolean,
  autofocus: boolean
}

export interface LabelInputModel {
  text: string,
  for: string,
  isPositionTopLabel: boolean
}
