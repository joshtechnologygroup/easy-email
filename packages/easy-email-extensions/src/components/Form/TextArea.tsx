import {
  Input as ArcoInput,
  TextAreaProps as ArcoTextAreaProps
} from '@arco-design/web-react';
import { Grid, Popover, Button as ArcoButton } from '@arco-design/web-react';
import { MergeTags } from '@extensions';
import { IconFont, useEditorProps, FIXED_CONTAINER_ID } from 'easy-email-editor';
import React, { useCallback, useRef, useState, useEffect } from 'react';

export interface TextAreaProps extends Omit<ArcoTextAreaProps, 'onChange'> {
  quickchange?: boolean;
  value: string;
  onChange: (val: string) => void;
  showMergeTags?: boolean;
}

export function TextArea(props: TextAreaProps) {
  const {
    onChange: propsOnChange,
    showMergeTags
  } = props;

  const { mergeTags } = useEditorProps();
  const inputRef = useRef<any>(null);

  const [selectedMergeTag, setSelectedMergeTag] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);

  const onChange = useCallback(
    (val: string) => {
      propsOnChange(val);
    },
    [propsOnChange]
  );

  useEffect(() => {
    if (inputRef.current && selectedMergeTag) {
      const index =
        inputRef.current.dom.value.indexOf(selectedMergeTag) + selectedMergeTag.length;
      inputRef.current.dom.selectionStart = index;
      inputRef.current.dom.selectionEnd = index;
      inputRef.current.dom.focus();
      setSelectedMergeTag('');
    }
  }, [selectedMergeTag]);

  const onVisibleChange = useCallback((v: boolean) => {
    setPopupVisible(v);
  }, []);

  const getPopoverMountNode = () =>
    document.getElementById(FIXED_CONTAINER_ID)!;

  return (
    <Grid.Row style={{ width: '100%' }}>
      <ArcoInput.TextArea
        {...{ ...props, quickchange: undefined }}
        onChange={(value, e) => onChange(value)}
        style={{ flex: 1 }}
        ref={inputRef}
      />
      {showMergeTags && mergeTags && (
        <Popover
          trigger='click'
          popupVisible={popupVisible}
          onVisibleChange={onVisibleChange}
          getPopupContainer={getPopoverMountNode}
          content={(
            <MergeTags
              value={props.value}
              onChange={value => {
                if (inputRef?.current) {
                  const { selectionStart, selectionEnd } = inputRef.current.dom;
                  const inputValue = inputRef.current.dom.value;
                  const newValue = `${inputValue.substring(
                    0,
                    selectionStart || 0,
                  )}${value}${inputValue.substring(selectionEnd || 0)}`;

                  propsOnChange(newValue);
                  setSelectedMergeTag(value);
                  setPopupVisible(false);
                }
              }}
            />
          )}
        >
          <ArcoButton icon={<IconFont iconName='icon-merge-tags' />} />
        </Popover>
      )}
    </Grid.Row>
  )
}
