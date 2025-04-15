<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';
import type { FormSchema, FormModel } from '../models/form-types';

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

      <slot :name="key + '-custom'">
        <input
          v-if="field.type === 'input'"
          v-model="model[key]"
          v-bind="field.attrs"
          :id="key"
          class="form-control"
        />
        <select
          v-else-if="field.type === 'select'"
          v-model="model[key]"
          :id="key"
          class="form-control"
        >
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </select>
        <textarea
          v-else-if="field.type === 'textarea'"
          v-model="model[key] as string"
          v-bind="field.attrs"
          :id="key"
          class="form-control"
        ></textarea>
        <input
          v-else-if="field.type === 'checkbox'"
          type="checkbox"
          v-model="model[key]"
          :id="key"
        />
      </slot>
    </div>
    <button @click="handleSave">Сохранить</button>
    <button @click="handleCancel">Отменить</button>
  </form>
</template>