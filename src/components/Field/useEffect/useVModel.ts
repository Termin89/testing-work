import { computed } from 'vue';
interface VModelProp {
  modelValue?: string
}

export function useVModel(props: VModelProp, emits: Function) {
  const value = computed({
    get () {
      return props.modelValue
    },
    set (val) {
      emits('update:modelValue', val)
    }
  })
  
  return value
}