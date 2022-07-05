
<template>
  <div class="field-input-zone _hide">
    <input :id="optionals.id" class="field" type="text" v-model="value"
      @focus="isFocus"
      @blur="isBlur"/>
    <component :is=PlaceholderTopHide :model="placeholderModel" v-if="placeholderModel"/>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from './useEffect/useVModel';
import PlaceholderTopHide from './optionals-components/Placeholders/PlaceholderTopHide.vue';
import { PlaceholderModel, StatesPlaceholder } from './optionals-components/Placeholders/interfaces';
import { ref, Ref} from 'vue';
import PlaceholderOpacityHide from './optionals-components/Placeholders/PlaceholderOpacityHide.vue';
import { StatesField, FieldModel } from './interfaces';
import { usePlaceholderManage } from './useEffect/usePlaseholderManage';

const state: Ref<StatesField> = ref<StatesField>(StatesField.blur)
const props = defineProps<{
  modelValue: string | undefined,
  optionals: FieldModel 
}>()
const emits = defineEmits(['update:modelValue'])

const placeholder = props.optionals.optionals?.placeholder

const value = useVModel(props, emits)
const placeholderModel: PlaceholderModel | undefined = usePlaceholderManage({model: placeholder, state, value})


function isFocus() {
  state.value = StatesField.focus
}

function isBlur() {
  state.value = StatesField.blur
}

</script>

<style scoped>
  .field {
    padding: 20px 10px 10px;
    border: 3px solid rgb(112, 18, 112);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  .field-input-zone {
    position: relative;
  }


</style>