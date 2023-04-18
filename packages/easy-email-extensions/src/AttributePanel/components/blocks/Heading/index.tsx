import { useFocusIdx } from 'easy-email-editor';
import { AttributesPanelWrapper, TextField } from '@extensions';
import React from 'react';
import { CollapseWrapper } from '../../attributes/CollapseWrapper';
import { Collapse } from '@arco-design/web-react';

export function Heading() {
  const { focusIdx } = useFocusIdx();

  return (
    // TODO: CP-25658: Integrate feilds
    <AttributesPanelWrapper style={{ padding: '20px' }}>
      <CollapseWrapper defaultActiveKey={['0']}>
        <Collapse.Item
          name='0'
          header='Properties'
        >
          <TextField
            label='Title'
            name={`${focusIdx}.data.value.heading`}
            inline
            alignment='center'
          />
        </Collapse.Item>
      </CollapseWrapper>
    </AttributesPanelWrapper>
  );
}
