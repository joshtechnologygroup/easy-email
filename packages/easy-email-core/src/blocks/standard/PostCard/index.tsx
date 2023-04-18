import React from 'react';
import { merge } from 'lodash';
import { Liquid } from 'liquidjs';

import { IBlockData } from '@core/typings';
import { AdvancedType, BasicType } from '@core/constants';
import { createBlock } from '@core/utils/createBlock';
import { getPreviewClassName } from '@core/utils';

import { MJML } from './template';

const engine = new Liquid();

export type IPostCard = IBlockData<
  {},
  {
    title: string;
    description: string;
    postLink: string;
    image: string;
    attachmentUrl?: string;
  }
>;

export const PostCard = createBlock<IPostCard>({
  name: 'Post',
  type: BasicType.POST_CARD,
  create: payload => {
    const defaultData: IPostCard = {
      type: BasicType.POST_CARD,
      data: {
        // TODO: CP-25658: Update default data
        value: {
          title: 'Title',
          description:
            'Recusandae illum alias. Suscipit illo nulla nostrum explicabo pariatur a qui tenetur culpa. Repellendus',
          postLink: '#',
          image:
            'http://res.cloudinary.com/dwkp0e1yo/image/upload/v1681283275/xq0ybcd1j77zfxeoz9up.png',
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
      link: data.value.postLink,
      ...(data.value.image ? { image: data.value.image } : {}),
      // ...(data.value.attachmentUrl ? {
      // TODO: CP-25658: Integrate attachemnt details, and update comment image src in template
      // })
      class: mode === 'testing' && idx ? getPreviewClassName(idx, type) : '',
    };

    return engine.parseAndRenderSync(MJML, mjmlData);
  },
});
