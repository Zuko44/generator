<script lang="ts" setup>
import { defineProps } from 'vue';
import type { CheckboxField } from '../../models/form-types';
import type { FormModel } from '../../models/form-types';

defineProps<{
  field: CheckboxField;
  keyName: string;
  model: FormModel;
}>();
</script>

<template>
  <input
    type="checkbox"
    :id="keyName"
    v-model="model[keyName]">
</template>