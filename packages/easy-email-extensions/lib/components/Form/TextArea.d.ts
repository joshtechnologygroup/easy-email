import { TextAreaProps as ArcoTextAreaProps } from '@arco-design/web-react';
export interface TextAreaProps extends Omit<ArcoTextAreaProps, 'onChange'> {
    quickchange?: boolean;
    value: string;
    onChange: (val: string) => void;
    showMergeTags?: boolean;
}
export declare function TextArea(props: TextAreaProps): JSX.Element;
