<template>
  <form class="form-auth">
    <Field v-for="(value, key) in fieldRefs" :key="key" v-model="value.defaultValue" :optionals="value"/>
  </form>
</template>

<script setup lang="ts">
import Field from '../Field';
import { reactive } from 'vue';
import { inputs } from './optionals';

const fieldRefs = reactive(inputs)

</script>

<style scoped>
.form-auth {
  margin: 20px auto 0;
}
.form-auth__field {
  margin-bottom: 20px;
}
</style>
