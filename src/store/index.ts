// @ts-ignore
import { createStore } from 'vuex';
import type { RootState, UpdateFormPayload } from '../models/store-types';
import type { FormModel } from '../models/form-types';

const initialState = {
  formData: {
    name: '',
    gender: '',
    bio: '',
  },
  initialFormData: {
    name: '',
    gender: '',
    bio: '',
  },
} satisfies RootState;

export default createStore<RootState>({
  state: () => initialState,
  mutations: {
    setInitialForm(state: RootState, payload: FormModel) {
      state.formData = { ...payload };
      state.initialFormData = { ...payload };
    },
    updateFormField(state: RootState, { key, value }: UpdateFormPayload) {
      state.formData[key] = value;
    },
    resetForm(state: RootState) {
      state.formData = {
        name: '',
        gender: '',
        bio: '',
      };
    },
    revertForm(state: RootState) {
      state.formData = { ...state.initialFormData };
    },
  },
  actions: {
    saveForm({ state }: { state: RootState }) {
      console.log('Saving to API:', state.formData);
    },
  },
  modules: {},
});