import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';

import { MJML } from './template';

const engine = new Liquid();

export type INews = IBlockData<
  {},
  {
    title: string;
    description: string;
    newsLink: string;
    img: string;
  }
>;

export const News = createBlock<INews>({
  name: 'News',
  type: BasicType.NEWS,
  create: payload => {
    const defaultData: INews = {
      type: BasicType.NEWS,
      data: {
        value: {
          title: 'Title',
          description:
            'Recusandae illum alias. Suscipit illo nulla nostrum explicabo pariatur a qui tenetur culpa. Repellendus',
          newsLink: '#',
          img: 'http://res.cloudinary.com/dwkp0e1yo/image/upload/v1681283275/xq0ybcd1j77zfxeoz9up.png',
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
      link: data.value.newsLink,
      image: '',
      ...(data.value.img ? { image: data.value.img } : {}),
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
