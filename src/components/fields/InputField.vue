<script lang="ts" setup>
import { defineProps } from 'vue';
import type { InputField } from '../../models/form-types';
import type { FormModel } from '../../models/form-types';

defineProps<{
  field: InputField;
  keyName: string;
  model: FormModel;
}>();
</script>

<template>
  <input
    :id="keyName"
    class="form-control"
    v-bind="field.attrs"
    v-model="model[keyName]"
  />
</template>