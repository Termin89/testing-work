
<template>
  <div class="field-input-zone _hide">
    <input class="field" type="text" v-model="value"
      @focus="isFocus"
      @blur="isBlur"/>
    <component :is=PlaceholderTopHide :model="placeholderModel"/>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from './useEffect/useVModel';
import PlaceholderTopHide from './optionals-components/Placeholders/PlaceholderTopHide.vue';
import { PlaceholderModel, StatesPlaceholder } from './optionals-components/Placeholders/interfaces';
import { ref, Ref} from 'vue';
import PlaceholderOpacityHide from './optionals-components/Placeholders/PlaceholderOpacityHide.vue';
import { StatesField } from './interfaces';
import { usePlaceholderManage } from './useEffect/usePlaseholderManage';

const state: Ref<StatesField> = ref<StatesField>(StatesField.blur)
const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const placeholder = {
  text: "Email",
  state: StatesPlaceholder.show
}

const value = useVModel(props, emits)
const placeholderModel: PlaceholderModel = usePlaceholderManage({model: placeholder, state, value})


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