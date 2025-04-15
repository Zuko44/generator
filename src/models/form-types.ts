export type FieldType = 'input' | 'select' | 'textarea' | 'checkbox';

interface BaseField {
  label: string;
  attrs?: Record<string, unknown>;
}

export interface InputField extends BaseField {
  type: 'input';
}

export interface SelectField extends BaseField {
  type: 'select';
  options: { label: string; value: string }[];
}

export interface TextareaField extends BaseField {
  type: 'textarea';
}

export interface CheckboxField extends BaseField {
  type: 'checkbox';
}

export type FormField = InputField | SelectField | TextareaField | CheckboxField;
export type FormSchema = Record<string, FormField>;
export type FormModel = Record<string, string | boolean | number>;