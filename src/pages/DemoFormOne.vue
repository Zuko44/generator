<script lang="ts" setup>
import { computed, onMounted } from 'vue';
// @ts-ignore
import { useStore } from 'vuex';
import BioTextareaCustom from '../components/custom/BioTextareaCustom.vue';
import FormGenerator from '../components/FormGenerator.vue';
import type { FormSchema } from '../models/form-types';

const store = useStore();

const formSchema: FormSchema = {
  name: { type: 'input', label: 'Имя', attrs: { placeholder: 'Введите имя' } },
  gender: {
    type: 'select',
    label: 'Пол',
    options: [
      { label: 'Мужской', value: 'male' },
      { label: 'Женский', value: 'female' },
    ],
  },
  bio: { type: 'textarea', label: 'О себе', attrs: { rows: 3 } },
};

const formData = computed(() => store.state.formData);

function onSave() {
  store.dispatch('saveForm');
}

function onCancel() {
  store.commit('revertForm');
  console.log('Reverted to initial state:', store.state.formData);
}

onMounted(() => {
  // Симуляция загрузки данных с сервера
  setTimeout(() => {
    const initial = {
      name: 'Алексей',
      gender: 'male',
      bio: 'Привет! Я здесь, чтобы заполнить форму.'
    };
    store.commit('setInitialForm', initial);
    console.log('Form initialized with data from API:', initial);
  }, 1000);
});
</script>

<template>
  <h2>Форма с пользовательскими слотами</h2>
  <FormGenerator :schema="formSchema" v-model:model="formData" @save="onSave" @cancel="onCancel">
    <template #bio-custom="{ model, keyName }">
      <BioTextareaCustom :model="model" :key-name="keyName" />
    </template>
</FormGenerator>
</template>