<script lang="ts" setup>
import { computed } from 'vue';
import { defineProps } from 'vue';
import type { FormModel } from '../../models/form-types';

const props = defineProps<{
  model: FormModel;
  keyName: string;
}>();

const stringValue = computed({
  get: () => String(props.model[props.keyName]),
  set: (val: string) => {
    props.model[props.keyName] = val;
  },
});
</script>

<template>
  <label :for="keyName">О себе (кастом):</label>
  <textarea
    :id="keyName"
    class="form-control custom-textarea"
    placeholder="Напиши что-нибудь..."
    v-model="stringValue"
  ></textarea>
</template>

<style scoped>
.custom-textarea {
  border: 2px dashed #999;
  padding: 12px;
  min-height: 100px;
  resize: vertical;
}
</style>