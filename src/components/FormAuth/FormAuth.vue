<template>
  <form class="form-auth">
    <AppField
      :model="{
        id: 'full-name',
      }"
      class="form-auth__field"
      v-model="testing"
    />
    <AppField
      :model="{
        id: 'password',
        placeholder: {
          text: 'Пароль',
          state: StatesPlaceholder.show,
        },
      }"
      class="form-auth__field"
      v-model="fullname"
    />
    <AppField
      :model="{
        id: 'passport',
        placeholder: {
          text: 'Данные паспорта',
          state: StatesPlaceholder.show,
        },
      }"
      class="form-auth__field"
      v-model="passport"
    />
  </form>
</template>

<script setup lang="ts">
import AppField from '../AppField';
import { ref } from 'vue';
import { optionalInputs } from './optionals';
import { StatesPlaceholder } from '../AppField/optionals-components/Plaseholders/interfaces';
let testing = ref();
let fullname = ref('');
let passport = ref('');
let email = ref('');
</script>

<style scoped>
.form-auth {
  margin: 20px auto 0;
}
.form-auth__field {
  margin-bottom: 20px;
}
</style>
