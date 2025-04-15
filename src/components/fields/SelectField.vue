<script lang="ts" setup>
import { defineProps } from 'vue';
import type { SelectField } from '../../models/form-types';
import type { FormModel } from '../../models/form-types';

defineProps<{
  field: SelectField;
  keyName: string;
  model: FormModel;
}>();
</script>

<template>
  <select
    :id="keyName"
    class="form-control"
    v-model="model[keyName] as string"
  >
    <option v-for="option in field.options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>