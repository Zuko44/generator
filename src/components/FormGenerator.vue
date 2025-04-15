<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';
import type { FormSchema, FormModel } from '../models/form-types';
import InputField from './fields/InputField.vue';
import SelectField from './fields/SelectField.vue';
import TextareaField from './fields/TextareaField.vue';
import CheckboxField from './fields/CheckboxField.vue';

defineProps<{
  schema: FormSchema;
  model: FormModel;
}>();

const emit = defineEmits(['save', 'cancel']);

const handleSave = () => {
  emit('save');
};

const handleCancel = () => {
  emit('cancel');
};
</script>

<template>
  <form @submit.prevent>
    <div v-for="(field, key) in schema" :key="key" class="form-group">
      <label :for="key">{{ field.label }}</label>

      <template v-if="$slots[key + '-custom']">
        <slot :name="key + '-custom'" :model="model" :field="field" :key-name="key"></slot>
      </template>

      <template v-else>
        <InputField
          v-if="field.type === 'input'"
          :field="field"
          :key-name="key"
          :model="model"
        />

        <SelectField
          v-else-if="field.type === 'select'"
          :field="field"
          :key-name="key"
          :model="model"
        />

        <TextareaField
          v-else-if="field.type === 'textarea'"
          :field="field"
          :key-name="key"
          :model="model"
        />

        <CheckboxField
          v-else-if="field.type === 'checkbox'"
          :field="field"
          :key-name="key"
          :model="model"
        />
      </template>
    </div>

    <button @click="handleSave">Сохранить</button>
    <button @click="handleCancel">Вернуть</button>
  </form>
</template>