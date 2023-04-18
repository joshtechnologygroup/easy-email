import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';

import { MJML } from './template';

const engine = new Liquid();

export type IRoundedButton = IBlockData<
  {},
  {
    text: string;
    link: string;
  }
>;

export const RoundedButton = createBlock<IRoundedButton>({
  name: 'Rounded Button',
  type: BasicType.ROUNDED_BUTTON,
  create: payload => {
    const defaultData: IRoundedButton = {
      type: BasicType.ROUNDED_BUTTON,
      data: {
        // TODO: CP-25658: Update default data, and button padding to be fixed [part of phase 1]
        value: {
          text: 'Button text',
          link: '#',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.NEWSLETTER_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx,
    } = params;

    const mjmlData = {
      text: data.value.text,
      link: data.value.link,
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
