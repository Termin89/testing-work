import { reactive } from 'vue';
import { SwitchersField } from '../interfaces';

export function useSwitcherField() {
  const switcher:SwitchersField = reactive({
    isFocus: false
  })
  return switcher 
}