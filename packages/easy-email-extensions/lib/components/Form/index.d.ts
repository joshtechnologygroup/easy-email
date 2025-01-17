import { SliderProps, InputNumberProps, SwitchProps, DatePickerProps, CheckboxGroupProps, TreeSelectProps } from '@arco-design/web-react';
import { ImageUploaderProps } from './ImageUploader';
import { UploadFieldProps } from './UploadField';
import { ColorPickerProps } from './ColorPicker';
import { SelectProps } from './Select';
import { RadioGroupProps } from './RadioGroup';
import enhancer from './enhancer';
import { InputProps } from './Input';
import { TextAreaProps } from './TextArea';
import { InputWithUnitProps } from './InputWithUnit';
import { EditTabProps } from './EditTab';
import { EditGridTabProps } from './EditGridTab';
import { InlineTextProps } from './InlineTextField';
import { AutoCompleteProps } from './AutoComplete';
export { RichTextField } from './RichTextField';
export declare const TextField: (props: import("./enhancer").EnhancerProps<InputProps> & Omit<InputProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const InputWithUnitField: (props: import("./enhancer").EnhancerProps<InputWithUnitProps> & Omit<InputWithUnitProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const SearchField: (props: import("./enhancer").EnhancerProps<InputProps> & Omit<InputProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const TextAreaField: (props: import("./enhancer").EnhancerProps<TextAreaProps> & Omit<TextAreaProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const NumberField: (props: import("./enhancer").EnhancerProps<InputNumberProps> & Omit<InputNumberProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const SliderField: (props: import("./enhancer").EnhancerProps<SliderProps> & Omit<SliderProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const ColorPickerField: (props: import("./enhancer").EnhancerProps<ColorPickerProps> & Omit<ColorPickerProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const UploadField: (props: import("./enhancer").EnhancerProps<UploadFieldProps> & Omit<UploadFieldProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const ImageUploaderField: (props: import("./enhancer").EnhancerProps<ImageUploaderProps> & Omit<ImageUploaderProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const SelectField: (props: import("./enhancer").EnhancerProps<SelectProps> & Omit<SelectProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const TreeSelectField: (props: import("./enhancer").EnhancerProps<TreeSelectProps> & Omit<TreeSelectProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const AutoCompleteField: (props: import("./enhancer").EnhancerProps<AutoCompleteProps> & Omit<AutoCompleteProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const RadioGroupField: (props: import("./enhancer").EnhancerProps<RadioGroupProps> & Omit<RadioGroupProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const SwitchField: (props: import("./enhancer").EnhancerProps<SwitchProps> & Omit<SwitchProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const DatePickerField: (props: import("./enhancer").EnhancerProps<DatePickerProps> & Omit<DatePickerProps, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const CheckboxField: (props: import("./enhancer").EnhancerProps<CheckboxGroupProps<any>> & Omit<CheckboxGroupProps<any>, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const EditTabField: (props: import("./enhancer").EnhancerProps<EditTabProps<any>> & Omit<EditTabProps<any>, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const EditGridTabField: (props: import("./enhancer").EnhancerProps<EditGridTabProps<any>> & Omit<EditGridTabProps<any>, "value" | "onChange" | "mutators">) => JSX.Element;
export declare const InlineTextField: (props: import("./enhancer").EnhancerProps<InlineTextProps> & Omit<InlineTextProps, "value" | "onChange" | "mutators">) => JSX.Element;
export { enhancer };
