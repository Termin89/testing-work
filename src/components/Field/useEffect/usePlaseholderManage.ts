import {
  reactive,
  watch,
} from 'vue';
import { StatesPlaceholder, PlaceholderModel } from '../optionals-components/Placeholders/interfaces';
import { StatesField, ParamPlaceholderModelforUse } from '../interfaces';

export function usePlaceholderManage(param: ParamPlaceholderModelforUse) {

  const model = param.model;
  const state = param.state;
  const computedValue = param.value;

  let reactiveModel: PlaceholderModel | undefined = param.model ? reactive(model) : undefined
  if(param.model) {
    watch(state, () => {
      if (state.value == StatesField.blur && !computedValue.value) {
        reactiveModel.state = StatesPlaceholder.show;
      } else if (state.value == StatesField.focus) {
        reactiveModel.state = StatesPlaceholder.hide;
      }
    });
  }
  

  return reactiveModel;
}
