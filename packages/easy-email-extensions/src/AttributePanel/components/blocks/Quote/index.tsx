import { useEditorProps, useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper, ImageUploaderField, TextField } from '@extensions';
import React from 'react';
import { CollapseWrapper } from '@extensions/AttributePanel/components/attributes/CollapseWrapper';
import { Collapse } from '@arco-design/web-react';

export function QuoteCard() {
  const { focusIdx } = useFocusIdx();
  const { onUploadImage } = useEditorProps();

  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <CollapseWrapper defaultActiveKey={['0']}>
        <Collapse.Item
          name='0'
          header='Properties'
        >
          <TextField
            label='Title'
            name={`${focusIdx}.data.value.title`}
            inline
            alignment='center'
          />
          <TextField
            label='Designation'
            name={`${focusIdx}.data.value.designation`}
            inline
            alignment='center'
          />
          <TextField
            label='Description'
            name={`${focusIdx}.data.value.description`}
            inline
            alignment='center'
          />
        </Collapse.Item>

        <Collapse.Item
          name='1'
          header='Image'
        >
          <ImageUploaderField
            label='Image'
            labelHidden={false}
            inline
            name={`${focusIdx}.data.value.image`}
            uploadHandler={onUploadImage}
          />
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
