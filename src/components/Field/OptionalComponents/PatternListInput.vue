<template>
  <div class="pattern-list-input">
    <div
      class="patterm-list-input__error"
      v-for="item in listError"
      :key="item.msg"
    >{{ item.msg }}</div>
  </div>
</template>

<script setup lang="ts">
import { PatternListModel } from '../interfaces';
import { computed, watch } from 'vue';

const props = defineProps<{ model: PatternListModel }>();
const listError = computed(() => props.model.patterns?.filter( regex => !regex.pattern.test(props.model.value) ));
const emmits = defineEmits(['isValid'])

watch(listError, (newList) => {
  if(props.model.value) newList?.length ? emmits('isValid', false) : emmits('isValid', true)
})

</script>

<style scoped>
.pattern-list-input {
  color: tomato;
}
</style>
