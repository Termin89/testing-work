<template>
  <form class="form-auth">
    <Field class="form-auth__field" v-model="fullname" :optional="optionalInputs.fullName"/>
    <Field class="form-auth__field" v-model="passport" :optional="optionalInputs.passport"/>
    <Field class="form-auth__field" v-model="email" :optional="optionalInputs.email"/>
  </form>
</template>

<script setup lang="ts">
import Field from '../Field/Field.vue';
import { ref } from 'vue';
import { optionalInputs } from './optionals';

let fullname = ref('');
let passport = ref('');
let email = ref('');

</script>

<style scoped>
.form-auth {
  margin: 20px auto 0
}
.form-auth__field {
  margin-bottom: 20px
}
</style>
