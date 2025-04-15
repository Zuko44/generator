import type { FormModel } from './form-types';

export interface RootState {
  formData: FormModel;
  initialFormData: FormModel;
}

export interface UpdateFormPayload {
  key: keyof FormModel;
  value: string | boolean | number;
}