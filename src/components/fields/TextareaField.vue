<script lang="ts" setup>
import { defineProps } from 'vue';
import type { TextareaField } from '../../models/form-types';
import type { FormModel } from '../../models/form-types';

const props = defineProps<{
  field: TextareaField;
  keyName: string;
  model: FormModel;
}>();

import { computed } from 'vue';

const stringValue = computed({
  get: () => String(props.model[props.keyName]),
  set: (val: string) => {
    props.model[props.keyName] = val;
  },
});
</script>

<template>
  <textarea
    :id="keyName"
    class="form-control"
    v-bind="field.attrs"
    v-model="stringValue"
  ></textarea>
</template>