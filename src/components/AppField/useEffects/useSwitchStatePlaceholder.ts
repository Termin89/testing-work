import { StatesPlaceholder } from '../optionals-components/Plaseholders/interfaces';
import { reactive,  watch } from 'vue';
import { DataFieldComponent, PropsFieldComponent } from '../interfaces';

export function useSwitchStatePlaceholder(dataField: DataFieldComponent, propField: Readonly<Partial<PropsFieldComponent>>) {
  const model = propField.model?.placeholder ? reactive(propField.model.placeholder) : false

  watch([() => dataField.isFocus, () => propField.modelValue], () => {
    if (model) {
      if(dataField.isFocus || propField.modelValue) {
        model.state = StatesPlaceholder.hide 
      } else {
        model.state = StatesPlaceholder.show 
      }
    }
    
  })

  return model
}
