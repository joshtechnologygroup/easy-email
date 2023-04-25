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
    image: string;
    signatureImage: string;
  }
>;

export const ThankyouCard = createBlock<IThankyouCard>({
  name: 'Thank you card',
  type: BasicType.THANKYOU_CARD,
  create: payload => {
    const defaultData: IThankyouCard = {
      type: BasicType.THANKYOU_CARD,
      data: {
        // TODO: CP-25658: Update default data
        value: {
          title: 'Title',
          description: 'Description',
          name: 'Name',
          designation: 'Designation',
          image: '#',
          signatureImage: '#',
        },
      },
      attributes: {},
      children: [],
    };
    return merge(defaultData, payload);
  },
  validParentType: [BasicType.WRAPPER, AdvancedType.WRAPPER, BasicType.POD_CUSTOM_PAGE],
  render(params) {
    const {
      data: { data, type },
      mode,
      idx,
    } = params;

    const mjmlData = {
      title: data.value.title,
      description: data.value.description,
      name: data.value.name,
      designation: data.value.designation,
      ...(data.value.image ? { image: data.value.image } : {}),
      ...(data.value.signatureImage ? { signatureImage: data.value.signatureImage } : {}),
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
