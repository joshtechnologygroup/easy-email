import React from 'react';
import { IBlockData } from '@core/typings';
import { BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { merge } from 'lodash';
import { BasicBlock } from '@core/components/BasicBlock';
export type IButton = IBlockData<
  {
    align?: string;
    color?: string;
    'background-color'?: string;
    'container-background-color'?: string;
    border?: string;
    'border-radius'?: string;
    href?: string;
    rel?: string;
    target?: string;
    title?: string;
    padding?: string;
    'inner-padding'?: string;
    'text-align'?: string;
    'vertical-align'?: 'middle' | 'top' | 'bottom';
    width?: string;
    'font-family'?: string;
    'font-size'?: string;
    'font-style'?: string;
    'font-weight'?: string;
    'line-height'?: string;
    'letter-spacing'?: string;
    height?: string;
    'text-decoration'?: string;
    'text-transform'?: string;
  },
  { content: string; }
>;

export const Button = createBlock<IButton>({
  name: 'Button',
  type: BasicType.BUTTON,
  create: (payload) => {
    const defaultData: IButton = {
      type: BasicType.BUTTON,
      data: {
        value: {
          content: 'Button',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.COLUMN, BasicType.HERO],
  render(params) {
    const { data } = params;
    return <BasicBlock params={params} tag="mj-button">{data.data.value.content}</BasicBlock>;
  },

});
