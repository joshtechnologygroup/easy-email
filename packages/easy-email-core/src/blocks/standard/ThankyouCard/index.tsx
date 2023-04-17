import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';

import { MJML } from './template';

const engine = new Liquid();

export type IThankyouCard = IBlockData<
  {},
  {
    title: string;
    description: string;
    name: string;
    designation: string;
    img: string;
  }
>;

export const ThankyouCard = createBlock<IThankyouCard>({
  name: 'Thank you card',
  type: BasicType.THANKYOU_CARD,
  create: payload => {
    const defaultData: IThankyouCard = {
      type: BasicType.THANKYOU_CARD,
      data: {
        value: {
          title: 'Title',
          description:
            'Recusandae illum alias. Suscipit illo nulla nostrum explicabo pariatur a qui tenetur culpa. Repellendus',
          name: 'DR. P.N.',
          designation: 'Chairman',
          img: '#',
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
    const truncatedDescription = data.value.description.substring(0, 180);

    const mjmlData = {
      title: data.value.title,
      description: truncatedDescription,
      name: data.value.name,
      designation: data.value.designation,
      image: '',
      ...(data.value.img ? { image: data.value.img } : {}),
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
