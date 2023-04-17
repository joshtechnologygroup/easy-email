import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';

import { MJML } from './template';

const engine = new Liquid();

export type IHeading = IBlockData<
  {},
  {
    heading: string;
  }
>;

export const Heading = createBlock<IHeading>({
  name: 'Heading',
  type: BasicType.HEADING,
  create: payload => {
    const defaultData: IHeading = {
      type: BasicType.HEADING,
      data: {
        value: {
          heading: 'Type your heading..',
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
      heading: data.value.heading,
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
