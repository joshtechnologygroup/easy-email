import { useEditorProps, useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper, ImageUploaderField, TextField } from '@extensions';
import React from 'react';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';
import { Collapse } from '@arco-design/web-react';

export function ThankyouCard() {
  const { focusIdx } = useFocusIdx();
  const { onUploadImage } = useEditorProps();

  return (
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <CollapseWrapper defaultActiveKey={['0', '1']}>
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
            label='Title'
            name={`${focusIdx}.data.value.description`}
            inline
            alignment='center'
          />
        </Collapse.Item>

        <Collapse.Item
          name='0'
          header='Properties'
        >
          <TextField
            label='Title'
            name={`${focusIdx}.data.value.name`}
            inline
            alignment='center'
          />
          <TextField
            label='Title'
            name={`${focusIdx}.data.value.designation`}
            inline
            alignment='center'
          />
        </Collapse.Item>
        <Collapse.Item
          name='1'
          header='Image'
        >
          <ImageUploaderField
            label='Attachement'
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
