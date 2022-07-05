<template>
  <form class="form-auth">
    <Field v-model="email"/>
  </form>
</template>

<script setup lang="ts">
import Field from '../Field';
import { ref, watch } from 'vue';

const email = ref('')

</script>

<style scoped>
.form-auth {
  margin: 20px auto 0;
}
.form-auth__field {
  margin-bottom: 20px;
}
</style>
