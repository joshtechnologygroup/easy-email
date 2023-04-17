import { useEditorProps, useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper, ImageUploaderField, TextField } from '@extensions';
import React from 'react';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';
import { Collapse } from '@arco-design/web-react';

export function PostCard() {
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
            label='Description'
            name={`${focusIdx}.data.value.description`}
            inline
            alignment='center'
          />
          <TextField
            label='Posts Link'
            name={`${focusIdx}.data.value.postLink`}
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
            name={`${focusIdx}.data.value.img`}
            uploadHandler={onUploadImage}
          />
        </Collapse.Item>
        <Collapse.Item
          name='2'
          header='Attachement'
        >
          <ImageUploaderField
            label='Attachement'
            labelHidden={false}
            inline
            name={`${focusIdx}.data.value.attachmentUrl`}
            uploadHandler={onUploadImage}
          />
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
