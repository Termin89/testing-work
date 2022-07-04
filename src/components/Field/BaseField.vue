
<template>
  <div class="field-input-zone _hide">
    <input class="field" type="text" v-model="value"/>
    <component :is=PlaceholderOpacityHide :model="placeholderModel"/>
  </div>
</template>

<script setup lang="ts">
import { useVModel } from './useEffect/useVModel';
import PlaceholderTopHide from './optionals-components/Placeholders/PlaceholderTopHide.vue';
import { PlaceholderModel, StatesPlaceholder } from './optionals-components/Placeholders/interfaces';
import { reactive } from 'vue';
import PlaceholderOpacityHide from './optionals-components/Placeholders/PlaceholderOpacityHide.vue';

const props = defineProps(['modelValue'])
const emits = defineEmits(['update:modelValue'])

const value = useVModel(props, emits)

const placeholderModel: PlaceholderModel = reactive({
  text: "Email",
  state: StatesPlaceholder.hide
})

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